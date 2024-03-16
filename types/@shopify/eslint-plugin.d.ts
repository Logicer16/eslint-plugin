/**
 * @file Type declarations for `@shopify/eslint-plugin`.
 *
 * Temporary until added to DefinitelyTyped.
 */

declare module "@shopify/eslint-plugin" {
  type Plugin = import("../../src/types.ts").Plugin;

  declare const eslintPluginShopify: Plugin;

  export default eslintPluginShopify;
}
