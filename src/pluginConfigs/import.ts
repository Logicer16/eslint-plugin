/**
 * @file The configuration for `eslint-plugin-import`/`eslint-plugin-i`.
 */
import {ConfigOptions} from "../types.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {Linter} from "eslint";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Generate an eslint config for import based on the generator's options.
 * @param options The options of the config generator.
 * @returns A eslint config for import.
 */
export function getImportConfig(
  options: Required<ConfigOptions>
): Linter.FlatConfig[] {
  const importTypescriptConfig: Linter.FlatConfig[] = options.typescript
    ? compat.extends("plugin:import/typescript")
    : [];

  return [
    ...importTypescriptConfig,
    ...compat.extends("plugin:import/recommended"),
    {
      rules: {
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-amd": "error",
        "import/no-cycle": "error",
        "import/no-deprecated": "error",
        "import/no-duplicates": [
          "error",
          {"considerQueryString": true, "prefer-inline": true}
        ],
        "import/no-empty-named-blocks": "error",
        "import/no-extraneous-dependencies": ["error", {includeTypes: true}],
        "import/no-import-module-exports": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "off",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-unresolved": [
          "error",
          {caseSensitiveStrict: true, commonjs: true}
        ],
        "import/no-useless-path-segments": [
          "error",
          {
            commonjs: true
          }
        ],
        "import/no-webpack-loader-syntax": "error",
        "import/unambiguous": options.typescript ? "off" : "error"
      },
      settings: {
        "import/resolver": {
          node: true,
          typescript: options.typescript
        }
      }
    }
  ];
}
