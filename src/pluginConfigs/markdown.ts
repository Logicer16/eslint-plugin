/**
 * @file The configuration for `eslint-plugin-markdown`.
 */
import markdownPlugin from "eslint-plugin-markdown";
import {FlatConfig} from "../types.js";

export const markdownConfigs: FlatConfig[] = [
  ...markdownPlugin.configs.recommended,
  {
    files: ["**/*.md/**/*", "**/*.md"],
    rules: {
      "eol-last": "off",
      "import-x/namespace": "off",
      "import-x/no-deprecated": "off",
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
