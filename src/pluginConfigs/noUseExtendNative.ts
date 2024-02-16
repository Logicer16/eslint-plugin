/**
 * @file The configuration for `eslint-plugin-no-use-extend-native`.
 */
import {Linter} from "eslint";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const noUseExtendNativeConfigs: Linter.FlatConfig[] = compat.extends(
  "plugin:no-use-extend-native/recommended"
);
