/**
 * @file The configuration for `eslint-plugin-no-use-extend-native`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const noUseExtendNativeConfigs: FlatConfig[] = compat.extends(
  "plugin:no-use-extend-native/recommended"
);
