/**
 * @file Type declarations for `eslint-plugin-markdown`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-markdown" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginMarkdown: Plugin & {
    configs: {
      recommended: FlatConfig[];
    };
  };

  export default eslintPluginMarkdown;
}
