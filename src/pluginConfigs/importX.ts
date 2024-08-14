/**
 * @file The configuration for `eslint-plugin-import-x`.
 */
import {legacyCompatibility} from "../legacyCompatibility.js";
import type {FlatConfig, RequiredConfigOptions} from "../types.js";
import {isObject, objectKeys} from "../typeUtils.js";

const compat = new legacyCompatibility(import.meta.url);

/**
 * Generate an eslint config for import based on the generator's options.
 *
 * @param options The options of the config generator.
 * @returns A eslint config for import.
 */
export function getImportXConfigs(
  options: RequiredConfigOptions
): FlatConfig[] {
  const importTypescriptConfig: FlatConfig[] = options.typescript
    ? compat.extends("plugin:import-x/typescript").map((element) => {
        return removeTSParser(element);
      })
    : [];

  return [
    ...importTypescriptConfig,
    ...compat.extends("plugin:import-x/recommended"),
    {
      rules: {
        "import-x/first": "error",
        "import-x/newline-after-import": "error",
        "import-x/no-absolute-path": "error",
        "import-x/no-amd": "error",
        "import-x/no-cycle": "error",
        "import-x/no-deprecated": "error",
        "import-x/no-duplicates": [
          "error",
          {"considerQueryString": true, "prefer-inline": true}
        ],
        "import-x/no-empty-named-blocks": "error",
        "import-x/no-extraneous-dependencies": ["error", {includeTypes: true}],
        "import-x/no-import-module-exports": "error",
        "import-x/no-named-as-default": "error",
        "import-x/no-named-as-default-member": "off",
        "import-x/no-named-default": "error",
        "import-x/no-self-import": "error",
        "import-x/no-unresolved": [
          "error",
          {caseSensitiveStrict: true, commonjs: true}
        ],
        "import-x/no-useless-path-segments": [
          "error",
          {
            commonjs: true
          }
        ],
        "import-x/no-webpack-loader-syntax": "error",
        "import-x/unambiguous": options.typescript ? "off" : "error"
      },
      settings: {
        "import-x/resolver": {
          node: true,
          typescript: options.typescript
        }
      }
    }
  ];
}

/**
 * Remove the explicitly stated typescript parser from import's settings to allow eslint's instance to be used. Avoids incorrect imports.
 *
 * @param config The config to modify.
 * @returns The modified config.
 */
function removeTSParser(config: FlatConfig): FlatConfig {
  if (config.settings === undefined) return config;
  const oldSettings = config.settings["import-x/parsers"];

  if (!isObject(oldSettings)) return config;
  const settings: Record<objectKeys, unknown> = oldSettings;

  if (Object.hasOwn(settings, "@typescript-eslint/parser")) {
    settings["@typescript-eslint/parser"] = undefined;
  }

  return {...config, settings};
}
