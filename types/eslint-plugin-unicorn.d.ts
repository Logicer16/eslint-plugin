/**
 * Type declarations for `eslint-plugin-unicorn`.
 *
 * Temporary until https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2246 is fixed.
 */
declare module "eslint-plugin-unicorn" {
  import type {Linter} from "eslint";

  declare const eslintPluginUnicorn: {
    configs: {
      "flat/recommended": Linter.FlatConfig;
    };
  };
  export default eslintPluginUnicorn;
}
