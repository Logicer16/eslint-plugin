/**
 * Type declarations for `eslint-plugin-n`.
 *
 * Temporary until the added to DefinitelyTyped.
 */
declare module "eslint-plugin-eslint-plugin" {
  import type {ESLint, Linter, Rule} from "eslint";

  declare const eslintPluginESLintPlugin: ESLint.Plugin & {
    configs: {
      "all": Linter.FlatConfig;
      "recommended": Linter.FlatConfig;
      "rules-recommended": Linter.FlatConfig;
      "rules": Linter.FlatConfig;
      "tests-recommended": Linter.FlatConfig;
      "tests": Linter.FlatConfig;
    };
  };

  export default eslintPluginESLintPlugin;
}
