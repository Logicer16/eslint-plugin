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
    "plugin:regexp/recommended",
    "plugin:import/recommended"
  ],
  rules: {
    "accessor-pairs": "error",
    "array-callback-return": ["error", {allowImplicit: true}],
    "block-scoped-var": "error",
    "camelcase": "error",
    "class-methods-use-this": "error",
    "curly": ["error", "multi-line"],
    "default-case-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration", {allowArrowFunctions: true}],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "id-length": ["error", {exceptions: ["i", "j"]}],
    "logical-assignment-operators": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": ["error", {enforceForLogicalOperands: true}],
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": ["error", {allowLoop: true, allowSwitch: true}],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-native-nonconstructor": "error",
    "no-new-wrappers": "error",
    "no-object-constructor": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-redeclare": ["error", {builtinGlobals: true}],
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", {defaultAssignment: false}],
    "no-unreachable-loop": "error",
    "no-unsafe-negation": ["error", {enforceForOrderingRelations: true}],
    "no-unsafe-optional-chaining": [
      "error",
      {disallowArithmeticOperators: true}
    ],
    "no-unused-expressions": [
      "error",
      {allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true}
    ],
    "no-unused-private-class-members": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": ["error", {enforceForClassMembers: true}],
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "object-shorthand": ["error", "consistent-as-needed"],
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": ["error", {disallowRedundantWrapping: true}],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": ["error", "as-needed"],
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: true
      }
    ],
    "sort-keys": ["error", "asc", {natural: true}],
    "symbol-description": "error",
    "unicode-bom": "error",
    "valid-typeof": ["error", {requireStringLiterals: true}],
    "yoda": "error",

    // Disable undesirable rules
    // Doesn't work.
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
    "prefer-destructuring": "off",

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
    "regexp/use-ignore-case": "error",

    // eslint-plugin-i / eslint-plugin-import
    // eslint-disable-next-line sort-keys
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-cycle": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": [
      "error",
      {"considerQueryString": true, "prefer-inline": true}
    ],
    "import/no-empty-named-blocks": "error",
    "import/no-extraneous-dependencies": ["error", {includeTypes: true}],
    "import/no-import-module-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "off",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": [
      "error",
      {caseSensitiveStrict: true, commonjs: true}
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true
      }
    ],
    "import/no-webpack-loader-syntax": "error",
    "import/unambiguous": "error"
  },
  // eslint-plugin-i / eslint-plugin-import
  settings: {
    "import/resolver": {
      node: true,
      typescript: true
    }
  }
};
