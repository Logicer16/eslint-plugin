/**
 * @file The configuration for `eslint-plugin-deprecation`.
 */
import {legacyCompatibility} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = new legacyCompatibility(import.meta.url);

/**
 * Depends on `@typescript-eslint/parser`.
 */
export const deprecationConfigs: FlatConfig[] = compat.extends(
  "plugin:deprecation/recommended"
);
