/**
 * @file The configuration for `eslint-plugin-no-use-extend-native`.
 */
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const noUseExtendNativeConfigs: FlatConfig[] = compat.extends(
  "plugin:no-use-extend-native/recommended"
);
