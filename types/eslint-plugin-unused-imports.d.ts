/**
 * @file Type declarations for `eslint-plugin-unused-imports`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-unused-imports" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginUnusedImports: Plugin;

  export default eslintPluginUnusedImports;
}
