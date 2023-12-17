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
    "plugin:unicorn/recommended",
    "plugin:regexp/recommended"
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
    ],

    // eslint-plugin-regex
    // eslint-disable-next-line sort-keys
    "regexp/grapheme-string-literal": "error",
    "regexp/hexadecimal-escape": ["error", "never"],
    "regexp/letter-case": [
      "error",
      {
        caseInsensitive: "lowercase",
        controlEscape: "uppercase",
        hexadecimalEscape: "uppercase",
        unicodeEscape: "uppercase"
      }
    ],
    "regexp/no-empty-alternative": "error",
    "regexp/no-octal": "error",
    "regexp/no-potentially-useless-backreference": "off",
    "regexp/no-standalone-backslash": "error",
    "regexp/no-super-linear-backtracking": [
      "error",
      {
        report: "potential"
      }
    ],
    "regexp/no-unused-capturing-group": [
      "error",
      {
        fixable: true
      }
    ],
    "regexp/no-useless-flag": "error",
    "regexp/optimal-lookaround-quantifier": "error",
    "regexp/prefer-character-class": [
      "error",
      {
        minAlternatives: 2
      }
    ],
    "regexp/prefer-escape-replacement-dollar-char": "error",
    "regexp/prefer-lookaround": "error",
    "regexp/prefer-named-backreference": "error",
    "regexp/prefer-named-capture-group": "error",
    "regexp/prefer-named-replacement": "error",
    "regexp/prefer-quantifier": "error",
    "regexp/prefer-regexp-exec": "error",
    "regexp/prefer-regexp-test": "error",
    "regexp/prefer-result-array-groups": "error",
    "regexp/prefer-set-operation": "error",
    "regexp/require-unicode-regexp": "error",
    "regexp/require-unicode-sets-regexp": "error",
    "regexp/simplify-set-operations": "error",
    "regexp/sort-character-class-elements": "error",
    "regexp/unicode-escape": "error",
    "regexp/use-ignore-case": "error"
  }
};
