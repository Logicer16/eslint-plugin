/**
 * @file Type declarations for `eslint-plugin-no-use-extend-native`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-no-use-extend-native" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginNoUseExtendNativePlugin: {
    configs: {
      recommended: FlatConfig;
    };
  } & Plugin;

  export default eslintPluginNoUseExtendNativePlugin;
}
