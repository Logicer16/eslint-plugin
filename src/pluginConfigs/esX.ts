/**
 * @file The configuration for `eslint-plugin-es-x`.
 */
import type {Add, IntRange, UnionMax} from "@logicer/util-types";
import esXPlugin from "eslint-plugin-es-x";
import {EcmaVersion, FlatConfig, RequiredConfigOptions} from "../types.js";

const latestEcmaVersion = 2024;
// Bad typescript inference
// type-coverage:ignore-next-line
const ESNextVersion: NextEcmaVersion = (latestEcmaVersion + 1) as Add<
  typeof latestEcmaVersion,
  1
>;

// Inclusive
const EcmaInvalidStart = 6;
// Exclusive / restart valid versions
const EcmaInvalidEnd = 2015;

type StandardEcmaVersion = Exclude<
  EcmaVersion,
  "latest" | IntRange<typeof EcmaInvalidStart, typeof EcmaInvalidEnd>
>;

type NextEcmaVersion = UnionMax<EcmaYearVersion, 2015>;
type LatestEcmaVersion = IntRange<
  typeof latestEcmaVersion,
  Add<NextEcmaVersion, 1>
>;

type EcmaYearVersion = Exclude<
  StandardEcmaVersion,
  IntRange<0, typeof EcmaInvalidStart>
>;
type OldEcmaVersion = Exclude<StandardEcmaVersion, LatestEcmaVersion>;

type ConfigKeys =
  | "flat/restrict-to-es-intl-api-1st-edition"
  | `flat/restrict-to-es${EcmaYearVersion & OldEcmaVersion}-intl-api`
  | `flat/restrict-to-es${OldEcmaVersion}`;

/**
 * Check if the ecmascript version is outside the standard range.
 *
 * @param ecmaVersion The ecmascript version to check.
 * @returns True if the version is outside the standard range.
 */
function ecmaVersionIsOutsideStandardRange(
  ecmaVersion: Required<EcmaVersion>
): ecmaVersion is Exclude<EcmaVersion, StandardEcmaVersion | string> {
  return (
    typeof ecmaVersion === "number" &&
    ecmaVersion >= EcmaInvalidStart &&
    ecmaVersion < EcmaInvalidEnd
  );
}

/**
 * Check if the ecmascript version is older than the latest ecmascript version.
 *
 * @param ecmaVersion The ecmascript version to check.
 * @returns True if the version is an old ecmascript version.
 */
function isOldEcmaVersion(
  ecmaVersion: StandardEcmaVersion
): ecmaVersion is OldEcmaVersion {
  return ecmaVersion < latestEcmaVersion;
}

/**
 * Check if the ecmascript version is of the new version style corresponding with the year it was published.
 *
 * @param ecmaVersion The ecmascript version to check.
 * @returns True if the version is of the new version style.
 */
function isEcmaYearVersion(
  ecmaVersion: StandardEcmaVersion
): ecmaVersion is EcmaYearVersion {
  return ecmaVersion < EcmaInvalidStart;
}

/**
 * Process eslint's ecmascript versions into a version which matches those used by the plugin.
 *
 * @param options The configuration options passed to the generator.
 * @returns A version which matches those used by the plugin.
 */
function normaliseEcmaVersion(
  options: RequiredConfigOptions
): "next" | StandardEcmaVersion {
  let ecmaVersion: "next" | StandardEcmaVersion;
  if (
    typeof options.ecmaVersion === "number" &&
    ecmaVersionIsOutsideStandardRange(options.ecmaVersion)
  ) {
    // Bad typescript inference
    // type-coverage:ignore-next-line
    ecmaVersion = (options.ecmaVersion +
      (EcmaInvalidEnd - EcmaInvalidStart)) as StandardEcmaVersion;
  } else if (
    options.ecmaVersion === "latest" ||
    options.ecmaVersion >= ESNextVersion
  ) {
    ecmaVersion = "next";
  } else {
    ecmaVersion = options.ecmaVersion;
  }
  return ecmaVersion;
}

/**
 * Generate an eslint config for svelte based on the generator's options.
 *
 * @param options The options of the config generator.
 * @returns A eslint config for svelte.
 */
export function getESXConfigs(options: RequiredConfigOptions): FlatConfig[] {
  const ecmaVersion: "next" | StandardEcmaVersion =
    normaliseEcmaVersion(options);

  const configs: FlatConfig[] = [
    {
      languageOptions: {
        ecmaVersion: options.ecmaVersion,
        parserOptions: {
          ecmaVersion: options.ecmaVersion
        }
      }
    }
  ];

  if (typeof ecmaVersion === "number" && ecmaVersion <= latestEcmaVersion) {
    configs.push(
      esXPlugin.configs["flat/no-new-in-esnext"],
      esXPlugin.configs["flat/no-new-in-esnext-intl-api"]
    );
    if (isOldEcmaVersion(ecmaVersion)) {
      const pluginConfigs: Record<ConfigKeys, FlatConfig> = esXPlugin.configs;
      const esRestriction = pluginConfigs[`flat/restrict-to-es${ecmaVersion}`];
      const esRestrictionIntl = isEcmaYearVersion(ecmaVersion)
        ? pluginConfigs[`flat/restrict-to-es${ecmaVersion}-intl-api`]
        : pluginConfigs["flat/restrict-to-es-intl-api-1st-edition"];
      configs.push(esRestriction, esRestrictionIntl);
    }
  }

  return configs;
}
