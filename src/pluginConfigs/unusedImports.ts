/**
 * @file The configuration for `eslint-plugin-unused-imports`.
 */
import unusedImports from "eslint-plugin-unused-imports";
import {FlatConfig} from "../common.js";

export const unusedImportsConfig: FlatConfig = {
  plugins: {
    "unused-imports": unusedImports
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error"
  }
};
