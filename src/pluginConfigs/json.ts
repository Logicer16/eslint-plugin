/**
 * @file The configuration for `eslint-plugin-jsonc`.
 */
import jsonPlugin from "eslint-plugin-jsonc";
import {FlatConfig, RulesRecord} from "../types.js";

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
 *
 * @param config The config to modify.
 * @param extension The extension of the targeted files.
 * @returns The updated config.
 */
function updateConfig(config: FlatConfig, extension: string): FlatConfig {
  config.rules = {...config.rules, ...sharedRules};

  config.files ??= [];
  config.files.push(`**/*${extension}`);
  if (extension === ".jsonc") {
    config.files.push(...lyingFilesWithComments);
  } else {
    config.ignores ??= [];
    config.ignores.push(...lyingFilesWithComments);
  }

  return config;
}

const jsonBaseConfig = jsonPlugin.configs["flat/base"].map((config) => {
  return {...config};
});
const jsonConfig = jsonPlugin.configs["flat/recommended-with-json"].map(
  (config) => {
    return updateConfig(config, ".json");
  }
);
const jsoncConfig = jsonPlugin.configs["flat/recommended-with-jsonc"].map(
  (config) => {
    return updateConfig(config, ".jsonc");
  }
);
const json5Config = jsonPlugin.configs["flat/recommended-with-json5"].map(
  (config) => {
    return updateConfig(config, ".json5");
  }
);

export const jsonConfigs: FlatConfig[] = [
  ...jsonBaseConfig,
  ...jsonConfig,
  ...jsoncConfig,
  ...json5Config
];

export const jsonPrettierConfigs: FlatConfig[] =
  jsonPlugin.configs["flat/prettier"];
