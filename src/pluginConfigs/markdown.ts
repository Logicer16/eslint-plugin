/**
 * @file The configuration for `eslint-plugin-markdown`.
 */
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const markdownConfigs: FlatConfig[] = [
  ...compat.extends("plugin:markdown/recommended"),
  {
    files: ["**/*.md/**/*.js", "**/*.md"],
    rules: {
      "eol-last": "off",
      "import/namespace": "off",
      "import/no-deprecated": "off",
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "padded-blocks": "off",
      "strict": "off",
      "unicode-bom": "off",
      "unused-imports/no-unused-vars": "off"
    }
  }
];
