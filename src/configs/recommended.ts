/**
 * @file A default eslint configuration.
 */

/**
 * A default eslint configuration.
 */
export = {
  extends: [
    "eslint:recommended",
    "plugin:n/recommended",
    "plugin:unicorn/recommended"
  ],
  rules: {
    "array-callback-return": ["error", {allowImplicit: true}],
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
    "prefer-template": "off",

    // eslint-plugin-n
    // eslint-disable-next-line sort-keys
    "n/exports-style": ["error", "exports"],
    "n/file-extension-in-import": ["error", "always"],
    "n/no-mixed-requires": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/no-sync": "error",
    "n/prefer-global/buffer": ["error", "never"],
    "n/prefer-global/console": "error",
    "n/prefer-global/process": ["error", "never"],
    "n/prefer-global/text-decoder": "error",
    "n/prefer-global/text-encoder": "error",
    "n/prefer-global/url": "error",
    "n/prefer-global/url-search-params": "error",
    "n/prefer-promises/dns": "error",
    "n/prefer-promises/fs": "error",

    // eslint-plugin-n
    // eslint-disable-next-line sort-keys
    "unicorn/custom-error-definition": "error",
    "unicorn/expiring-todo-comments": "off",
    "unicorn/filename-case": [
      // Incorrectly handles acronyms
      "off"
      // "error",
      // {
      //   cases: {
      //     camelCase: true,
      //     pascalCase: true,
      //     kebabCase: true
      //   }
      // }
    ],
    "unicorn/import-style": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-unused-properties": "error",
    "unicorn/numeric-separators-style": [
      "error",
      {
        binary: {
          groupLength: 8,
          minimumDigits: 0
        },
        hexadecimal: {
          groupLength: 4,
          minimumDigits: 0
        },
        number: {
          groupLength: 3,
          minimumDigits: 5
        },
        octal: {
          groupLength: 4,
          minimumDigits: 0
        },
        onlyIfContainsSeparator: false
      }
    ],
    "unicorn/prefer-at": [
      "error",
      {
        checkAllIndexAccess: true
      }
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: {
            arguments: false
          }
        }
      }
    ]
  }
};
