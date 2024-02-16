/**
 * @file Types and constants common throughout the plugin.
 */
import {Linter} from "eslint";

export interface ConfigOptions {
  ecmaVersion?: Linter.ParserOptions["ecmaVersion"];
  javascript?: boolean;
  typescript?: boolean;
  prettier?: boolean;
  jsdoc?: boolean;
  svelte?: boolean;
  jest?: boolean;
}

export const ESIncompatibleExtensionPatterns = [
  "json",
  "jsonc",
  "json5",
  "yml",
  "toml",
  "md",
  "md/**/*.js"
];
