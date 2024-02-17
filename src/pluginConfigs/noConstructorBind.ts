/**
 * @file The configuration for `eslint-plugin-no-constructor-bind`.
 */
import noConstructorBindPlugin from "eslint-plugin-no-constructor-bind";
import {FlatConfig} from "../common.js";

export const noConstructorBindConfig: FlatConfig = {
  plugins: {
    "no-constructor-bind": noConstructorBindPlugin
  },
  rules: {
    "no-constructor-bind/no-constructor-bind": "error",
    "no-constructor-bind/no-constructor-state": "error"
  }
};
