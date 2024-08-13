/**
 * @file The configuration for `eslint-plugin-no-use-extend-native`.
 */
// eslint-disable-next-line import-x/namespace, import-x/no-deprecated, import-x/default, import-x/no-named-as-default
import noUseExtendNativePlugin from "eslint-plugin-no-use-extend-native";
import {FlatConfig} from "../types.js";

export const noUseExtendNativeConfig: FlatConfig =
  noUseExtendNativePlugin.configs.recommended;
