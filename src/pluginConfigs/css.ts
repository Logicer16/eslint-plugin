/**
 * @file The configuration for `eslint-plugin-css`.
 */
import {legacyCompatibility} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = new legacyCompatibility(import.meta.url);

export const cssConfigs: FlatConfig[] = [
  ...compat.extends("plugin:css/standard"),
  {
    rules: {
      "css/color-hex-style": ["error", "RRGGBB"],
      "css/named-color": ["error", "never"],
      "css/property-casing": ["error", "kebab-case"]
    }
  }
];
