/**
 * @file The configuration for `typescript-eslint`.
 */
import tsPlugin from "typescript-eslint";
import {FlatConfig} from "../types.js";

export const tsConfigs: FlatConfig[] = [
  ...tsPlugin.configs.strictTypeChecked,
  ...tsPlugin.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      // Modify existing eslint rules
      "@typescript-eslint/class-methods-use-this": "error",
      "class-methods-use-this": "off",

      "@typescript-eslint/no-empty-function": [
        "error",
        {allow: ["decoratedFunctions", "overrideMethods"]}
      ],
      "no-empty-function": "off",

      "@typescript-eslint/no-loop-func": "error",
      "no-loop-func": "off",

      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTaggedTemplates: true,
          allowTernary: true
        }
      ],
      "no-unused-expressions": "off",

      "@typescript-eslint/return-await": "error",
      "no-return-await": "off",

      // Add new rules
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "minimumDescriptionLength": 3,
          "ts-check": false,
          "ts-expect-error": {descriptionFormat: String.raw`^: TS\d+ .+\.$`},
          "ts-ignore": true,
          "ts-nocheck": true
        }
      ],
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-type-exports": [
        "error",
        {fixMixedExportsWithInlineTypeSpecifier: true}
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {overrides: {constructors: "no-public"}}
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/method-signature-style": ["error"],
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-explicit-any": ["error", {fixToUnknown: true}],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-meaningless-void-operator": [
        "error",
        {checkNever: true}
      ],
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-literal-enum-member": [
        "error",
        {allowBitwiseExpressions: true}
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {ignoreConditionalTests: false}
      ],
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-regexp-exec": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": [
        "error",
        {ignoreStringArrays: false}
      ],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false
        }
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowArray: false
        }
      ],
      "@typescript-eslint/sort-type-constituents": "off",
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false
        }
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/unbound-method": ["error", {ignoreStatic: true}],

      // Disable undesirable rules
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off"
    }
  }
];
