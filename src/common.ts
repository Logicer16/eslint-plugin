/**
 * @file Types and constants common throughout the plugin.
 */
import type {FlatConfig as ConfigNamespace} from "@typescript-eslint/utils/ts-eslint";
import {ESLint, Linter} from "eslint";
import type {Add, LtOrEq, Subtract} from "ts-arithmetic";

type Enumerate<
  End extends number,
  Start extends number = 0,
  Accumulator extends number[] = []
> =
  Accumulator["length"] extends Subtract<End, Start>
    ? Accumulator
    : Enumerate<
        End,
        Start,
        [...Accumulator, Add<Accumulator["length"], Start>]
      >;

type BigEnumerate<
  End extends number,
  Start extends number = 0,
  Fallback = number,
  // This is due to typescript limitations (cumulative type instantiation).
  DepthRemaining extends number = 112,
  Accumulator extends number[] = [],
  ExpectedLength extends number = Subtract<End, Start>
> = Accumulator["length"] extends ExpectedLength
  ? Accumulator[number]
  : LtOrEq<DepthRemaining, 0> extends 1
    ? Fallback
    : BigEnumerate<
        End,
        Add<Start, DepthRemaining>,
        Fallback,
        Subtract<DepthRemaining, 1>,
        // @ts-expect-error: TS2321 Flawed typechecking due to recursion causes false positive citing uncertainty.
        [
          ...Accumulator,
          ...Enumerate<
            LtOrEq<Subtract<End, Start>, DepthRemaining> extends 1
              ? End
              : Add<Start, DepthRemaining>,
            Start
          >
        ],
        ExpectedLength
      >;

/**
 * The maximum number of union items is 6328 due to typescript limitations (cumulative type instantiation).
 */
export type IntRange<
  Start extends number,
  End extends number,
  Fallback = number
> = BigEnumerate<End, Start, Fallback>;

export type EcmaVersion =
  | ConfigNamespace.EcmaVersion
  | Exclude<Linter.ParserOptions["ecmaVersion"], undefined>;

type Plugin = ConfigNamespace.Plugin | ESLint.Plugin;
type PluginConfigs = Record<string, (ESLint.ConfigData | FlatConfig)[]>;
type ConfigedPlugin = Omit<Plugin, "configs"> & {configs?: PluginConfigs};

export type FlatConfig = Omit<
  ConfigNamespace.Config | Linter.FlatConfig,
  "plugins"
> & {plugins?: Record<string, Omit<ConfigedPlugin, "configs">>};

export type RulesRecord = Exclude<
  Record<string, (ConfigNamespace.Rules | Linter.RulesRecord)[string]>,
  undefined
>;

export interface ConfigOptions {
  ecmaVersion?: EcmaVersion;
  eslintPlugin?: boolean;
  javascript?: boolean;
  jest?: boolean;
  jsdoc?: boolean;
  prettier?: boolean;
  svelte?: boolean;
  typescript?: boolean;
}

export const ESIncompatibleExtensionPatterns = [
  "json",
  "jsonc",
  "json5",
  "md",
  "md/**/*.js",
  "toml",
  "yml"
];

export type {ConfigedPlugin as Plugin};
export type GlobalValue =
  | ConfigNamespace.GlobalsConfig[string]
  | ESLint.Globals[string];

export {type FlatConfig as ConfigNamespace} from "@typescript-eslint/utils/ts-eslint";
