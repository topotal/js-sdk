module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2, {"SwitchCase": 1}],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Disallow unused variables
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
  }
}
