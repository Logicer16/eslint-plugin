/**
 * @file Types and constants common throughout the plugin.
 */
import type {FlatConfig as ConfigNamespace} from "@typescript-eslint/utils/ts-eslint";
import {ESLint, Linter} from "eslint";
import {ArrayOrSolo} from "./typeUtils.js";

export type EcmaVersion = Exclude<
  ConfigNamespace.EcmaVersion | Linter.ParserOptions["ecmaVersion"],
  undefined
>;

type Plugin = ConfigNamespace.Plugin | ESLint.Plugin;
type PluginConfigs = Record<
  string,
  ArrayOrSolo<ESLint.ConfigData | FlatConfig>
>;
type ConfigedPlugin = {configs?: PluginConfigs} & Omit<Plugin, "configs">;

export type FlatConfig = {
  plugins?: Record<string, Omit<ConfigedPlugin, "configs">>;
} & Omit<ConfigNamespace.Config | Linter.Config, "plugins">;

export type RulesRecord = Exclude<
  Record<string, (ConfigNamespace.Rules | Linter.RulesRecord)[string]>,
  undefined
>;

export type FileSpec = Exclude<FlatConfig["ignores"], undefined>[number];

export type RuleEntry = Exclude<FlatConfig["rules"], undefined>[string];

export interface ConfigOptions {
  ecmaVersion?: EcmaVersion;
  eslintPlugin?: boolean;
  general?: boolean;
  jest?: boolean;
  jsdoc?: boolean;
  prettier?: boolean;
  sourceFiles?: (FileSpec | FileSpec[])[];
  svelte?: boolean;
  tailwind?: boolean;
  typescript?: boolean;
}

export type RequiredConfigOptions = Required<ConfigOptions>;

export type {ConfigedPlugin as Plugin};

export type Globals = ConfigNamespace.GlobalsConfig | Linter.Globals;

export type GlobalValue = Globals[string];

export {type FlatConfig as ConfigNamespace} from "@typescript-eslint/utils/ts-eslint";
