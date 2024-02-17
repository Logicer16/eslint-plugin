/**
 * @file The configuration for `eslint-plugin-prettier`.
 */
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";
import {FlatConfig} from "../common.js";

export const prettierConfig: FlatConfig = prettierRecommendedConfig;

export const prettierConfigCustom: FlatConfig = {
  rules: {
    "prettier/prettier": "warn",

    // eslint-disable-next-line sort-keys
    "array-bracket-spacing": "off",
    "object-bracket-spacing": "off",
    "unicorn/template-indent": "off"
  }
};
