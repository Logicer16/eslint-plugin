/**
 * @file A default typescript-eslint configuration.
 */

/**
 * A default typescript-eslint configuration.
 */
export = {
  extends: [
    "./configs/recommended.js",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "./configs/private/typescriptParser.js"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // Modify existing rules
    "@typescript-eslint/return-await": "error",
    "no-return-await": "off",

    // Add new rules
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {overrides: {constructors: "no-public"}}
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/prefer-literal-enum-member": [
      "error",
      {allowBitwiseExpressions: true}
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {ignoreStringArrays: true}
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowNullableBoolean: true,
        allowString: false
      }
    ],

    // Disable undesirable rules
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off"
  }
};
