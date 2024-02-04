# Logicer's ESLint Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)](https://www.npmjs.com/package/@logicer/eslint-plugin)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)](https://github.com/Logicer16/eslint-plugin/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)](https://github.com/Logicer16/eslint-plugin/graphs/contributors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type%20coverage&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLogicer16%2Feslint-plugin%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)

Logicer's ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs. For use in flat config files.

Contents:

- [Install](#install)
- [Usage](#usage)
  - [Options](#options)
    - [`javascript`](#javascript)
    - [`typescript`](#typescript)
    - [`prettier`](#prettier)
    - [`jsdoc`](#jsdoc)
    - [`svelte`](#svelte)
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
  javascript: true, // or false
  jsdoc: true, // or false
  prettier: true, // or false
  svelte: true, // or false
  typescript: true // or false
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

Automatically configures:

- `"@eslint/js".configs.recommended`
- `"eslint-plugin-n".configs["flat/mixed-esm-and-cjs"]` and `"eslint-plugin-n"configs["flat/recommended"]` for all other files
- `"eslint-plugin-unicorn".configs["flat/recommended"]`
- `plugin:regexp/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:import/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))

#### `typescript`

Typescript requires extra dependencies:

```sh
npm install --save-dev eslint-import-resolver-typescript
```

Automatically enables [`javascript`](#javascript). Configures `@typescript-eslint/parser` and enables, in this order:

- `plugin:@typescript-eslint/strict-type-checked` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:@typescript-eslint/stylistic-type-checked` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:deprecation/recommended` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))
- `plugin:import/typescript` (via [`FlatCompat`](https://github.com/eslint/eslintrc#usage))

#### `prettier`

Automatically configures `plugin:prettier/recommended`

See also [`svelte`](#svelte)

#### `jsdoc`

Automatically configures `plugin:jsdoc/recommended-typescript-error` for TypeScript and `flat/recommended-typescript-flavor-error` for JavaScript.

#### `svelte`

Automatically configures `plugin:svelte/recommended`.
If [`prettier`](#prettier) is also set, it also configures `plugin:svelte/prettier`.

### Predefined Configs

This plugin comes with some predefined configurations, generated with the following options:

#### `recommended`

```js
{
  javascript: true,
  jsdoc: true
}
```

#### `recommended-prettier`

```js
{
  javascript: true,
  jsdoc: true,
  prettier: true
}
```

#### `recommended-typescript`

```js
{
  javascript: true,
  jsdoc: true,
  typescript: true
}
```

Note, Typescript requires extra dependencies:

```sh
npm install --save-dev eslint-import-resolver-typescript
```
