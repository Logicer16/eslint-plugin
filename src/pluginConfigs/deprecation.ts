/**
 * @file The configuration for `eslint-plugin-deprecation`.
 */
import {Linter} from "eslint";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Depends on `@typescript-eslint/parser`.
 */
export const deprecationConfigs: Linter.FlatConfig[] = compat.extends(
  "plugin:deprecation/recommended"
);
