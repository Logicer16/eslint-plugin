/**
 * @file The eslint config.
 */
// Espree is yet to support import-attributes
// eslint-disable-next-line import-x/namespace, import-x/no-deprecated
import {ConfigGenerator} from "@logicer/eslint-plugin";

/**
 * @type {import("@logicer/eslint-plugin").ConfigOptions}
 */
export const options = {
  ecmaVersion: 2024,
  eslintPlugin: true,
  javascript: true,
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
      "import-x/parsers": {
        // Temporary until https://github.com/import-js/eslint-plugin-import/pull/2829
        espree: [".js", ".jsx", ".cjs", ".mjs"]
      },
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
