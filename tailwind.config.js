/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Font families matching the CSS variables from layout.tsx
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        
        // Default fonts for body and headings
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
        ui: ['var(--font-dm-sans)', 'sans-serif'],
      },
      
      fontSize: {
        // Typography scale matching the CSS custom properties
        '14': ['0.875rem', '1.225rem'],     // text-14
        '16': ['1rem', '1.6875rem'],        // text-16
        '17': ['1.0625rem', '1.4875rem'],   // text-17
        '18': ['1.125rem', '1.5rem'],       // text-18
        '21': ['1.3125rem', '1.875rem'],    // text-21
        '22': ['1.375rem', '2rem'],         // text-22
        '24': ['1.5rem', '2rem'],           // text-24
        '28': ['1.75rem', '2.25rem'],       // text-28
        '30': ['1.875rem', '2.25rem'],      // text-30
        '36': ['2.25rem', '2.625rem'],      // text-36
        '40': ['2.5rem', '3rem'],           // text-40
        '44': ['2.75rem', '1.3'],           // text-44
        '54': ['3.375rem', '1.2'],          // text-54
        '70': ['4.375rem', '1.2'],          // text-70
        '76': ['4.75rem', '1.2'],           // text-76
        '86': ['5.375rem', '1.2'],          // text-86
        
        // Additional responsive sizes
        'hero-mobile': ['2.5rem', '1.2'],
        'hero-tablet': ['3.5rem', '1.2'],
        'hero-desktop': ['5.375rem', '1.2'],
        
        'section-mobile': ['1.875rem', '1.2'],
        'section-tablet': ['2.5rem', '1.2'],
        'section-desktop': ['3.375rem', '1.2'],
      },
      
      fontWeight: {
        // Font weights matching the imported Google Fonts
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      lineHeight: {
        // Line heights for optimal readability
        'relaxed': '1.625',
        'loose': '2',
      },
      
      letterSpacing: {
        // Letter spacing for better typography
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      // Typography utilities for common patterns
      typography: {
        // Hero text styles
        'hero': {
          css: {
            fontFamily: 'var(--font-oswald)',
            fontWeight: '700',
            lineHeight: '1.2',
          },
        },
        
        // Section heading styles
        'section': {
          css: {
            fontFamily: 'var(--font-montserrat)',
            fontWeight: '700',
            lineHeight: '1.2',
          },
        },
        
        // Card title styles
        'card-title': {
          css: {
            fontFamily: 'var(--font-montserrat)',
            fontWeight: '600',
            lineHeight: '1.3',
          },
        },
        
        // Body text styles
        'body': {
          css: {
            fontFamily: 'var(--font-inter)',
            fontWeight: '400',
            lineHeight: '1.6',
          },
        },
        
        // UI element styles
        'ui': {
          css: {
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: '500',
            lineHeight: '1.4',
          },
        },
      },
    },
  },
  plugins: [
    // Plugin for typography utilities
    function({ addUtilities, theme }) {
      const typographyUtilities = {
        '.text-hero': {
          fontFamily: theme('fontFamily.display'),
          fontSize: theme('fontSize.86'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.86'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        
        '.text-section-title': {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.54'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.54'),
        },
        
        '.text-card-title': {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.24'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.24'),
        },
        
        '.text-body-large': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.18'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.18'),
        },
        
        '.text-body': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.16'),
        },
        
        '.text-body-small': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.14'),
        },
        
        '.text-button': {
          fontFamily: theme('fontFamily.ui'),
          fontSize: theme('fontSize.16'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.16'),
          letterSpacing: theme('letterSpacing.wide'),
        },
        
        '.text-label': {
          fontFamily: theme('fontFamily.ui'),
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.medium'),
          lineHeight: theme('lineHeight.14'),
        },
        
        '.text-caption': {
          fontFamily: theme('fontFamily.ui'),
          fontSize: theme('fontSize.14'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.14'),
        },
      }
      
      addUtilities(typographyUtilities)
    },
  ],
}
