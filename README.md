# Logicer's ESLint Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)](https://www.npmjs.com/package/@logicer/eslint-plugin)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)](https://github.com/Logicer16/eslint-plugin/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)](https://github.com/Logicer16/eslint-plugin/graphs/contributors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type%20coverage&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLogicer16%2Feslint-plugin%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)

Logicer's ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs. Dependency plugins may be omitted if they're not configured to be used. For use in flat config files.

Contents:

- [Install](#install)
- [Usage](#usage)
  - [Options](#options)
    - [`javascript`](#javascript)
    - [`typescript`](#typescript)
    - [`eslintPlugin`](#eslintplugin)
    - [`jest`](#jest)
    - [`jsdoc`](#jsdoc)
    - [`prettier`](#prettier)
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
  javascript: true, // (default) or false
  jest: true, // or false (default)
  jsdoc: true, // or false (default)
  prettier: true, // or false (default)
  svelte: true, // or false (default)
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

#### `javascript`

Extends:

- `"@eslint/js".configs.recommended`
- `plugin:@eslint-community/eslint-comments/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:import/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:json-schema-validator/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:jsonc/recommended-with-json` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:jsonc/recommended-with-jsonc` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:jsonc/recommended-with-json5` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:markdown/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `"eslint-plugin-n".configs["flat/mixed-esm-and-cjs"]` (`"eslint-plugin-n"configs["flat/recommended"]` for all other files)
- A custom rule set of `eslint-plugin-no-constructor-bind`
- `plugin:no-use-extend-native/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:regexp/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `"eslint-plugin-security".configs.recommended`
- `plugin:toml/standard` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- A custom rule set of `eslint-plugin-simple-import-sort`
- `"eslint-plugin-unicorn".configs["flat/recommended"]`
- A custom rule set of `eslint-plugin-unused-imports`
- `plugin:yml/standard` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))

If [`prettier`](#prettier) is set, it also extends:

- `plugin:jsonc/prettier` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:yml/prettier` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))

#### `typescript`

Typescript **requires** extra dependencies:

```sh
npm install --save-dev eslint-import-resolver-typescript
```

Automatically enables [`javascript`](#javascript). Configures `@typescript-eslint/parser` and extends:

- `"typescript-eslint".configs.strictTypeChecked`
- `"typescript-eslint".configs.stylisticTypeChecked`
- A custom rule set of `eslint-plugin-array-func`
- `plugin:deprecation/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:import/typescript` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))

#### `eslintPlugin`

Extends:

- `"eslint-plugin-eslint-plugin/configs/recommended"`

#### `jest`

Extends:

- `plugin:jest/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- A custom rule set of `eslint-plugin-jest-extended`
- A custom rule set of `eslint-plugin-jest-formatting`

#### `jsdoc`

Extends:

- `"eslint-plugin-jsdoc".configs["flat/recommended-typescript-error"]` for TypeScript
- `"eslint-plugin-jsdoc".configs["flat/recommended-typescript-flavor-error"]` for JavaScript.

#### `prettier`

Extends `plugin:prettier/recommended`

Configures `"prettier/prettier"` to use the config from `@logicer/prettier-config`. If you need to override any of these options, ensure you do so in both your `.prettierrc.js` and the `prettier/prettier` rule in your `eslint.config.js`.

See also [`javascript`](#javascript) and [`svelte`](#svelte)

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
  javascript: true,
  jsdoc: true
};
```

#### `recommended-prettier`

```js
const config = {
  javascript: true,
  jsdoc: true,
  prettier: true
};
```

#### `recommended-typescript`

```js
const config = {
  javascript: true,
  jsdoc: true,
  typescript: true
};
```

Note, Typescript **requires** extra dependencies:

```sh
npm install --save-dev eslint-import-resolver-typescript
```
