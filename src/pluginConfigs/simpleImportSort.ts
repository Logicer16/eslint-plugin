/**
 * @file The configuration for `eslint-plugin-simple-import-sort`.
 */
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import {FlatConfig} from "../common.js";

export const simpleImportSortConfig: FlatConfig = {
  plugins: {
    "simple-import-sort": simpleImportSortPlugin
  },
  rules: {
    "simple-import-sort/imports": [
      "error",
      {groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]]}
    ]
  }
};
