#!/usr/bin/env node

/**
 * Font Linting Script
 * 
 * This script checks for font consistency issues across the codebase
 * and provides suggestions for improvement.
 */

const fs = require('fs')
const path = require('path')

// Font system configuration
const FONT_VARIABLES = {
  INTER: '--font-inter',
  MONTSERRAT: '--font-montserrat', 
  OSWALD: '--font-oswald',
  DM_SANS: '--font-dm-sans',
}

const FONT_FAMILIES = {
  BODY: `var(${FONT_VARIABLES.INTER}), sans-serif`,
  HEADING: `var(${FONT_VARIABLES.MONTSERRAT}), sans-serif`,
  DISPLAY: `var(${FONT_VARIABLES.OSWALD}), sans-serif`,
  UI: `var(${FONT_VARIABLES.DM_SANS}), sans-serif`,
}

const VALID_FONT_CLASSES = [
  'font-inter',
  'font-montserrat', 
  'font-oswald',
  'font-dm-sans',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-black'
]

const VALID_TEXT_CLASSES = [
  'text-14', 'text-16', 'text-17', 'text-18', 'text-21', 'text-22',
  'text-24', 'text-28', 'text-30', 'text-36', 'text-40', 'text-44',
  'text-54', 'text-70', 'text-76', 'text-86',
  'text-hero', 'text-section-title', 'text-card-title',
  'text-body-large', 'text-body', 'text-body-small',
  'text-button', 'text-label', 'text-caption'
]

class FontLinter {
  constructor() {
    this.issues = []
    this.stats = {
      totalFiles: 0,
      filesWithIssues: 0,
      totalIssues: 0,
      issuesByType: {}
    }
  }

  /**
   * Main linting function
   */
  async lint() {
    console.log('🔍 Starting font consistency check...\n')
    
    const files = this.getSourceFiles()
    this.stats.totalFiles = files.length
    
    for (const file of files) {
      await this.lintFile(file)
    }
    
    this.generateReport()
  }

  /**
   * Get all source files to lint
   */
  getSourceFiles() {
    const files = []
    this.getAllFilesRecursively('src', files)
    return files.filter(file => 
      /\.(js|jsx|ts|tsx)$/.test(file) && 
      !file.endsWith('.d.ts') &&
      !file.includes('node_modules')
    )
  }

  /**
   * Recursively get all files in a directory
   */
  getAllFilesRecursively(dir, files) {
    try {
      const items = fs.readdirSync(dir)
      
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          this.getAllFilesRecursively(fullPath, files)
        } else {
          files.push(fullPath)
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }
  }

  /**
   * Lint a single file
   */
  async lintFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      const lines = content.split('\n')
      
      lines.forEach((line, index) => {
        this.checkLine(filePath, line, index + 1)
      })
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}`)
    }
  }

  /**
   * Check a single line for font issues
   */
  checkLine(filePath, line, lineNumber) {
    // Skip font utility files as they contain font definitions
    if (filePath.includes('lib/fonts.ts') || filePath.includes('Typography.tsx')) {
      return
    }

    // Check for hardcoded font-family in inline styles
    if (line.includes('fontFamily') && line.includes(':')) {
      this.addIssue(filePath, lineNumber, 'hardcoded-font-family', 
        'Hardcoded fontFamily found. Use CSS classes or font utilities instead.', line.trim())
    }

    // Check for hardcoded font-size in inline styles
    if (line.includes('fontSize') && line.includes(':')) {
      this.addIssue(filePath, lineNumber, 'hardcoded-font-size',
        'Hardcoded fontSize found. Use Tailwind text classes or typography presets instead.', line.trim())
    }

    // Check for hardcoded font-weight in inline styles
    if (line.includes('fontWeight') && line.includes(':')) {
      this.addIssue(filePath, lineNumber, 'hardcoded-font-weight',
        'Hardcoded fontWeight found. Use Tailwind font weight classes instead.', line.trim())
    }

    // Check for invalid font classes
    const fontClassMatches = line.match(/font-[a-zA-Z0-9-]+/g)
    if (fontClassMatches) {
      fontClassMatches.forEach(match => {
        if (!VALID_FONT_CLASSES.includes(match)) {
          this.addIssue(filePath, lineNumber, 'invalid-font-class',
            `Invalid font class "${match}". Use valid classes: ${VALID_FONT_CLASSES.join(', ')}`, line.trim())
        }
      })
    }

    // Check for invalid text size classes (but allow color classes)
    const textClassMatches = line.match(/text-[a-zA-Z0-9-]+/g)
    if (textClassMatches) {
      textClassMatches.forEach(match => {
        // Allow color classes (text-red-500, text-white, etc.)
        const isColorClass = match.match(/^text-(white|black|gray-\d+|red-\d+|blue-\d+|green-\d+|yellow-\d+|orange-\d+|purple-\d+|pink-\d+|indigo-\d+|transparent|current)$/)
        // Allow alignment classes
        const isAlignmentClass = match.match(/^text-(left|right|center|justify)$/)
        // Allow decoration classes
        const isDecorationClass = match.match(/^text-(underline|no-underline|line-through)$/)
        
        if (match.startsWith('text-') && !VALID_TEXT_CLASSES.includes(match) && 
            !match.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/) &&
            !isColorClass && !isAlignmentClass && !isDecorationClass) {
          this.addIssue(filePath, lineNumber, 'invalid-text-class',
            `Invalid text class "${match}". Use typography presets or standard Tailwind text sizes.`, line.trim())
        }
      })
    }

    // Check for heading elements without proper typography classes
    if (line.match(/<h[1-6][^>]*>/)) {
      const hasTypographyClass = VALID_TEXT_CLASSES.some(cls => line.includes(cls))
      const hasFontClass = VALID_FONT_CLASSES.some(cls => line.includes(cls))
      
      if (!hasTypographyClass && !hasFontClass) {
        this.addIssue(filePath, lineNumber, 'heading-without-typography',
          'Heading element without typography classes. Consider using Typography component or typography presets.', line.trim())
      }
    }

    // Check for generic font-family declarations
    if (line.includes('font-family') && !Object.values(FONT_FAMILIES).some(font => line.includes(font))) {
      this.addIssue(filePath, lineNumber, 'generic-font-family',
        'Generic font-family found. Use predefined font variables from the font system.', line.trim())
    }
  }

  /**
   * Add an issue to the list
   */
  addIssue(filePath, lineNumber, type, message, code) {
    const issue = {
      file: filePath,
      line: lineNumber,
      type,
      message,
      code
    }
    
    this.issues.push(issue)
    this.stats.totalIssues++
    
    if (!this.stats.issuesByType[type]) {
      this.stats.issuesByType[type] = 0
    }
    this.stats.issuesByType[type]++
  }

  /**
   * Generate and display the linting report
   */
  generateReport() {
    console.log('\n📊 Font Consistency Report')
    console.log('=' .repeat(50))
    
    console.log(`\n📁 Files checked: ${this.stats.totalFiles}`)
    console.log(`⚠️  Total issues found: ${this.stats.totalIssues}`)
    
    if (this.issues.length === 0) {
      console.log('\n✅ No font consistency issues found!')
      return
    }
    
    // Group issues by file
    const issuesByFile = {}
    this.issues.forEach(issue => {
      if (!issuesByFile[issue.file]) {
        issuesByFile[issue.file] = []
      }
      issuesByFile[issue.file].push(issue)
    })
    
    this.stats.filesWithIssues = Object.keys(issuesByFile).length
    
    console.log(`📄 Files with issues: ${this.stats.filesWithIssues}`)
    
    // Display issues by type
    console.log('\n📋 Issues by type:')
    Object.entries(this.stats.issuesByType).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}`)
    })
    
    // Display detailed issues
    console.log('\n🔍 Detailed Issues:')
    console.log('-'.repeat(50))
    
    Object.entries(issuesByFile).forEach(([file, fileIssues]) => {
      console.log(`\n📄 ${file}`)
      fileIssues.forEach(issue => {
        console.log(`   Line ${issue.line}: ${issue.message}`)
        console.log(`   Code: ${issue.code}`)
        console.log(`   Type: ${issue.type}`)
        console.log('')
      })
    })
    
    // Provide suggestions
    this.provideSuggestions()
  }

  /**
   * Provide suggestions for fixing common issues
   */
  provideSuggestions() {
    console.log('\n💡 Suggestions for improvement:')
    console.log('-'.repeat(50))
    
    console.log('\n1. Use the Typography component for consistent styling:')
    console.log('   import { Typography, Heading, Text } from "@/components/ui/Typography"')
    console.log('   <Heading level={1} preset="hero">Title</Heading>')
    console.log('   <Text preset="body">Content</Text>')
    
    console.log('\n2. Use predefined typography classes:')
    console.log('   className="text-hero" // for hero titles')
    console.log('   className="text-section-title" // for section titles')
    console.log('   className="text-body" // for body text')
    
    console.log('\n3. Use font family classes:')
    console.log('   className="font-montserrat" // for headings')
    console.log('   className="font-inter" // for body text')
    console.log('   className="font-oswald" // for display text')
    
    console.log('\n4. Avoid inline styles for fonts:')
    console.log('   ❌ style={{ fontFamily: "Arial, sans-serif" }}')
    console.log('   ✅ className="font-inter"')
    
    console.log('\n5. Use the font utility system:')
    console.log('   import { fontUtils } from "@/lib/fonts"')
    console.log('   const style = fontUtils.generateFontStyle("hero-title")')
  }
}

// Run the linter if this script is executed directly
if (require.main === module) {
  const linter = new FontLinter()
  linter.lint().catch(console.error)
}

module.exports = FontLinter
