/**
 * @file The configuration for `eslint-plugin-perfectionist`.
 */
import perfectionist from "eslint-plugin-perfectionist";
import type {FlatConfig} from "../types.js";

export const perfectionistConfigs: FlatConfig[] = [
  perfectionist.configs["recommended-natural"],
  {
    rules: {
      "perfectionist/sort-array-includes": [
        "error",
        {
          groupKind: "literals-first"
        }
      ],
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": [
        "error",
        {
          groupKind: "required-first",
          partitionByNewLine: true
        }
      ],
      "perfectionist/sort-intersection-types": "error",
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": [
        "error",
        {
          groupKind: "required-first",
          partitionByNewLine: true
        }
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          partitionByNewLine: true
        }
      ],
      "perfectionist/sort-svelte-attributes": "off",
      "perfectionist/sort-switch-case": "error",
      "perfectionist/sort-union-types": "error",
      "perfectionist/sort-variable-declarations": "error"
    }
  }
];
