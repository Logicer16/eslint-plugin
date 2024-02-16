/**
 * @file The configuration for `@eslint-community/eslint-plugin-eslint-comments`.
 */
import {Linter} from "eslint";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const eslintCommentsConfigs: Linter.FlatConfig[] = [
  ...compat.extends("plugin:@eslint-community/eslint-comments/recommended"),
  {
    rules: {
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        {allowWholeFile: true}
      ],
      "@eslint-community/eslint-comments/no-unused-disable": "error"
    }
  }
];
