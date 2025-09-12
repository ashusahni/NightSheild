/**
 * Font Configuration and Utilities
 * 
 * This file defines the font system for NightShield, ensuring consistency
 * across the application and providing utilities for font management.
 */

// Font variable names - these should match the CSS variables defined in layout.tsx
export const FONT_VARIABLES = {
  INTER: '--font-inter',
  MONTSERRAT: '--font-montserrat', 
  OSWALD: '--font-oswald',
  DM_SANS: '--font-dm-sans',
} as const

// Font family mappings
export const FONT_FAMILIES = {
  BODY: `var(${FONT_VARIABLES.INTER}), sans-serif`,
  HEADING: `var(${FONT_VARIABLES.MONTSERRAT}), sans-serif`,
  DISPLAY: `var(${FONT_VARIABLES.OSWALD}), sans-serif`,
  UI: `var(${FONT_VARIABLES.DM_SANS}), sans-serif`,
} as const

// Font weight constants
export const FONT_WEIGHTS = {
  LIGHT: '300',
  NORMAL: '400', 
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: '700',
  EXTRABOLD: '800',
  BLACK: '900',
} as const

// Typography scale based on the CSS custom properties
export const TYPOGRAPHY_SCALE = {
  // Text sizes (from CSS custom properties)
  TEXT_14: '0.875rem',     // 14px
  TEXT_16: '1rem',         // 16px  
  TEXT_17: '1.0625rem',    // 17px
  TEXT_18: '1.125rem',     // 18px
  TEXT_21: '1.3125rem',    // 21px
  TEXT_22: '1.375rem',     // 22px
  TEXT_24: '1.5rem',       // 24px
  TEXT_28: '1.75rem',      // 28px
  TEXT_30: '1.875rem',     // 30px
  TEXT_36: '2.25rem',      // 36px
  TEXT_40: '2.5rem',       // 40px
  TEXT_44: '2.75rem',      // 44px
  TEXT_54: '3.375rem',     // 54px
  TEXT_70: '4.375rem',     // 70px
  TEXT_76: '4.75rem',      // 76px
  TEXT_86: '5.375rem',     // 86px
} as const

// Line heights corresponding to text sizes
export const LINE_HEIGHTS = {
  TEXT_14: '1.225rem',
  TEXT_16: '1.6875rem', 
  TEXT_17: '1.4875rem',
  TEXT_18: '1.5rem',
  TEXT_21: '1.875rem',
  TEXT_22: '2rem',
  TEXT_24: '2rem',
  TEXT_28: '2.25rem',
  TEXT_30: '2.25rem',
  TEXT_36: '2.625rem',
  TEXT_40: '3rem',
  TEXT_44: '1.3',
  TEXT_54: '1.2',
  TEXT_70: '1.2',
  TEXT_76: '1.2',
  TEXT_86: '1.2',
} as const

// Typography presets for common use cases
export const TYPOGRAPHY_PRESETS = {
  // Headings
  HERO_TITLE: {
    fontFamily: FONT_FAMILIES.DISPLAY,
    fontSize: TYPOGRAPHY_SCALE.TEXT_86,
    fontWeight: FONT_WEIGHTS.BOLD,
    lineHeight: LINE_HEIGHTS.TEXT_86,
  },
  SECTION_TITLE: {
    fontFamily: FONT_FAMILIES.HEADING,
    fontSize: TYPOGRAPHY_SCALE.TEXT_54,
    fontWeight: FONT_WEIGHTS.BOLD,
    lineHeight: LINE_HEIGHTS.TEXT_54,
  },
  CARD_TITLE: {
    fontFamily: FONT_FAMILIES.HEADING,
    fontSize: TYPOGRAPHY_SCALE.TEXT_24,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
    lineHeight: LINE_HEIGHTS.TEXT_24,
  },
  SUBTITLE: {
    fontFamily: FONT_FAMILIES.HEADING,
    fontSize: TYPOGRAPHY_SCALE.TEXT_18,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    lineHeight: LINE_HEIGHTS.TEXT_18,
  },

  // Body text
  BODY_LARGE: {
    fontFamily: FONT_FAMILIES.BODY,
    fontSize: TYPOGRAPHY_SCALE.TEXT_18,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: LINE_HEIGHTS.TEXT_18,
  },
  BODY: {
    fontFamily: FONT_FAMILIES.BODY,
    fontSize: TYPOGRAPHY_SCALE.TEXT_16,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: LINE_HEIGHTS.TEXT_16,
  },
  BODY_SMALL: {
    fontFamily: FONT_FAMILIES.BODY,
    fontSize: TYPOGRAPHY_SCALE.TEXT_14,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: LINE_HEIGHTS.TEXT_14,
  },

  // UI elements
  BUTTON: {
    fontFamily: FONT_FAMILIES.UI,
    fontSize: TYPOGRAPHY_SCALE.TEXT_16,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
    lineHeight: LINE_HEIGHTS.TEXT_16,
  },
  LABEL: {
    fontFamily: FONT_FAMILIES.UI,
    fontSize: TYPOGRAPHY_SCALE.TEXT_14,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    lineHeight: LINE_HEIGHTS.TEXT_14,
  },
  CAPTION: {
    fontFamily: FONT_FAMILIES.UI,
    fontSize: TYPOGRAPHY_SCALE.TEXT_14,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: LINE_HEIGHTS.TEXT_14,
  },
} as const

// Utility functions for font management
export const fontUtils = {
  /**
   * Get font family by type
   */
  getFontFamily: (type: keyof typeof FONT_FAMILIES) => FONT_FAMILIES[type],

  /**
   * Get typography preset
   */
  getTypographyPreset: (preset: keyof typeof TYPOGRAPHY_PRESETS) => TYPOGRAPHY_PRESETS[preset],

  /**
   * Generate CSS font style object
   */
  generateFontStyle: (preset: keyof typeof TYPOGRAPHY_PRESETS) => {
    const typography = TYPOGRAPHY_PRESETS[preset]
    return {
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
    }
  },

  /**
   * Generate Tailwind classes for typography preset
   */
  getTailwindClasses: (preset: keyof typeof TYPOGRAPHY_PRESETS) => {
    const typography = TYPOGRAPHY_PRESETS[preset]
    const classes = []
    
    // Map font families to Tailwind classes
    if (typography.fontFamily === FONT_FAMILIES.HEADING) classes.push('font-montserrat')
    else if (typography.fontFamily === FONT_FAMILIES.DISPLAY) classes.push('font-oswald')
    else if (typography.fontFamily === FONT_FAMILIES.UI) classes.push('font-dm-sans')
    else classes.push('font-inter')

    // Map font weights to Tailwind classes
    if (typography.fontWeight === FONT_WEIGHTS.NORMAL) classes.push('font-normal')
    else if (typography.fontWeight === FONT_WEIGHTS.MEDIUM) classes.push('font-medium')
    else if (typography.fontWeight === FONT_WEIGHTS.SEMIBOLD) classes.push('font-semibold')
    else if (typography.fontWeight === FONT_WEIGHTS.BOLD) classes.push('font-bold')

    return classes.join(' ')
  },
}

// Font validation utilities
export const fontValidation = {
  /**
   * Validate if a font family is part of our design system
   */
  isValidFontFamily: (fontFamily: string): boolean => {
    return Object.values(FONT_FAMILIES).includes(fontFamily as any)
  },

  /**
   * Validate if a font weight is part of our design system
   */
  isValidFontWeight: (fontWeight: string): boolean => {
    return Object.values(FONT_WEIGHTS).includes(fontWeight as FontWeight)
  },

  /**
   * Validate if a font size is part of our typography scale
   */
  isValidFontSize: (fontSize: string): boolean => {
    return Object.values(TYPOGRAPHY_SCALE).includes(fontSize)
  },

  /**
   * Get suggested font family for a given element type
   */
  getSuggestedFontFamily: (elementType: 'heading' | 'body' | 'ui' | 'display') => {
    switch (elementType) {
      case 'heading':
        return FONT_FAMILIES.HEADING
      case 'body':
        return FONT_FAMILIES.BODY
      case 'ui':
        return FONT_FAMILIES.UI
      case 'display':
        return FONT_FAMILIES.DISPLAY
      default:
        return FONT_FAMILIES.BODY
    }
  },
}

// Export types for TypeScript support
export type FontFamily = typeof FONT_FAMILIES[keyof typeof FONT_FAMILIES]
export type FontWeight = typeof FONT_WEIGHTS[keyof typeof FONT_WEIGHTS]
export type FontSize = typeof TYPOGRAPHY_SCALE[keyof typeof TYPOGRAPHY_SCALE]
export type TypographyPreset = keyof typeof TYPOGRAPHY_PRESETS
