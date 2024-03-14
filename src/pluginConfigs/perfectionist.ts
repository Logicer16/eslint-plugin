/**
 * @file The configuration for `eslint-plugin-perfectionist`.
 */
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import {FlatConfig, RuleEntry} from "../types.js";

const rawPerfectionistConfigs: FlatConfig[] = [
  perfectionistNatural,
  {
    rules: {
      "perfectionist/sort-array-includes": [
        "error",
        {
          "spread-last": true
        }
      ],
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": [
        "error",
        {
          "partition-by-new-line": true
        }
      ],
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": [
        "error",
        {
          "partition-by-new-line": true
        }
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          "partition-by-new-line": true
        }
      ],
      "perfectionist/sort-svelte-attributes": "off",
      "perfectionist/sort-union-types": "off"
    }
  }
];

export const perfectionistConfigs = rawPerfectionistConfigs.map(
  (config: FlatConfig) => {
    // Temporary until https://github.com/azat-io/eslint-plugin-perfectionist/issues/78.
    if (config.rules === undefined) return config;

    config.rules = Object.fromEntries(
      Object.entries(config.rules).map(([key, value]) => {
        if (value === undefined) return [key, value];

        let newValue: RuleEntry =
          typeof value === "string" || typeof value === "number"
            ? [value, {}]
            : value;

        newValue = [newValue.at(0), {...newValue.at(1), "ignore-case": true}];

        return [key, newValue];
      })
    );
    return config;
  }
);
