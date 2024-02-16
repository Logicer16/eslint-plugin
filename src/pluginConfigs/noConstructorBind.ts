/**
 * @file The configuration for `eslint-plugin-no-constructor-bind`.
 */
import {Linter} from "eslint";
import noConstructorBindPlugin from "eslint-plugin-no-constructor-bind";

export const noConstructorBindConfig: Linter.FlatConfig = {
  plugins: {
    "no-constructor-bind": noConstructorBindPlugin
  },
  rules: {
    "no-constructor-bind/no-constructor-bind": "error",
    "no-constructor-bind/no-constructor-state": "error"
  }
};
