/**
 * @file The configuration for `@eslint-community/eslint-plugin-eslint-comments`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

const unusedDisableSeverity = "error";

export const eslintCommentsConfigs: FlatConfig[] = [
  ...compat.extends("plugin:@eslint-community/eslint-comments/recommended"),
  {
    linterOptions: {
      reportUnusedDisableDirectives: unusedDisableSeverity
    },
    rules: {
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        {allowWholeFile: true}
      ],
      "@eslint-community/eslint-comments/no-unused-disable":
        unusedDisableSeverity
    }
  }
];
