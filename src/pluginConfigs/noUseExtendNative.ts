/**
 * @file The configuration for `eslint-plugin-no-use-extend-native`.
 */
import noUseExtendNativePlugin from "eslint-plugin-no-use-extend-native";
import {FlatConfig} from "../types.js";

export const noUseExtendNativeConfig: FlatConfig =
  noUseExtendNativePlugin.configs.recommended;
