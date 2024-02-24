/**
 * @file Type declarations for `eslint-plugin-no-constructor-bind`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-no-constructor-bind" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginNoConstructorBind: Plugin;

  export default eslintPluginNoConstructorBind;
}
