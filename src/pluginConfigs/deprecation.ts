/**
 * @file The configuration for `eslint-plugin-deprecation`.
 */
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Depends on `@typescript-eslint/parser`.
 */
export const deprecationConfigs: FlatConfig[] = compat.extends(
  "plugin:deprecation/recommended"
);
