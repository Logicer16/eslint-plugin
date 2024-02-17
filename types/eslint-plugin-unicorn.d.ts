/**
 * @file Type declarations for `eslint-plugin-unicorn`.
 *
 * Temporary until https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2246 is fixed.
 */
declare module "eslint-plugin-unicorn" {
  type FlatConfig = import("../src/common.js").FlatConfig;
  type Plugin = import("../src/common.js").Plugin;

  declare const eslintPluginUnicorn: Plugin & {
    configs: {
      "flat/recommended": FlatConfig;
    };
  };

  export default eslintPluginUnicorn;
}
