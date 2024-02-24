/**
 * @file Plugin entrypoint and definitions.
 */
import packageJSON from "../package.json" with {type: "json"};
import ConfigGenerator from "./configGenerator.js";
import type {Plugin} from "./types.js";

const plugin: Plugin = {
  configs: {
    "recommended": await new ConfigGenerator({
      javascript: true,
      jsdoc: true
    }).config,
    "recommended-prettier": await new ConfigGenerator({
      javascript: true,
      jsdoc: true,
      prettier: true
    }).endConfig,
    "recommended-typescript": await new ConfigGenerator({
      javascript: true,
      jsdoc: true,
      typescript: true
    }).config
  },

  meta: {
    name: packageJSON.name,
    version: packageJSON.version
  }
};

export default plugin;

export type {
  ConfigOptions,
  RequiredConfigOptions,
  FlatConfig,
  FileSpec
} from "./types.js";
export {default as ConfigGenerator, processConfig} from "./configGenerator.js";
export {getLegacyCompatibilityInstance} from "./legacyCompatibility.js";
export {mergeGlobals} from "./mergeGlobals.js";
export {FlatCompat} from "@eslint/eslintrc";
export * as ESLint from "eslint";
export type {FlatConfig as TypescriptESLint} from "@typescript-eslint/utils/ts-eslint";
