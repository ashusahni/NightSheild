/**
 * Font utilities and typography presets for NightShield
 * 
 * This module provides a centralized system for managing typography
 * across the application, ensuring consistent font usage and styling.
 */

// Typography preset types
export type TypographyPreset = 
  | 'HERO_TITLE'
  | 'SECTION_TITLE' 
  | 'CARD_TITLE'
  | 'SUBTITLE'
  | 'BODY_LARGE'
  | 'BODY'
  | 'BODY_SMALL'
  | 'CAPTION'
  | 'BUTTON'
  | 'LABEL'

// Typography configuration interface
interface TypographyConfig {
  fontSize: string
  lineHeight: string
  fontWeight: string
  letterSpacing?: string
}

// Typography presets configuration
const TYPOGRAPHY_PRESETS: Record<TypographyPreset, TypographyConfig> = {
  HERO_TITLE: {
    fontSize: '4rem', // 64px
    lineHeight: '1.1',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  SECTION_TITLE: {
    fontSize: '2.5rem', // 40px
    lineHeight: '1.2',
    fontWeight: '700',
    letterSpacing: '-0.01em',
  },
  CARD_TITLE: {
    fontSize: '1.5rem', // 24px
    lineHeight: '1.3',
    fontWeight: '600',
  },
  SUBTITLE: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.4',
    fontWeight: '500',
  },
  BODY_LARGE: {
    fontSize: '1.125rem', // 18px
    lineHeight: '1.6',
    fontWeight: '400',
  },
  BODY: {
    fontSize: '1rem', // 16px
    lineHeight: '1.6',
    fontWeight: '400',
  },
  BODY_SMALL: {
    fontSize: '0.875rem', // 14px
    lineHeight: '1.5',
    fontWeight: '400',
  },
  CAPTION: {
    fontSize: '0.75rem', // 12px
    lineHeight: '1.4',
    fontWeight: '400',
  },
  BUTTON: {
    fontSize: '1rem', // 16px
    lineHeight: '1.2',
    fontWeight: '600',
  },
  LABEL: {
    fontSize: '0.875rem', // 14px
    lineHeight: '1.2',
    fontWeight: '500',
  },
}

// Tailwind class mappings for typography presets
const TAILWIND_CLASSES: Record<TypographyPreset, string> = {
  HERO_TITLE: 'text-6xl leading-tight font-extrabold tracking-tight',
  SECTION_TITLE: 'text-4xl leading-tight font-bold tracking-tight',
  CARD_TITLE: 'text-2xl leading-tight font-semibold',
  SUBTITLE: 'text-xl leading-relaxed font-medium',
  BODY_LARGE: 'text-lg leading-relaxed font-normal',
  BODY: 'text-base leading-relaxed font-normal',
  BODY_SMALL: 'text-sm leading-relaxed font-normal',
  CAPTION: 'text-xs leading-tight font-normal',
  BUTTON: 'text-base leading-tight font-semibold',
  LABEL: 'text-sm leading-tight font-medium',
}

/**
 * Font utilities class
 */
export class FontUtils {
  /**
   * Get typography preset configuration
   */
  getTypographyPreset(preset: TypographyPreset): TypographyConfig {
    return TYPOGRAPHY_PRESETS[preset]
  }

  /**
   * Get Tailwind CSS classes for a typography preset
   */
  getTailwindClasses(preset: TypographyPreset): string {
    return TAILWIND_CLASSES[preset]
  }

  /**
   * Get all available typography presets
   */
  getAllPresets(): TypographyPreset[] {
    return Object.keys(TYPOGRAPHY_PRESETS) as TypographyPreset[]
  }

  /**
   * Check if a preset exists
   */
  isValidPreset(preset: string): preset is TypographyPreset {
    return preset in TYPOGRAPHY_PRESETS
  }

  /**
   * Get CSS styles object for a preset (useful for inline styles)
   */
  getCSSStyles(preset: TypographyPreset): React.CSSProperties {
    const config = this.getTypographyPreset(preset)
    return {
      fontSize: config.fontSize,
      lineHeight: config.lineHeight,
      fontWeight: config.fontWeight,
      ...(config.letterSpacing && { letterSpacing: config.letterSpacing }),
    }
  }
}

// Export singleton instance
export const fontUtils = new FontUtils()

// Export types and constants
export type { TypographyConfig }
export { TYPOGRAPHY_PRESETS, TAILWIND_CLASSES }
