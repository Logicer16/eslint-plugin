/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @file A deprecation configuration. Uses the JSDoc `@deprecated` statement.
 */

/**
 * A deprecation configuration. Uses the JSDoc `@deprecated` statement.
 */
export = {
  extends: [
    "./configs/private/typescriptParser.ts",
    "plugin:deprecation/recommended"
  ]
};
