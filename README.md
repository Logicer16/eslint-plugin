# Logicer's ESLint Base Configuration

[![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)](https://www.npmjs.com/package/@logicer/eslint-plugin)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)](https://github.com/Logicer16/eslint-plugin/actions)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)](https://github.com/Logicer16/eslint-plugin/graphs/contributors)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type%20coverage&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLogicer16%2Feslint-plugin%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)

Logicer's ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs.

Contents:

- [Install](#install)
- [Configs](#configs)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [Prettier](#prettier)
  - [JSDoc](#jsdoc)
- [Versioning Policy](#versioning-policy)

## Install

```sh
npm install --save-dev eslint @logicer/eslint-plugin
```

## Configs

### JavaScript

Automatically configures:
- `eslint:recommended`
- `plugin:n/recommended`
- `plugin:unicorn/recommended`
- `plugin:regexp/recommended`
- `plugin:import/recommended`.

#### Install

```sh
npm install --save-dev eslint-plugin-n eslint-plugin-unicorn eslint-plugin-regex eslint-plugin-import@npm:eslint-plugin-i@latest eslint-import-resolver-typescript
```

#### Usage

`.eslintrc.cjs`:

```
extends: ["plugin:@logicer/recommended", ...],
plugins: [..., "@logicer", ...]
```

### TypeScript

Extends upon `plugin:@logicer/recommended`, configuring `@typescript-eslint/parser` and enabling, in this order:

- `plugin:@typescript-eslint/eslint-recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@typescript-eslint/recommended-requiring-type-checking`
- `plugin:@typescript-eslint/strict`
- `plugin:deprecation/recommended`
- `plugin:import/typescript`

#### Install

```sh
npm install --save-dev eslint-plugin-n eslint-plugin-unicorn eslint-plugin-regex eslint-plugin-import@npm:eslint-plugin-i@latest eslint-import-resolver-typescript typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
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
extends: [..., "plugin:@logicer/recommended-prettier"],
plugins: [..., "@logicer", ...]
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

## Versioning Policy

A breaking change does not encompass one which "**refines**" the linter, such as the addition or reconfiguration of a rule. Other changes such as renaming or restricting configurations, which will prevent a linter from running due to being unable to parse the config file, continue to be classified as breaking. In all other cases, semver is followed.

