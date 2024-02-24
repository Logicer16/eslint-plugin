/**
 * @file The configuration for `eslint-plugin-prettier`.
 */
import {prettierConfigGenerator} from "@logicer/prettier-config";
import prettierRecommendedConfig from "eslint-plugin-prettier/recommended";
import {FlatConfig, RequiredConfigOptions} from "../common.js";

export const prettierConfig: FlatConfig = prettierRecommendedConfig;

/**
 * Generate an eslint config for prettier based on the generator's options. Exclusively contains the modifications to `eslint-plugin-prettier/recommended`.
 * @param options The options of the config generator.
 * @returns A eslint config for prettier.
 */
export function getCustomPrettierConfig(
  options: RequiredConfigOptions
): FlatConfig {
  return {
    rules: {
      "prettier/prettier": ["warn", prettierConfigGenerator(options)],

      // eslint-disable-next-line sort-keys
      "array-bracket-spacing": "off",
      "object-bracket-spacing": "off",
      "unicorn/template-indent": "off"
    }
  };
}
