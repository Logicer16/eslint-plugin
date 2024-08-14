/**
 * @file The configuration for `eslint-plugin-etc`.
 */
import {legacyCompatibility} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = new legacyCompatibility(import.meta.url);

export const etcConfigs: FlatConfig[] = [
  ...compat.extends("plugin:etc/recommended"),
  {
    rules: {
      "etc/no-const-enum": "error",
      "etc/no-foreach": "error",
      "etc/no-internal": "off",
      "etc/no-t": "off",
      "etc/throw-error": "off"
    }
  }
];
