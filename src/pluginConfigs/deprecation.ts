/**
 * @file The configuration for `eslint-plugin-deprecation`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {Linter} from "eslint";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Depends on `@typescript-eslint/parser`.
 */
export const deprecationConfig: Linter.FlatConfig[] = compat.extends(
  "plugin:deprecation/recommended"
);
