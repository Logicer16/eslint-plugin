/**
 * @file Plugin entrypoint and definitions.
 */

import {name as packageName, version as packageVersion} from "../package.json";
import jsdocConfig from "./configs/jsdoc.js";
import prettierConfig from "./configs/prettier.js";
import recommendedConfig from "./configs/recommended.js";
import svelteConfig from "./configs/svelte";
import typescriptConfig from "./configs/typescript.js";

export = {
  configs: {
    "recommended": recommendedConfig,
    "recommended-jsdoc": jsdocConfig,
    "recommended-prettier": prettierConfig,
    "recommended-svelte": svelteConfig,
    "recommended-typescript": typescriptConfig
  },

  meta: {
    name: packageName,
    version: packageVersion
  }
};
