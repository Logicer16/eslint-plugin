/**
 * @file The configuration for `eslint-plugin-simple-import-sort`.
 */
import {Linter} from "eslint";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export const simpleImportSortConfig: Linter.FlatConfig = {
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
