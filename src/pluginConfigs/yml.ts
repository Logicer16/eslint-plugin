/**
 * @file The configuration for `eslint-plugin-yml`.
 */
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const ymlConfigs: FlatConfig[] = compat
  .extends("plugin:yml/standard")
  .map((config) => {
    config.rules = {
      ...config.rules,
      "yml/file-extension": ["error", {extension: "yml"}],
      "yml/plain-scalar": ["error", "always"],
      "yml/require-string-key": "error"
    };

    if (config.languageOptions === undefined) {
      config.languageOptions = {};
    }
    if (config.languageOptions.parserOptions === undefined) {
      config.languageOptions.parserOptions = {};
    }
    // eslint-disable-next-line @typescript-eslint/dot-notation
    config.languageOptions.parserOptions["extraFileExtensions"] = [
      ".yml",
      ".yaml",
      // eslint-disable-next-line @typescript-eslint/dot-notation
      config.languageOptions.parserOptions["extraFileExtensions"]
    ].flat();

    return config;
  });

export const ymlPrettierConfigs: FlatConfig[] = compat.extends(
  "plugin:yml/prettier"
);
