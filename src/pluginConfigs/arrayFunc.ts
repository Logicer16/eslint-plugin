/* eslint-disable unicorn/prevent-abbreviations */
/**
 * @file The configuration for `eslint-plugin-array-func`.
 */
import arrayFunc from "eslint-plugin-array-func";
import {FlatConfig} from "../types.js";

export const arrayFuncConfig: FlatConfig = {
  plugins: {
    "array-func": arrayFunc
  },
  rules: {
    "array-func/avoid-reverse": "error",
    "array-func/from-map": "error",
    "array-func/no-unnecessary-this-arg": "error",
    "array-func/prefer-flat": "error",
    "array-func/prefer-flat-map": "error"
  }
};
