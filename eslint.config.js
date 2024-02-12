/**
 * @file The eslint config.
 */
// Espree is yet to support import-attributes
// n/no-unpublished-import giving false positives
// eslint-disable-next-line n/no-unpublished-import, import/namespace, import/no-deprecated
import {ConfigGenerator} from "@logicer/eslint-plugin";
// eslint-disable-next-line n/no-unpublished-import
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
const ignores = [
  "node_modules/**/*",
  "dist/**/*",
  ".type-coverage/**/*",

  "**/.eslint_report.json",
  "**/.eslintcache"
];

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const eslintPluginConfigs = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2024,
        project: ["./tsconfig.json", "./tsconfig.*.json"],
        sourceType: "module"
      }
    },
    settings: {
      "import/parsers": {
        // Temporary until https://github.com/import-js/eslint-plugin-import/pull/2829
        espree: [".js", ".jsx", ".cjs", ".mjs"]
      },
      "import/resolver": {
        typescript: {
          project: ["tsconfig.json", "tsconfig.eslint.json"]
        }
      }
    }
  },
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
