/**
 * @file The eslint config.
 */
// Espree is yet to support import-attributes
import {ConfigGenerator} from "@logicer/eslint-plugin";

/**
 * @type {import("@logicer/eslint-plugin").ConfigOptions}
 */
export const options = {
  ecmaVersion: 2024,
  eslintPlugin: true,
  general: true,
  jsdoc: true,
  prettier: true,
  typescript: true
};

const generator = new ConfigGenerator(options);

/**
 * @type {import("@logicer/eslint-plugin").FileSpec[]}
 */
const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".type-coverage/**/*",
  "types/generated/**/*",

  "**/.eslint_report.json",
  "**/.eslintcache"
];

/**
 * @type {import("@logicer/eslint-plugin").FlatConfig[]}
 */
const eslintPluginConfigs = [
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.*.json"],
        sourceType: "module"
      }
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          project: ["tsconfig.json", "tsconfig.eslint.json"]
        }
      }
    }
  },
  {
    rules: {
      "@typescript-eslint/naming-convention": "off"
    }
  }
];

/**
 * @type {import("@logicer/eslint-plugin").FlatConfig[]}
 */
const config = [
  {ignores},
  ...(await generator.config),
  ...eslintPluginConfigs,
  ...(await generator.endConfig)
];

export default config;
