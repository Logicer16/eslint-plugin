/**
 * @file The configuration for `eslint-plugin-prettier`.
 */

import {Linter} from "eslint";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";

export const prettierConfig: Linter.FlatConfig = prettierRecommendedConfig;

export const prettierConfigCustom: Linter.FlatConfig = {
  rules: {
    "prettier/prettier": "warn",

    // eslint-disable-next-line sort-keys
    "array-bracket-spacing": "off",
    "object-bracket-spacing": "off",
    "unicorn/template-indent": "off"
  }
};
