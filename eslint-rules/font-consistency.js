/**
 * ESLint Custom Rules for Font Consistency
 * 
 * This file contains custom ESLint rules to enforce font consistency
 * across the NightShield codebase.
 */

export default {
  rules: {
    // Rule to enforce consistent font family usage
    'font-consistency/font-family': {
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className') {
              const classNameValue = node.value
              if (classNameValue && classNameValue.type === 'Literal') {
                const className = classNameValue.value
                
                // Check for hardcoded font families in className
                if (className.includes('font-') && !isValidFontClass(className)) {
                  context.report({
                    node,
                    message: 'Use predefined font classes from the font system. Valid classes: font-inter, font-montserrat, font-oswald, font-dm-sans',
                  })
                }
              }
            }
          },
          
          // Check for inline styles with font-family
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value.type === 'JSXExpressionContainer') {
              const styleExpression = node.value.expression
              if (styleExpression.type === 'ObjectExpression') {
                styleExpression.properties.forEach(prop => {
                  if (prop.key.name === 'fontFamily') {
                    context.report({
                      node: prop,
                      message: 'Avoid inline fontFamily styles. Use CSS classes or the font utility system instead.',
                    })
                  }
                })
              }
            }
          },
        }
      },
    },

    // Rule to enforce consistent font weight usage
    'font-consistency/font-weight': {
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'className') {
              const classNameValue = node.value
              if (classNameValue && classNameValue.type === 'Literal') {
                const className = classNameValue.value
                
                // Check for hardcoded font weights
                if (className.includes('font-') && !isValidFontWeightClass(className)) {
                  context.report({
                    node,
                    message: 'Use predefined font weight classes: font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black',
                  })
                }
              }
            }
          },
        }
      },
    },

    // Rule to enforce typography preset usage
    'font-consistency/typography-presets': {
      create(context) {
        return {
          JSXElement(node) {
            // Check for heading elements without proper typography classes
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.openingElement.name.name)) {
              const hasTypographyClass = node.openingElement.attributes.some(attr => 
                attr.type === 'JSXAttribute' && 
                attr.name.name === 'className' &&
                attr.value &&
                attr.value.type === 'Literal' &&
                (attr.value.value.includes('text-') || attr.value.value.includes('font-'))
              )
              
              if (!hasTypographyClass) {
                context.report({
                  node,
                  message: 'Heading elements should use typography classes for consistency. Consider using predefined typography presets.',
                })
              }
            }
          },
        }
      },
    },

    // Rule to prevent hardcoded font sizes
    'font-consistency/font-size': {
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'style' && node.value.type === 'JSXExpressionContainer') {
              const styleExpression = node.value.expression
              if (styleExpression.type === 'ObjectExpression') {
                styleExpression.properties.forEach(prop => {
                  if (prop.key.name === 'fontSize') {
                    context.report({
                      node: prop,
                      message: 'Avoid inline fontSize styles. Use Tailwind text classes (text-sm, text-base, text-lg, etc.) or typography presets.',
                    })
                  }
                })
              }
            }
          },
        }
      },
    },
  },
}

// Helper functions
function isValidFontClass(className) {
  const validFontClasses = [
    'font-inter',
    'font-montserrat', 
    'font-oswald',
    'font-dm-sans'
  ]
  
  const fontClasses = className.split(' ').filter(cls => cls.startsWith('font-'))
  return fontClasses.every(cls => validFontClasses.includes(cls))
}

function isValidFontWeightClass(className) {
  const validWeightClasses = [
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'font-black'
  ]
  
  const weightClasses = className.split(' ').filter(cls => cls.startsWith('font-') && validWeightClasses.includes(cls))
  return weightClasses.length > 0
}
