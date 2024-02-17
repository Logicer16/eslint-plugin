/**
 * @file Type declarations for `eslint-plugin-n`.
 *
 * Sourced from https://github.com/eslint-community/eslint-plugin-n/issues/142.
 * Temporary until the above issue is fixed.
 */
declare module "eslint-plugin-n" {
  import type {ESLint} from "eslint";

  type FlatConfig = import("../src/common.js").FlatConfig;
  type Plugin = import("../src/common.js").Plugin;

  declare const eslintPluginN: Plugin & {
    configs: {
      "recommended-module": ESLint.ConfigData;
      "recommended-script": ESLint.ConfigData;
      "recommended": ESLint.ConfigData;
      "flat/recommended-module": FlatConfig;
      "flat/recommended-script": FlatConfig;
      "flat/recommended": FlatConfig;
      "flat/mixed-esm-and-cjs": FlatConfig[];
    };
  };

  export default eslintPluginN;
}
