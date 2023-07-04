/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @file A default prettier configuration.
 */

/**
 * A default prettier configuration.
 */
export = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "array-bracket-spacing": "off",
    "object-bracket-spacing": "off",
    "prettier/prettier": "warn"
  }
};
