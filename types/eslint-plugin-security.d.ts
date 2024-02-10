/**
 * @file Type declarations for `eslint-plugin-security`.
 */
declare module "eslint-plugin-security" {
  import type {ESLint, Linter} from "eslint";

  declare const eslintPluginSecurity: ESLint.Plugin & {
    configs: {
      recommended: Linter.FlatConfig;
    };
  };

  export default eslintPluginSecurity;
}
