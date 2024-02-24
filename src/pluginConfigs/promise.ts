/**
 * @file The configuration for `eslint-plugin-promise`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const promiseConfigs: FlatConfig[] = [
  ...compat.extends("plugin:promise/recommended"),
  {
    rules: {
      "promise/always-return": "off",
      "promise/no-callback-in-promise": "off",
      "promise/no-multiple-resolved": "error",
      "promise/no-nesting": "error",
      "promise/no-promise-in-callback": "off",
      "promise/no-return-in-finally": "error",
      "promise/valid-params": "off"
    }
  }
];
