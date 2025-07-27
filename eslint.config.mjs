import globals from "globals"
import js from "@eslint/js"

export default [
js.configs.recommended,
{
  ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**", "docs/**"]
},
{
  files: ["**/*.{js,mjs,cjs}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.node,
      ...globals.es2023,
      ...globals.jest
    }
  },
  rules: {
    "strict": ["error", "global"],
    "no-unused-vars": "off",
    "no-console": "warn",
    "curly": "error",
    "no-var": "error",
    "eol-last": ["error", "always"],
    "no-trailing-spaces": "error",
  }
}
]
