/**
 * @file The configuration for `eslint-plugin-promise`.
 */
import promisePlugin from "eslint-plugin-promise";
import {FlatConfig} from "../types.js";

export const promiseConfigs: FlatConfig[] = [
  promisePlugin.configs["flat/recommended"],
  {
    rules: {
      "promise/always-return": "off",
      "promise/no-callback-in-promise": "off",
      "promise/no-multiple-resolved": "error",
      "promise/no-nesting": "error",
      "promise/no-promise-in-callback": "off",
      "promise/no-return-in-finally": "error",
      "promise/valid-params": "off"
    }
  }
];
