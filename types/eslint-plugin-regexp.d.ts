/**
 * @file Type declarations for `eslint-plugin-regexp`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-regexp" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginRegexp: Plugin & {
    configs: {
      "flat/recommended": FlatConfig;
    };
  };

  export default eslintPluginRegexp;
}
