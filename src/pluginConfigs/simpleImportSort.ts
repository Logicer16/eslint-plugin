/**
 * @file The configuration for `eslint-plugin-simple-import-sort`.
 */
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import {FlatConfig} from "../types.js";

export const simpleImportSortConfig: FlatConfig = {
  plugins: {
    "simple-import-sort": simpleImportSortPlugin
  },
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]]}
    ]
  }
};
