/**
 * @file The configuration for `eslint-plugin-unicorn`.
 */
import unicornPlugin from "eslint-plugin-unicorn";
import {FlatConfig} from "../types.js";

export const unicornConfigs: FlatConfig[] = [
  unicornPlugin.configs["flat/recommended"],
  {
    rules: {
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
          ignore: [/.*jsdoc.*/iv],
          replacements: {
            args: {
              arguments: false
            },
            num: {
              number: false
            },
            obj: {
              object: false
            }
          }
        }
      ]
    }
  }
];
