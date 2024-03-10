/* eslint-disable unicorn/prevent-abbreviations */
/**
 * @file Type declarations for `eslint-plugin-total-functions`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-total-functions" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginTotalFunctions: Plugin;

  export default eslintPluginTotalFunctions;
}
