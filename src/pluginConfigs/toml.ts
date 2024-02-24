/**
 * @file The configuration for `eslint-plugin-toml`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const tomlConfigs: FlatConfig[] = compat
  .extends("plugin:toml/standard")
  .map((config) => {
    config.rules = {
      ...config.rules,
      "toml/array-bracket-spacing": ["error", "never"],
      "toml/array-element-newline": "off",
      "toml/keys-order": "off",
      "toml/no-mixed-type-in-array": "error",
      "toml/no-non-decimal-integer": ["error", {allowHexadecimal: false}],
      "toml/tables-order": "error"
    };

    if (config.languageOptions === undefined) {
      config.languageOptions = {};
    }
    if (config.languageOptions.parserOptions === undefined) {
      config.languageOptions.parserOptions = {};
    }
    // eslint-disable-next-line @typescript-eslint/dot-notation
    config.languageOptions.parserOptions["extraFileExtensions"] = [
      ".toml",
      // eslint-disable-next-line @typescript-eslint/dot-notation
      config.languageOptions.parserOptions["extraFileExtensions"]
    ].flat();

    return config;
  });
