/**
 * @file Type declarations for `eslint-plugin-promise`.
 *
 * Temporary until added to https://github.com/eslint-community/eslint-plugin-promise/pull/512 is merged.
 */
declare module "eslint-plugin-promise" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginPromisePlugin: {
    configs: {
      "flat/recommended": FlatConfig;
    };
  } & Plugin;

  export default eslintPluginPromisePlugin;
}
