/* eslint-disable unicorn/prevent-abbreviations */
/**
 * @file Type declarations for `eslint-plugin-array-func`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-array-func" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginArrayFunc: Plugin;

  export default eslintPluginArrayFunc;
}
