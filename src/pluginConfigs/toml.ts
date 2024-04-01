/**
 * @file The configuration for `eslint-plugin-toml`.
 */
import tomlPlugin from "eslint-plugin-toml";
import {FlatConfig} from "../types.js";

export const tomlConfigs: FlatConfig[] = [
  ...tomlPlugin.configs ["flat/standard"],
  {
    rules :{
      "toml/array-bracket-spacing": ["error", "never"],
      "toml/array-element-newline": "off",
      "toml/keys-order": "off",
      "toml/no-mixed-type-in-array": "error",
      "toml/no-non-decimal-integer": ["error", {allowHexadecimal: true, allowBinary: true}]
    }}];
