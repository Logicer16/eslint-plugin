/**
 * @file Plugin entrypoint and definitions.
 */
import packageJSON from "../package.json" with {type: "json"};
import ConfigGenerator from "./configGenerator.js";
import type {Plugin} from "./types.js";

const plugin: Plugin = {
  configs: {
    "recommended": await new ConfigGenerator({
      general: true,
      jsdoc: true
    }).config,
    "recommended-prettier": await new ConfigGenerator({
      general: true,
      jsdoc: true,
      prettier: true
    }).endConfig,
    "recommended-typescript": await new ConfigGenerator({
      general: true,
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

export type * from "../types/generated/typegen.js";
export {default as ConfigGenerator, processConfig} from "./configGenerator.js";
export {legacyCompatibility} from "./legacyCompatibility.js";
export {mergeGlobals} from "./mergeGlobals.js";
export type {
  ConfigOptions,
  FileSpec,
  FlatConfig,
  RequiredConfigOptions,
  ConfigNamespace as TypescriptESLint
} from "./types.js";
export {FlatCompat} from "@eslint/eslintrc";
export * as ESLint from "eslint";
