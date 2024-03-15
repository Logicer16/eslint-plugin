/**
 * @file Type declarations for `eslint-plugin-decorator-position`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-decorator-position" {
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginDecoratorPosition: Plugin;

  export default eslintPluginDecoratorPosition;
}
