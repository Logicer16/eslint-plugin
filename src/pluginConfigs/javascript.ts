/**
 * @file The configuration for `@eslint/js`.
 */
import jsPlugin from "@eslint/js";
import {FlatConfig} from "../types.js";

export const jsPrettierOverrides: FlatConfig = {
  rules: {
    curly: ["error", "multi-line"]
  }
};

export const jsConfigs: FlatConfig[] = [
  jsPlugin.configs.recommended,
  jsPrettierOverrides,
  {
    rules: {
      "accessor-pairs": "error",
      "array-callback-return": ["error", {allowImplicit: true}],
      "block-scoped-var": "error",
      "camelcase": "error",
      "class-methods-use-this": "error",
      "default-case-last": "error",
      "dot-notation": "error",
      "eqeqeq": "error",
      "func-names": ["error", "as-needed"],
      "func-style": ["error", "declaration", {allowArrowFunctions: true}],
      "grouped-accessor-pairs": ["error", "getBeforeSet"],
      "id-length": ["error", {exceptions: ["i", "j", "_"]}],
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
      "no-extra-boolean-cast": ["error", {enforceForInnerExpressions: true}],
      "no-extra-label": "error",
      "no-fallthrough": ["error", {reportUnusedFallthroughComment: true}],
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
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }
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
      "radix": ["error", "always"],
      "require-atomic-updates": "error",
      "require-await": "error",
      "require-unicode-regexp": "error",
      "symbol-description": "error",
      "unicode-bom": "error",
      "valid-typeof": ["error", {requireStringLiterals: true}],
      "yoda": "error",

      // Disable undesirable rules
      // Doesn't work.
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
      "prefer-destructuring": "off"
    }
  }
];
