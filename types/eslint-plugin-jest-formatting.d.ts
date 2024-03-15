/**
 * @file Type declarations for `eslint-plugin-jest-formatting`.
 *
 * Temporary until added to DefinitelyTyped or bundled in module.
 */
declare module "eslint-plugin-jest-formatting" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginJestFormatting: Plugin;

  export default eslintPluginJestFormatting;
}
