/**
 * @file A default eslint configuration.
 */

/**
 * A default eslint configuration.
 */
export = {
  extends: ["eslint:recommended"],
  rules: {
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration", {allowArrowFunctions: true}],
    "id-length": ["error", {exceptions: ["i", "j"]}],
    "no-else-return": "error",
    "no-param-reassign": "error",
    "no-return-await": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "operator-assignment": "error",
    "prefer-named-capture-group": "error",
    "require-unicode-regexp": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: true
      }
    ],
    "sort-keys": "error",

    // Disable undesirable rules
    // eslint-disable-next-line sort-keys
    "consistent-return": "off",
    "init-declarations": "off",
    "lines-between-class-members": "off",
    "max-lines-per-function": "off",
    "max-statements": "off",
    "multiline-comment-style": "off",
    "no-bitwise": "off",
    "no-console": "off",
    "no-magic-numbers": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-undefined": "off",
    "one-var": "off",
    "prefer-destructuring": "off",
    "prefer-template": "off"
  }
};
