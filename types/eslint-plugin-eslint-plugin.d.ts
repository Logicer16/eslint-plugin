/**
 * @file Type declarations for `eslint-plugin-eslint-plugin`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-eslint-plugin" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginESLintPlugin: {
    configs: {
      "flat/recommended": FlatConfig;
    };
  } & Plugin;

  export default eslintPluginESLintPlugin;
}
