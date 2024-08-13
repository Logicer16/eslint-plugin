/**
 * @file Type declarations for `eslint-plugin-tailwindcss`.
 *
 * Temporary until added to DefinitelyTyped (https://github.com/DefinitelyTyped/DefinitelyTyped/pull/70273).
 */
declare module "eslint-plugin-tailwindcss" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginTailwindcss: {
    configs: {
      "flat/recommended": FlatConfig[];
    };
  } & Plugin;

  export default eslintPluginTailwindcss;
}
