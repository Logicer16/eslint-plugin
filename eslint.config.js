/**
 * @file The eslint config.
 */
// Espree is yet to support import-attributes
// n/no-unpublished-import giving false positives
// eslint-disable-next-line n/no-unpublished-import, import/namespace, import/no-deprecated
import {ConfigGenerator} from "@logicer/eslint-plugin";
// eslint-disable-next-line n/no-unpublished-import

const generator = new ConfigGenerator({
  ecmaVersion: 2024,
  eslintPlugin: true,
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
