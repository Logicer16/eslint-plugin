/**
 * @file The configuration for `eslint-plugin-tailwindcss`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const tailwindcssConfigs: FlatConfig[] = [
  ...compat.extends("plugin:tailwindcss/recommended"),
  {
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/migration-from-tailwind-2": "error",
      "tailwindcss/no-custom-classname": "error"
    }
  }
];
