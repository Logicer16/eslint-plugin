/**
 * @file The configuration for `eslint-plugin-deprecation`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Depends on `@typescript-eslint/parser`.
 */
export const deprecationConfigs: FlatConfig[] = compat.extends(
  "plugin:deprecation/recommended"
);
