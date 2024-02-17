/**
 * @file Type declarations for `eslint-plugin-jest-formatting`.
 *
 * Temporary until the added to DefinitelyTyped or bundled in module.
 */
declare module "eslint-plugin-jest-formatting" {
  type Plugin = import("../src/common.js").Plugin;

  declare const eslintPluginJestFormatting: Plugin;

  export default eslintPluginJestFormatting;
}
