/**
 * Typography Component
 * 
 * A comprehensive typography component system for NightShield that ensures
 * consistent font usage across the application.
 */

import React from 'react'
import { cn } from '@/lib/utils'
import { fontUtils, TypographyPreset } from '@/lib/fonts'

// Base Typography component props
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  preset?: TypographyPreset
  as?: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
}

// Specific typography component props
interface HeadingProps extends Omit<TypographyProps, 'preset'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  preset?: 'HERO_TITLE' | 'SECTION_TITLE' | 'CARD_TITLE' | 'SUBTITLE'
}

interface TextProps extends Omit<TypographyProps, 'preset'> {
  preset?: 'BODY_LARGE' | 'BODY' | 'BODY_SMALL' | 'CAPTION'
}

interface ButtonTextProps extends Omit<TypographyProps, 'preset'> {
  preset?: 'BUTTON' | 'LABEL'
}

/**
 * Base Typography component
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ preset = 'BODY', as: Component = 'p', className, children, ...props }, ref) => {
    const typography = fontUtils.getTypographyPreset(preset)
    const tailwindClasses = fontUtils.getTailwindClasses(preset)
    
    return React.createElement(
      Component,
      {
        ...props,
        ref,
        className: cn(tailwindClasses, className),
        style: {
          ...typography,
          ...props.style,
        },
      },
      children
    )
  }
)
Typography.displayName = 'Typography'

/**
 * Heading component with semantic levels
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, preset, className, children, ...props }, ref) => {
    // Determine preset based on level if not provided
    const headingPreset = preset || getDefaultHeadingPreset(level)
    const Component = `h${level}` as keyof React.JSX.IntrinsicElements
    
    return (
      <Typography
        ref={ref}
        as={Component}
        preset={headingPreset}
        className={cn(
          // Additional heading-specific classes
          'text-white', // Default text color for NightShield theme
          className
        )}
        {...props}
      >
        {children}
      </Typography>
    )
  }
)
Heading.displayName = 'Heading'

/**
 * Text component for body content
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ preset = 'BODY', className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        preset={preset}
        className={cn(
          'text-white', // Default text color for NightShield theme
          className
        )}
        {...props}
      >
        {children}
      </Typography>
    )
  }
)
Text.displayName = 'Text'

/**
 * Button text component for UI elements
 */
export const ButtonText = React.forwardRef<HTMLSpanElement, ButtonTextProps>(
  ({ preset = 'BUTTON', className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        as="span"
        preset={preset}
        className={cn(
          'inline-block',
          className
        )}
        {...props}
      >
        {children}
      </Typography>
    )
  }
)
ButtonText.displayName = 'ButtonText'

/**
 * Label component for form labels and small UI text
 */
export const Label = React.forwardRef<HTMLLabelElement, ButtonTextProps>(
  ({ preset = 'LABEL', className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        as="label"
        preset={preset}
        className={cn(
          'text-gray-300', // Label color for NightShield theme
          className
        )}
        {...props}
      >
        {children}
      </Typography>
    )
  }
)
Label.displayName = 'Label'

/**
 * Caption component for small descriptive text
 */
export const Caption = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ preset = 'CAPTION', className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        preset={preset}
        className={cn(
          'text-gray-400', // Caption color for NightShield theme
          className
        )}
        {...props}
      >
        {children}
      </Typography>
    )
  }
)
Caption.displayName = 'Caption'

// Helper function to get default heading preset based on level
function getDefaultHeadingPreset(level: number): TypographyPreset {
  switch (level) {
    case 1:
      return 'HERO_TITLE'
    case 2:
      return 'SECTION_TITLE'
    case 3:
    case 4:
      return 'CARD_TITLE'
    case 5:
    case 6:
      return 'SUBTITLE'
    default:
      return 'CARD_TITLE'
  }
}

// Export all components and types
export {
  type TypographyProps,
  type HeadingProps,
  type TextProps,
  type ButtonTextProps,
}

// Export preset types for external use
export type { TypographyPreset }
