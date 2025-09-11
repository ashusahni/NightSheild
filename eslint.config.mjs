import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "font-consistency": require("./eslint-rules/font-consistency.js"),
    },
    rules: {
      // Font consistency rules
      "font-consistency/font-family": "warn",
      "font-consistency/font-weight": "warn", 
      "font-consistency/typography-presets": "warn",
      "font-consistency/font-size": "warn",
      
      // Additional font-related rules
      "no-restricted-syntax": [
        "error",
        {
          "selector": "JSXAttribute[name.name='style'] > JSXExpressionContainer > ObjectExpression > Property[key.name='fontFamily']",
          "message": "Avoid inline fontFamily styles. Use CSS classes or the font utility system instead."
        },
        {
          "selector": "JSXAttribute[name.name='style'] > JSXExpressionContainer > ObjectExpression > Property[key.name='fontSize']", 
          "message": "Avoid inline fontSize styles. Use Tailwind text classes or typography presets instead."
        },
        {
          "selector": "JSXAttribute[name.name='style'] > JSXExpressionContainer > ObjectExpression > Property[key.name='fontWeight']",
          "message": "Avoid inline fontWeight styles. Use Tailwind font weight classes instead."
        }
      ],
      
      // Enforce consistent font usage patterns
      "prefer-const": "error",
      "no-var": "error",
      
      // Prevent common font mistakes
      "no-duplicate-imports": "error",
    },
  },
];

export default eslintConfig;
