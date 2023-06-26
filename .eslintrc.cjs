module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "array-bracket-spacing": "off",
    "object-bracket-spacing": "off",
    "prettier/prettier": "warn"
  },
  root: true,

  overrides: [
    {
      files: ["src/**/*"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:eslint-plugin/recommended",
        "plugin:prettier/recommended"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json"
      },
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {overrides: {constructors: "no-public"}}
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/prefer-literal-enum-member": [
          "error",
          {allowBitwiseExpressions: true}
        ],
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": [
          "error",
          {ignoreStringArrays: true}
        ],
        // Replaces eslint/no-return-await
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "capitalized-comments": "error",
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "declaration", {allowArrowFunctions: true}],
        "id-length": ["error", {exceptions: ["i", "j"]}],
        "no-else-return": "error",
        "no-param-reassign": "error",
        "no-void": "error",
        "object-bracket-spacing": "off",
        // prettier recommends "one-var-declaration-per-line": "off", but this is seemingly not applicable to ts
        "one-var-declaration-per-line": ["error", "initializations"],
        "prefer-named-capture-group": "error",
        "prettier/prettier": "warn",
        "require-unicode-regexp": "error",
        "sort-imports": [
          "error",
          {
            ignoreCase: true
          }
        ],
        "sort-keys": "error",

        // rules that must be disabled
        // "lines-between-class-members": "off",
        // "no-shadow": "off",
        // "no-bitwise": "off",
        // "one-var": "off",
        // "no-undefined": "off",
        // "consistent-return": "off",
        // "multiline-comment-style": "off",
        // "prefer-template": "off",
        // "no-console": "off",
        // "max-lines-per-function": "off",
        // "init-declarations": "off",
        // "prefer-destructuring": "off",
        // "max-statements": "off",
        // "no-plusplus": "off",
        // "no-magic-numbers": "off",
        // "@typescript-eslint/no-magic-numbers": "off",
        // "@typescript-eslint/init-declarations": "off",
        // "@typescript-eslint/consistent-type-imports": "off",
        // "@typescript-eslint/lines-between-class-members": "off",
        // "@typescript-eslint/prefer-readonly-parameter-types": "off",
        // "@typescript-eslint/prefer-literal-enum-member": "off",

        "@typescript-eslint/no-unsafe-assignment": "off"
      }
    }
  ]
};
