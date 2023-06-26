# Logicer's ESLint Base Configuration

![npm (scoped)](https://img.shields.io/npm/v/%40logicer/eslint-plugin)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Logicer16/eslint-plugin/style.yml)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Logicer16/ESLint-plugin)

Logicer's ESLint configuration as a plugin for use in other projects. Designed to be built upon for the project's specific needs.

`plugin:@logicer/recommended` automatically enables `eslint:recommended`.
In addition to the previous, for `plugin:@logicer/recommended-typescript` it also enables, in this order:

- `plugin:@typescript-eslint/eslint-recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@typescript-eslint/recommended-requiring-type-checking`
- `plugin:@typescript-eslint/strict`

A default prettier configuration is also provided in `plugin:@logicer/recommended-prettier`, which automatically enables `plugin:prettier/recommended`.

Contents:

- [Install](#install)
  - [TypeScript](#typescript)
  - [Prettier](#prettier)
- [Usage](#usage)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript-1)
  - [Prettier](#prettier-1)

## Install

```sh
npm install --save-dev eslint @logicer/eslint-plugin
```

For additional features:

### TypeScript

```sh
npm install --save-dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Prettier

```sh
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

## Usage

Add to you `.eslintrc.cjs` or similar:

### JavaScript

```
extends: ["plugin:@logicer/recommended", ...],
plugins: [..., "@logicer", ...]
```

### TypeScript

```
extends: ["plugin:@logicer/recommended-typescript", ...],
parser: "@typescript-eslint/parser",
parserOptions: {
  project: "./tsconfig.json"
},
plugins: [..., "@logicer", ...]
```

### Prettier

> **Note**
> Ensure `"plugin:@logicer/recommended-prettier"` is last in `extends`

> **Note**
> This package does not provide configuration for Prettier. You must still provide a .prettierrc

```
{
extends: [..., "plugin:@logicer/recommended-prettier"],
plugins: [..., "@logicer", ...]
}
```
