/**
 * @file Plugin entrypoint and definitions.
 */
import ConfigGenerator from "./configGenerator.js";
import {ESLint} from "eslint";
import packageJSON from "../package.json" with {type: "json"};

const plugin: ESLint.Plugin = {
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

export type {ConfigOptions} from "./common.js";
export {default as ConfigGenerator} from "./configGenerator.js";
export {getLegacyCompatibilityInstance} from "./legacyCompatibility.js";
export {mergeGlobals} from "./mergeGlobals.js";
export {FlatCompat} from "@eslint/eslintrc";
export * as ESLint from "eslint";
