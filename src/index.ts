/**
 * @file Plugin entrypoint and definitions.
 */

import {name as packageName, version as packageVersion} from "../package.json";
import deprecation from "./configs/deprecation.js";
import jsdocConfig from "./configs/jsdoc.js";
import prettierConfig from "./configs/prettier.js";
import recommendedConfig from "./configs/recommended.js";
import style from "./configs/style";
import typescriptConfig from "./configs/typescript.js";

export = {
  configs: {
    // eslint-disable-next-line deprecation/deprecation
    "deprecation": deprecation,
    "recommended": recommendedConfig,
    "recommended-jsdoc": jsdocConfig,
    "recommended-prettier": prettierConfig,
    "recommended-style": style,
    "recommended-typescript": typescriptConfig
  },

  meta: {
    name: packageName,
    version: packageVersion
  }
};
