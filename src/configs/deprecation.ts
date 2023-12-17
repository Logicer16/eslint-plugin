/**
 * @file A deprecation configuration. Uses the JSDoc `@deprecated` statement.
 */

/**
 * A deprecation configuration. Uses the JSDoc `@deprecated` statement.
 * @deprecated
 */
export = {
  extends: [
    "./configs/private/typescriptParser.js",
    "plugin:deprecation/recommended"
  ]
};
