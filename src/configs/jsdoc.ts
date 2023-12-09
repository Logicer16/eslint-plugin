/**
 * @file A default JSDoc configuration.
 */

/**
 * A default JSDoc configuration.
 */
export = {
  extends: ["plugin:jsdoc/recommended-typescript-error"],
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/check-indentation": "error",
    "jsdoc/check-line-alignment": "error",
    "jsdoc/check-syntax": "error",
    "jsdoc/informative-docs": "error",
    "jsdoc/match-description": "error",
    "jsdoc/no-bad-blocks": "error",
    "jsdoc/no-blank-block-descriptions": "error",
    "jsdoc/no-defaults": "error",
    "jsdoc/no-undefined-types": "error",
    "jsdoc/require-asterisk-prefix": "error",
    "jsdoc/require-description": "error",
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-file-overview": "error",
    "jsdoc/require-hyphen-before-param-description": ["error", "never"],
    "jsdoc/require-returns": ["error", {enableFixer: true}],
    "jsdoc/require-throws": "error",
    "jsdoc/sort-tags": "error"
  }
};
