/**
 * @file Type declarations for `eslint-plugin-security`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-security" {
  type FlatConfig = import("../src/common.js").FlatConfig;
  type Plugin = import("../src/common.js").Plugin;

  declare const eslintPluginSecurity: Plugin & {
    configs: {
      recommended: FlatConfig;
    };
  };

  export default eslintPluginSecurity;
}
