/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @file Plugin entrypoint and definitions.
 */

import {name as packageName, version as packageVersion} from "../package.json";
import jsdocConfig from "./configs/jsdoc";
import prettierConfig from "./configs/prettier.js";
import recommendedConfig from "./configs/recommended.js";
import typescriptConfig from "./configs/typscript.js";

export = {
  configs: {
    "recommended": recommendedConfig,
    "recommended-jsdoc": jsdocConfig,
    "recommended-prettier": prettierConfig,
    "recommended-typescript": typescriptConfig
  },

  meta: {
    name: packageName,
    version: packageVersion
  }
};
