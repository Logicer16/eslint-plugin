# Logicer's ESLint Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)](https://www.npmjs.com/package/@logicer/eslint-plugin)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)](https://github.com/Logicer16/eslint-plugin/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)](https://github.com/Logicer16/eslint-plugin/graphs/contributors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type%20coverage&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLogicer16%2Feslint-plugin%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)

Logicer's **_highly_** opinionated ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs. Dependency plugins may be omitted if they're not configured to be used. For use in flat config files.

Contents:

- [Install](#install)
- [Usage](#usage)
  - [Options](#options)
    - [`general`](#general)
    - [`typescript`](#typescript)
    - [`eslintPlugin`](#eslintplugin)
    - [`jest`](#jest)
    - [`jsdoc`](#jsdoc)
    - [`prettier`](#prettier)
    - [`tailwind`](#tailwind)
    - [`svelte`](#svelte)
    - [`ecmaVersion`](#ecmaversion)
  - [Predefined Configs](#predefined-configs)
    - [`recommended`](#recommended)
    - [`recommended-prettier`](#recommended-prettier)
    - [`recommended-typescript`](#recommended-typescript)

## Install

```sh
npm install --save-dev eslint @logicer/eslint-plugin
```

## Usage

In your `eslint.config.js`:

```js
import {ConfigGenerator} from "@logicer/eslint-plugin";

const generator = new ConfigGenerator({
  ecmaVersion: "latest", // or specific version
  eslintPlugin: true, // or false (default)
  general: true, // (default) or false
  jest: true, // or false (default)
  jsdoc: true, // or false (default)
  prettier: true, // or false (default)
  sourceFiles: ["src/**/*"], // The eslint config files value representing the project's source code (default: [])
  svelte: true, // or false (default)
  tailwind: true, //or false (default)
  typescript: true // or false (default)
});

const config = [
  ...(await generator.config),
  // <Your custom config>
  ...(await generator.endConfig)
];

export default config;
```

### Options

Options are provided to configure sets of similar rules which may conflict with each other or parts of your code.

#### `general`

Extends:

- `"@eslint/js".configs.recommended`
- `plugin:css/standard` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:@eslint-community/eslint-comments/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `"@html-eslint/eslint-plugin".configs["flat/recommended"]`
- `plugin:import-x/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `"eslint-plugin-json-schema-validator".configs["flat/recommended"]`
- `"eslint-plugin-jsonc".configs["flat/recommended-with-json"]`
- `"eslint-plugin-jsonc".configs["flat/recommended-with-jsonc"]`
- `"eslint-plugin-jsonc".configs["flat/recommended-with-json5"]`
- `"eslint-plugin-markdown".configs.recommended`
- `"eslint-plugin-n".configs["flat/mixed-esm-and-cjs"]` (`"eslint-plugin-n"configs["flat/recommended"]` for all other files)
- A custom rule set of `eslint-plugin-no-constructor-bind`
- `plugin:no-use-extend-native/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `"eslint-plugin-perfectionist/configs/recommended-natural"`
- `"eslint-plugin-regexp".configs["flat/recommended"]`
- A custom rule set of `@microsoft/eslint-plugin-sdl`
- `"eslint-plugin-security".configs.recommended`
- A custom rule set of `eslint-plugin-no-constructor-bind`
- `"eslint-plugin-toml".configs["flat/standard"]`
- A custom rule set of `@shopify/eslint-plugin`
- A custom rule set of `eslint-plugin-simple-import-sort`
- `"eslint-plugin-unicorn".configs["flat/recommended"]`
- A custom rule set of `eslint-plugin-unused-imports`
- `"eslint-plugin-yml".configs["flat/standard"]`

Enables:

- `eslint-plugin-html`

If [`prettier`](#prettier) is set, it also extends:

- `"eslint-plugin-jsonc".configs["flat/prettier"]`
- `"eslint-plugin-yml".configs["flat/prettier"]`

#### `typescript`

Typescript **requires** extra dependencies:

```sh
npm install --save-dev eslint-import-resolver-typescript
```

Automatically enables [`general`](#general). Configures `@typescript-eslint/parser` and extends:

- `"typescript-eslint".configs.strictTypeChecked`
- `"typescript-eslint".configs.stylisticTypeChecked`
- A custom rule set of `eslint-plugin-array-func`
- A custom rule set of `eslint-plugin-decorator-position`
- `plugin:deprecation/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:etc/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:import-x/typescript` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- A custom rule set of `eslint-plugin-total-functions`

#### `eslintPlugin`

Extends:

- `"eslint-plugin-eslint-plugin/configs/recommended"`

#### `jest`

Extends:

- `"eslint-plugin-jest".configs["flat/snapshots"]`
- `"eslint-plugin-jest".configs["flat/recommended"]`
- A custom rule set of `eslint-plugin-jest-extended`
- A custom rule set of `eslint-plugin-jest-formatting`

#### `jsdoc`

Extends:

If [`typescript`](#typescript) is set:

- `"eslint-plugin-jsdoc".configs["flat/recommended-typescript-error"]`

Otherwise:

- `"eslint-plugin-jsdoc".configs["flat/recommended-typescript-flavor-error"]`

#### `prettier`

Extends `plugin:prettier/recommended`

Configures `"prettier/prettier"` to use the config from `@logicer/prettier-config`. If you need to override any of these options, ensure you do so in both your `.prettierrc.js` and the `prettier/prettier` rule in your `eslint.config.js`.

See also [`general`](#general) and [`svelte`](#svelte)

#### `tailwind`

Extends `plugin:tailwindcss/recommended`

#### `svelte`

Extends `plugin:svelte/recommended`.

If [`prettier`](#prettier) is set, it also configures `plugin:svelte/prettier`.

#### `ecmaVersion`

This option sets the ecmascript version for eslint and relevant parsers. It expect's [ESLint's version format](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects) and like ESLint, it defaults to `"latest"`.

Additionally, it is used to automatically extend the appropriate configs from `eslint-plugin-es-x`.

### Predefined Configs

This plugin comes with some predefined configurations, generated with the following options:

#### `recommended`

```js
const config = {
  general: true,
  jsdoc: true
};
```

#### `recommended-prettier`

```js
const config = {
  general: true,
  jsdoc: true,
  prettier: true
};
```

#### `recommended-typescript`

```js
const config = {
  general: true,
  jsdoc: true,
  typescript: true
};
```

Note, Typescript **requires** [extra dependencies](#typescript):
