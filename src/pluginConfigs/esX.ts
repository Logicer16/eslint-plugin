/**
 * @file The configuration for `eslint-plugin-es-x`.
 */
import {Linter} from "eslint";
import {ConfigOptions} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

const latestEcmaVersion = 2023;
const ESNextVersion = latestEcmaVersion + 1;

type standardEcmaVersions =
  | 3
  | 5
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023
  | 2024;

/**
 * Check if the ecmascript version is in the standard range.
 * @param version The ecmascript version.
 * @returns True if the version is in the standard range.
 */
function ecmaVersionIsInStandardRange(
  version: Required<Linter.ParserOptions["ecmaVersion"]>
): version is standardEcmaVersions {
  return typeof version === "number" && version >= 6 && version <= 2014;
}

/**
 * Generate an eslint config for svelte based on the generator's options.
 * @param options The options of the config generator.
 * @returns A eslint config for svelte.
 */
export function getESXConfigs(
  options: Required<ConfigOptions>
): Linter.FlatConfig[] {
  let ecmaVersion: standardEcmaVersions | "next";
  if (
    typeof options.ecmaVersion === "number" &&
    !ecmaVersionIsInStandardRange(options.ecmaVersion)
  ) {
    ecmaVersion = options.ecmaVersion + 2014;
  } else if (
    options.ecmaVersion === "latest" ||
    options.ecmaVersion >= ESNextVersion
  ) {
    ecmaVersion = "next";
  } else {
    ecmaVersion = options.ecmaVersion;
  }

  const configs: Linter.FlatConfig[] = [
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
      ...compat.extends(`plugin:es-x/no-new-in-esnext`),
      ...compat.extends(`plugin:es-x/no-new-in-esnext-intl-api`)
    );
    if (ecmaVersion !== latestEcmaVersion) {
      configs.push(
        ...compat.extends(`plugin:es-x/restrict-to-es${ecmaVersion}`),
        ...(ecmaVersion < 2015
          ? compat.extends(`plugin:es-x/restrict-to-es-intl-api-1st-edition`)
          : compat.extends(`plugin:es-x/restrict-to-es${ecmaVersion}-intl-api`))
      );
    }
  }

  return configs;
}
