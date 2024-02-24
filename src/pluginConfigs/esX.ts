/**
 * @file The configuration for `eslint-plugin-es-x`.
 */
import {
  EcmaVersion,
  FlatConfig,
  IntRange,
  RequiredConfigOptions
} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

const latestEcmaVersion = 2023;
const ESNextVersion = latestEcmaVersion + 1;

const EcmaInvalidStart = 6;
const EcmaInvalidEnd = 2014;
const EcmaValidRestart = EcmaInvalidEnd + 1;

type standardEcmaVersions = Exclude<
  EcmaVersion,
  IntRange<typeof EcmaInvalidStart, typeof EcmaInvalidEnd> | "latest"
>;

/**
 * Check if the ecmascript version is in the standard range.
 * @param version The ecmascript version.
 * @returns True if the version is in the standard range.
 */
function ecmaVersionIsInStandardRange(
  version: Required<EcmaVersion>
): version is standardEcmaVersions {
  return (
    typeof version === "number" &&
    version >= EcmaInvalidStart &&
    version <= EcmaInvalidEnd
  );
}

/**
 * Generate an eslint config for svelte based on the generator's options.
 * @param options The options of the config generator.
 * @returns A eslint config for svelte.
 */
export function getESXConfigs(options: RequiredConfigOptions): FlatConfig[] {
  let ecmaVersion: standardEcmaVersions | "next";
  if (
    typeof options.ecmaVersion === "number" &&
    !ecmaVersionIsInStandardRange(options.ecmaVersion)
  ) {
    ecmaVersion = options.ecmaVersion + (EcmaValidRestart - EcmaInvalidStart);
  } else if (
    options.ecmaVersion === "latest" ||
    options.ecmaVersion >= ESNextVersion
  ) {
    ecmaVersion = "next";
  } else {
    ecmaVersion = options.ecmaVersion;
  }

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
      ...compat.extends(`plugin:es-x/no-new-in-esnext`),
      ...compat.extends(`plugin:es-x/no-new-in-esnext-intl-api`)
    );
    if (ecmaVersion !== latestEcmaVersion) {
      configs.push(
        ...compat.extends(`plugin:es-x/restrict-to-es${ecmaVersion}`),
        ...(ecmaVersion < EcmaValidRestart
          ? compat.extends(`plugin:es-x/restrict-to-es-intl-api-1st-edition`)
          : compat.extends(`plugin:es-x/restrict-to-es${ecmaVersion}-intl-api`))
      );
    }
  }

  return configs;
}
