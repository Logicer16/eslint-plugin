/**
 * @file Type declarations for `@eslint-community/eslint-plugin-eslint-comments`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  type FlatConfig = import("../../src/types.ts").FlatConfig;

  declare const eslintCommentsConfigs: {
    recommended: FlatConfig;
  };

  export default eslintCommentsConfigs;
}
