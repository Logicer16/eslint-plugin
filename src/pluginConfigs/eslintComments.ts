/**
 * @file The configuration for `@eslint-community/eslint-plugin-eslint-comments`.
 */
import eslintPluginEslintComments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import {FlatConfig} from "../types.js";

const unusedDisableSeverity = "error";

export const eslintCommentsConfigs: FlatConfig[] = [
  eslintPluginEslintComments.recommended,
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
