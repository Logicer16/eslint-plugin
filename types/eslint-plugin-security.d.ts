/**
 * @file Type declarations for `eslint-plugin-security`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-security" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginSecurity: Plugin & {
    configs: {
      recommended: FlatConfig;
    };
  };

  export default eslintPluginSecurity;
}
