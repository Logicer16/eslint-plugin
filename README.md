# Logicer's ESLint Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)](https://www.npmjs.com/package/@logicer/eslint-plugin)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)](https://github.com/Logicer16/eslint-plugin/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)](https://github.com/Logicer16/eslint-plugin/graphs/contributors)

Logicer's ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs.

Contents:

- [Install](#install)
- [Configs](#configs)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [Prettier](#prettier)
  - [JSDoc](#jsdoc)
  - [Deprecation](#deprecation)

## Install

```sh
npm install --save-dev eslint @logicer/eslint-plugin
```

## Configs

### JavaScript

Automatically configures `eslint:recommended`.

#### Usage

`.eslintrc.cjs`:

```
extends: ["plugin:@logicer/recommended", ...],
plugins: [..., "@logicer", ...]
```

### TypeScript

Extends upon `plugin:@logicer/recommended`, configuring, in this order:

- `plugin:@typescript-eslint/eslint-recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@typescript-eslint/recommended-requiring-type-checking`
- `plugin:@typescript-eslint/strict`

#### Install

```sh
npm install --save-dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### Usage

`.eslintrc.cjs`:

```
extends: ["plugin:@logicer/recommended-typescript", ...],
parser: "@typescript-eslint/parser",
parserOptions: {
  project: "./tsconfig.json"
},
plugins: [..., "@logicer", ...]
```

### Prettier

Automatically configures `plugin:prettier/recommended` with a default prettier configuration.

> **Note**
> Ensure `"plugin:@logicer/recommended-prettier"` is last in `extends`

#### Install

```sh
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

#### Usage

`.eslintrc.cjs`:

```
{
extends: [..., "plugin:@logicer/recommended-prettier"],
plugins: [..., "@logicer", ...]
}
```

### JSDoc

Automatically configures `plugin:jsdoc/recommended-typescript-error`.

#### Install

```sh
npm install --save-dev eslint-plugin-jsdoc
```

#### Usage

`.eslintrc.cjs`:

```
extends: [..., "plugin:@logicer/recommended-jsdoc", ...],
plugins: [..., "@logicer", ...]
```

### Deprecation

Automatically enables `plugin:deprecation/recommended` and configures `@typescript-eslint/parser` as the parser.

#### Install

Depends on the typescript ESLint parser.

```sh
npm install --save-dev typescript @typescript-eslint/parser
npm install --save-dev eslint-plugin-deprecation
```

#### Usage

`.eslintrc.cjs`:

```
extends: [..., "plugin:@logicer/deprecation", ...],
plugins: [..., "@logicer", ...]
```
