/**
 * @file Type declarations for `eslint-plugin-simple-import-sort`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-simple-import-sort" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginSimpleImportSort: Plugin;

  export default eslintPluginSimpleImportSort;
}
