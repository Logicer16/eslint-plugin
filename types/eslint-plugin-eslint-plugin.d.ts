/**
 * @file Type declarations for `eslint-plugin-eslint-plugin`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-eslint-plugin/configs/recommended" {
  type FlatConfig = import("../src/common.js").FlatConfig;

  declare const eslintPluginESLintPluginConfigRecommended: FlatConfig;

  export default eslintPluginESLintPluginConfigRecommended;
}
