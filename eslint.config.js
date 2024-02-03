/**
 * @file The eslint config.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import {ConfigGenerator} from "@logicer/eslint-plugin";
import ESLintPluginConfig from "eslint-plugin-eslint-plugin/configs/recommended";

const generator = new ConfigGenerator({
  javascript: true,
  jsdoc: true,
  prettier: true,
  typescript: true
});

/**
 * @type {import("eslint").Linter.FlatConfigFileSpec[]}
 */
const ignores = [];

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const eslintPluginConfigs = [
  ESLintPluginConfig,
  {
    rules: {
      "@typescript-eslint/naming-convention": "off"
    }
  }
];

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const config = [
  {ignores},
  ...(await generator.config),
  ...eslintPluginConfigs,
  ...(await generator.endConfig)
];

export default config;
