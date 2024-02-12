/**
 * @file The configuration for `eslint-plugin-jsdoc`.
 */
import {ConfigOptions} from "../types.js";
import jsdoc from "eslint-plugin-jsdoc";
import {Linter} from "eslint";

/**
 * Generate an eslint config for jsdoc based on the generator's options.
 * @param options The options of the config generator.
 * @returns A eslint config for jsdoc.
 */
export function getJSDocConfigs(
  options: Required<ConfigOptions>
): Linter.FlatConfig[] {
  return [
    jsdoc.configs["flat/recommended-typescript-flavor-error"],
    {
      ...(options.typescript
        ? {
            ignores: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
            ...jsdoc.configs["flat/recommended-typescript-error"]
          }
        : undefined)
    },
    {
      rules: {
        "jsdoc/check-indentation": "error",
        "jsdoc/check-line-alignment": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/informative-docs": "error",
        "jsdoc/match-description": "error",
        "jsdoc/no-bad-blocks": "error",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-undefined-types": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        "jsdoc/require-file-overview": "error",
        "jsdoc/require-hyphen-before-param-description": ["error", "never"],
        "jsdoc/require-returns": ["error", {enableFixer: true}],
        "jsdoc/require-throws": "error",
        "jsdoc/sort-tags": "error"
      }
    }
  ];
}
