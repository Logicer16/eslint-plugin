/**
 * @file Type declarations for `eslint-plugin-decorator-position`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-decorator-position" {
  type Plugin = import("../src/common.ts").Plugin;

  declare const eslintPluginDecoratorPosition: Plugin;

  export default eslintPluginDecoratorPosition;
}