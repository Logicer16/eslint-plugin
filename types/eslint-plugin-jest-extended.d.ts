/**
 * @file Type declarations for `eslint-plugin-jest-extended`.
 *
 * Temporary until the added to DefinitelyTyped or bundled in module.
 */
declare module "eslint-plugin-jest-extended" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginJestExtended: Plugin;

  export default eslintPluginJestExtended;
}
