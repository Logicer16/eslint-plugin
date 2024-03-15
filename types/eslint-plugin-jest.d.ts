/**
 * @file Type declarations for `eslint-plugin-jest`.
 *
 * Temporary until the above issue is fixed.
 */
declare module "eslint-plugin-jest" {
  import type {ESLint} from "eslint";

  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginJest: Plugin & {
    configs: {
      "all": ESLint.ConfigData;
      "flat/all": FlatConfig;
      "flat/recommended": FlatConfig;
      "flat/snapshots": FlatConfig;
      "flat/style": FlatConfig;
      "recommended": ESLint.ConfigData;
      "style": ESLint.ConfigData;
    };
  };

  export default eslintPluginJest;
}
