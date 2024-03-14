/**
 * @file Type declarations for `eslint-plugin-n`.
 *
 * Sourced from https://github.com/eslint-community/eslint-plugin-n/issues/142.
 * Temporary until the above issue is fixed.
 */
declare module "eslint-plugin-n" {
  import type {ESLint} from "eslint";

  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginN: Plugin & {
    configs: {
      "flat/mixed-esm-and-cjs": FlatConfig[];
      "flat/recommended": FlatConfig;
      "flat/recommended-module": FlatConfig;
      "flat/recommended-script": FlatConfig;
      "recommended": ESLint.ConfigData;
      "recommended-module": ESLint.ConfigData;
      "recommended-script": ESLint.ConfigData;
    };
  };

  export default eslintPluginN;
}
