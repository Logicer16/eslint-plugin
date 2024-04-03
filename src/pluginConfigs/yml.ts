/**
 * @file The configuration for `eslint-plugin-yml`.
 */
import ymlPlugin from "eslint-plugin-yml";
import {FlatConfig} from "../types.js";

export const ymlConfigs: FlatConfig[] = ymlPlugin.configs["flat/standard"].map(
  (config: FlatConfig) => {
    config.rules = {
      ...config.rules,
      "yml/file-extension": ["error", {extension: "yml"}],
      "yml/plain-scalar": ["error", "always"],
      "yml/require-string-key": "error"
    };

    config.ignores = [...(config.ignores ?? []), "**/pnpm-lock.yaml"];

    return config;
  }
);

export const ymlPrettierConfigs: FlatConfig[] =
  ymlPlugin.configs["flat/prettier"];
