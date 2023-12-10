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
    "prettier/prettier": "warn",

    // eslint-disable-next-line sort-keys
    "array-bracket-spacing": "off",
    "object-bracket-spacing": "off",
    "unicorn/template-indent": "off"
  }
};
