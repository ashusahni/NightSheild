# NightShield Font System

This document outlines the comprehensive font system implemented for NightShield, ensuring consistent typography across the application.

## Overview

The NightShield font system provides:
- **Consistent font families** across all components
- **Standardized typography scale** with predefined sizes and line heights
- **ESLint rules** to enforce font consistency
- **Utility components** for easy typography management
- **Automated linting** to catch font-related issues

## Font Families

### Available Fonts

| Font | Variable | Usage | Tailwind Class |
|------|----------|-------|----------------|
| Inter | `--font-inter` | Body text, UI elements | `font-inter` |
| Montserrat | `--font-montserrat` | Headings, titles | `font-montserrat` |
| Oswald | `--font-oswald` | Display text, hero titles | `font-oswald` |
| DM Sans | `--font-dm-sans` | UI components, buttons | `font-dm-sans` |

### Font Weights

| Weight | Value | Tailwind Class |
|--------|-------|----------------|
| Light | 300 | `font-light` |
| Normal | 400 | `font-normal` |
| Medium | 500 | `font-medium` |
| Semibold | 600 | `font-semibold` |
| Bold | 700 | `font-bold` |
| Extrabold | 800 | `font-extrabold` |
| Black | 900 | `font-black` |

## Typography Scale

### Text Sizes

| Size | Value | Line Height | Usage |
|------|-------|-------------|-------|
| 14 | 0.875rem | 1.225rem | Small text, captions |
| 16 | 1rem | 1.6875rem | Body text |
| 17 | 1.0625rem | 1.4875rem | Large body text |
| 18 | 1.125rem | 1.5rem | Emphasized body text |
| 21 | 1.3125rem | 1.875rem | Small headings |
| 22 | 1.375rem | 2rem | Card titles |
| 24 | 1.5rem | 2rem | Section subtitles |
| 28 | 1.75rem | 2.25rem | Medium headings |
| 30 | 1.875rem | 2.25rem | Large headings |
| 36 | 2.25rem | 2.625rem | Page titles |
| 40 | 2.5rem | 3rem | Major headings |
| 44 | 2.75rem | 1.3 | Hero subtitles |
| 54 | 3.375rem | 1.2 | Section titles |
| 70 | 4.375rem | 1.2 | Large hero text |
| 76 | 4.75rem | 1.2 | Extra large text |
| 86 | 5.375rem | 1.2 | Hero titles |

## Typography Presets

### Predefined Typography Styles

```typescript
// Hero titles
TYPOGRAPHY_PRESETS.hero-title

// Section titles  
TYPOGRAPHY_PRESETS.section-title

// Card titles
TYPOGRAPHY_PRESETS.card-title

// Subtitles
TYPOGRAPHY_PRESETS.subtitle

// Body text
TYPOGRAPHY_PRESETS.body-large
TYPOGRAPHY_PRESETS.body
TYPOGRAPHY_PRESETS.body-small

// UI elements
TYPOGRAPHY_PRESETS.button
TYPOGRAPHY_PRESETS.label
TYPOGRAPHY_PRESETS.caption
```

## Usage

### 1. Typography Component

Use the Typography component for consistent styling:

```tsx
import { Typography, Heading, Text, Label } from '@/components/ui/Typography'

// Basic usage
<Typography preset="hero-title">Welcome to NightShield</Typography>

// Semantic components
<Heading level={1} preset="hero">Main Title</Heading>
<Heading level={2} preset="section">Section Title</Heading>
<Text preset="body">This is body text</Text>
<Label preset="label">Form Label</Label>
```

### 2. Tailwind Classes

Use predefined Tailwind classes:

```tsx
// Typography classes
<h1 className="text-hero">Hero Title</h1>
<h2 className="text-section-title">Section Title</h2>
<p className="text-body">Body text</p>

// Font family classes
<div className="font-montserrat">Heading text</div>
<div className="font-inter">Body text</div>
<div className="font-oswald">Display text</div>
```

### 3. Font Utilities

Use the font utility system:

```tsx
import { fontUtils } from '@/lib/fonts'

// Generate font styles
const heroStyle = fontUtils.generateFontStyle('hero-title')

// Get Tailwind classes
const classes = fontUtils.getTailwindClasses('section-title')

// Apply styles
<div style={heroStyle}>Hero Text</div>
<div className={classes}>Section Title</div>
```

## ESLint Rules

### Font Consistency Rules

The following ESLint rules enforce font consistency:

- `font-consistency/font-family`: Ensures proper font family usage
- `font-consistency/font-weight`: Validates font weight classes
- `font-consistency/typography-presets`: Enforces typography preset usage
- `font-consistency/font-size`: Prevents hardcoded font sizes

### Restricted Patterns

The following patterns are restricted:

```tsx
// ❌ Avoid inline font styles
<div style={{ fontFamily: 'Arial, sans-serif' }}>
<div style={{ fontSize: '24px' }}>
<div style={{ fontWeight: 'bold' }}>

// ✅ Use classes instead
<div className="font-inter text-24 font-bold">
```

## Linting

### Run Font Linting

```bash
# Run font consistency check
npm run lint:fonts

# Run all linting (ESLint + Font linting)
npm run lint:all
```

### Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Hardcoded fontFamily | Use `className="font-inter"` |
| Hardcoded fontSize | Use `className="text-24"` |
| Hardcoded fontWeight | Use `className="font-bold"` |
| Invalid font class | Use valid classes from the font system |
| Heading without typography | Use `<Heading>` component or typography classes |

## Best Practices

### 1. Use Semantic Components

```tsx
// ✅ Good
<Heading level={1} preset="hero">Welcome</Heading>
<Text preset="body">Description</Text>

// ❌ Avoid
<h1 className="text-6xl font-bold">Welcome</h1>
<p className="text-base">Description</p>
```

### 2. Consistent Font Families

```tsx
// ✅ Good - Use predefined font families
<div className="font-montserrat">Heading</div>
<div className="font-inter">Body text</div>

// ❌ Avoid - Generic or hardcoded fonts
<div className="font-sans">Heading</div>
<div style={{ fontFamily: 'Arial' }}>Body text</div>
```

### 3. Typography Hierarchy

```tsx
// ✅ Good - Clear hierarchy
<Heading level={1} preset="hero">Main Title</Heading>
<Heading level={2} preset="section">Section Title</Heading>
<Heading level={3} preset="card">Card Title</Heading>
<Text preset="body">Body content</Text>

// ❌ Avoid - Inconsistent sizing
<h1 className="text-2xl">Main Title</h1>
<h2 className="text-4xl">Section Title</h2>
<h3 className="text-lg">Card Title</h3>
```

### 4. Responsive Typography

```tsx
// ✅ Good - Responsive classes
<h1 className="text-54 md:text-70 lg:text-86">Hero Title</h1>

// ✅ Good - Typography component with responsive preset
<Heading level={1} preset="hero" className="text-54 md:text-70 lg:text-86">
  Hero Title
</Heading>
```

## Migration Guide

### From Hardcoded Styles

```tsx
// Before
<h1 style={{ 
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '3rem',
  fontWeight: 'bold'
}}>
  Title
</h1>

// After
<Heading level={1} preset="section-title">
  Title
</Heading>
```

### From Generic Classes

```tsx
// Before
<h1 className="text-4xl font-bold">Title</h1>

// After
<Heading level={1} preset="section-title">Title</Heading>
```

## Troubleshooting

### Common Issues

1. **Font not loading**: Ensure fonts are properly imported in `layout.tsx`
2. **Classes not working**: Check Tailwind configuration includes font classes
3. **ESLint errors**: Use the font linting script to identify issues
4. **Inconsistent styling**: Use Typography components instead of manual styling

### Getting Help

- Run `npm run lint:fonts` to check for font issues
- Check the font utility functions in `src/lib/fonts.ts`
- Use the Typography component for consistent styling
- Refer to this documentation for best practices

## File Structure

```
src/
├── lib/
│   └── fonts.ts                 # Font configuration and utilities
├── components/
│   └── ui/
│       └── Typography.tsx       # Typography components
├── app/
│   ├── layout.tsx               # Font imports and setup
│   └── globals.css              # Font CSS variables
eslint-rules/
└── font-consistency.js          # Custom ESLint rules
scripts/
└── font-lint.js                 # Font linting script
tailwind.config.js               # Tailwind font configuration
FONT_SYSTEM.md                   # This documentation
```
