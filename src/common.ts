/**
 * @file Types and constants common throughout the plugin.
 */
import {Linter} from "eslint";

export interface ConfigOptions {
  ecmaVersion?: Linter.ParserOptions["ecmaVersion"];
  eslintPlugin?: boolean;
  javascript?: boolean;
  jest?: boolean;
  jsdoc?: boolean;
  prettier?: boolean;
  svelte?: boolean;
  typescript?: boolean;
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
