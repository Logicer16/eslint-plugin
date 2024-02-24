/**
 * @file The configuration for `eslint-plugin-jsonc`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig, RulesRecord} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

const lyingFilesWithComments = [
  ".vscode/settings.json",
  ".vscode/tasks.json",
  ".vscode/launch.json",
  "tsconfig.json",
  "tsconfig.*.json"
];

const sharedRules: RulesRecord = {
  "jsonc/no-irregular-whitespace": [
    "error",
    {
      skipComments: false,
      skipRegExps: false,
      skipStrings: false,
      skipTemplates: false
    }
  ],
  "no-irregular-whitespace": "off"
};

/**
 * Add common properties to a config.
 * @param config The config to modify.
 * @param extension The extension of the targeted files.
 * @returns The updated config.
 */
function updateConfig(config: FlatConfig, extension: string): FlatConfig {
  config.rules = {...config.rules, ...sharedRules};

  config.files ??= [];
  config.files.push(`*${extension}`);
  if (extension === ".jsonc") {
    config.files.push(...lyingFilesWithComments);
  } else {
    config.ignores ??= [];
    config.ignores.push(...lyingFilesWithComments);
  }

  if (config.languageOptions === undefined) {
    config.languageOptions = {};
  }
  if (config.languageOptions.parserOptions === undefined) {
    config.languageOptions.parserOptions = {};
  }
  // eslint-disable-next-line @typescript-eslint/dot-notation
  config.languageOptions.parserOptions["extraFileExtensions"] = [
    extension,
    // eslint-disable-next-line @typescript-eslint/dot-notation
    config.languageOptions.parserOptions["extraFileExtensions"]
  ].flat();

  return config;
}

const jsonConfig = compat
  .extends("plugin:jsonc/recommended-with-json")
  .map((config) => {
    return updateConfig(config, ".json");
  });
const jsoncConfig = compat
  .extends("plugin:jsonc/recommended-with-jsonc")
  .map((config) => {
    return updateConfig(config, ".jsonc");
  });
const json5Config = compat
  .extends("plugin:jsonc/recommended-with-json5")
  .map((config) => {
    return updateConfig(config, ".json5");
  });

export const jsonConfigs: FlatConfig[] = [
  ...jsonConfig,
  ...jsoncConfig,
  ...json5Config
];

export const jsonPrettierConfigs: FlatConfig[] = compat.extends(
  "plugin:jsonc/prettier"
);
