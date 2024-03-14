/**
 * @file Type declarations for `eslint-plugin-perfectionist`.
 *
 * Temporary until https://github.com/azat-io/eslint-plugin-perfectionist/issues/90.
 */

declare module "eslint-plugin-perfectionist/configs/recommended-alphabetical" {
  type FlatConfig = import("../src/types.ts").FlatConfig;

  declare const eslintPluginPerfectionistConfigRecommendedAlphabetical: FlatConfig;

  export default eslintPluginPerfectionistConfigRecommendedAlphabetical;
}

declare module "eslint-plugin-perfectionist/configs/recommended-natural" {
  type FlatConfig = import("../src/types.ts").FlatConfig;

  declare const eslintPluginPerfectionistConfigRecommendedNatural: FlatConfig;

  export default eslintPluginPerfectionistConfigRecommendedNatural;
}

declare module "eslint-plugin-perfectionist/configs/recommended-line-length" {
  type FlatConfig = import("../src/types.ts").FlatConfig;

  declare const eslintPluginPerfectionistConfigRecommendedLineLength: FlatConfig;

  export default eslintPluginPerfectionistConfigRecommendedLineLength;
}
