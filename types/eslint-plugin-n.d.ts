/**
 * Type declarations for `eslint-plugin-n`.
 *
 * Sourced from https://github.com/eslint-community/eslint-plugin-n/issues/142.
 * Temporary until the above issue is fixed.
 */
declare module "eslint-plugin-n" {
  import type {ESLint, Linter, Rule} from "eslint";

  declare const eslintPluginN: {
    meta: {
      name: string;
      version: string;
    };
    rules: Record<string, Rule.RuleModule>;
    configs: {
      "recommended-module": ESLint.ConfigData;
      "recommended-script": ESLint.ConfigData;
      "recommended": ESLint.ConfigData;
      "flat/recommended-module": Linter.FlatConfig;
      "flat/recommended-script": Linter.FlatConfig;
      "flat/recommended": Linter.FlatConfig;
      "flat/mixed-esm-and-cjs": Linter.FlatConfig[];
    };
  };
  export default eslintPluginN;
}
