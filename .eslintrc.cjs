module.exports = {
  extends: ["plugin:@logicer/recommended-prettier"],
  plugins: ["@logicer"],
  root: true,

  settings: {
    "import/resolver": {
      node: true,
      typescript: true
    }
  },

  overrides: [
    {
      files: ["src/**/*"],
      extends: [
        "plugin:@logicer/recommended-typescript",
        "plugin:eslint-plugin/recommended",
        "plugin:@logicer/recommended-jsdoc",
        "plugin:@logicer/recommended-prettier"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true
      },
      plugins: ["@logicer"],
      rules: {
        "@typescript-eslint/naming-convention": "off"
      }
    }
  ]
};
