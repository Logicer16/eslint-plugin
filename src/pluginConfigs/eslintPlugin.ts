/**
 * @file The configuration for `eslint-plugin-eslint-plugin`.
 */
import eslintPluginRecommended from "eslint-plugin-eslint-plugin/configs/recommended";
import {FlatConfig} from "../common.js";

export const eslintPluginConfigs: FlatConfig[] = [
  eslintPluginRecommended,
  {
    rules: {
      "eslint-plugin/no-property-in-node": "error",
      "eslint-plugin/prefer-placeholders": "error",
      "eslint-plugin/prefer-replace-text": "error",
      "eslint-plugin/report-message-format": ["error", "^[A-Z].*\\.$"],
      "eslint-plugin/require-meta-docs-description": "error",
      "eslint-plugin/require-meta-docs-url": "error",
      "eslint-plugin/require-meta-schema": [
        "error",
        {requireSchemaPropertyWhenOptionless: false}
      ],
      "eslint-plugin/test-case-shorthand-strings": "error"
    }
  }
];
