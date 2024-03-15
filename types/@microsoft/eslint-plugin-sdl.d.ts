/**
 * @file Type declarations for `@microsoft/eslint-plugin-sdl`.
 *
 * Temporary until added to DefinitelyTyped.
 */

declare module "@microsoft/eslint-plugin-sdl" {
  type Plugin = import("../../src/types.ts").Plugin;

  declare const eslintPluginMicrosoftSDL: Plugin;

  export default eslintPluginMicrosoftSDL;
}
