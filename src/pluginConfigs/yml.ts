/**
 * @file The configuration for `eslint-plugin-yml`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

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
    config.ignores = [...(config.ignores ?? []), "**/pnpm-lock.yaml"];

    return config;
  });

export const ymlPrettierConfigs: FlatConfig[] = compat.extends(
  "plugin:yml/prettier"
);
