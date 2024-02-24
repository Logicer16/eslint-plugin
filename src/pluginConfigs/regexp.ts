/**
 * @file The configuration for `eslint-plugin-regexp`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const regexpConfigs: FlatConfig[] = [
  ...compat.extends("plugin:regexp/recommended"),
  {
    rules: {
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
  }
];
