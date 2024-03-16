/**
 * @file The configuration for `@shopify/eslint-plugin`.
 */
import shopifyPlugin from "@shopify/eslint-plugin";
import {FlatConfig} from "../types.js";

export const shopifyConfig: FlatConfig = {
  plugins: {
    // ESLint does not support slashes in the rule name for scoped packages.
    shopify: shopifyPlugin
  },
  rules: {
    "shopify/no-ancestor-directory-import": "error",
    "shopify/no-useless-computed-properties": "error",
    "shopify/prefer-early-return": "error",
    "shopify/typescript/prefer-singular-enums": "error"
  }
};
