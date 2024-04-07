/**
 * @file The configuration for `eslint-plugin-svelte`.
 */
import svelteParser from "svelte-eslint-parser";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import type {FlatConfig, RequiredConfigOptions} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

/**
 * Generate an eslint config for svelte based on the generator's options.
 *
 * @param options The options of the config generator.
 * @returns A eslint config for svelte.
 */
export function getSvelteConfigs(options: RequiredConfigOptions): FlatConfig[] {
  const sourceFileConfigs: FlatConfig[] =
    options.sourceFiles.length === 0
      ? []
      : [
          {
            files: options.sourceFiles,
            rules: {
              "import-x/no-unresolved": [
                "error",
                {
                  // Regex
                  ignore: [
                    "\\$app/environment",
                    "\\$app/forms",
                    "\\$app/navigation",
                    "\\$app/paths",
                    "\\$app/stores",
                    "\\$env/dynamic/private",
                    "\\$env/dynamic/public",
                    "\\$env/static/private",
                    "\\$env/static/public",
                    "\\$service-worker"
                  ]
                }
              ],
              "n/no-missing-import": "off",
              "n/prefer-global/process": ["error", "always"]
            }
          }
        ];

  return [
    ...compat.extends("plugin:svelte/recommended"),
    {
      rules: {
        "svelte/block-lang": [
          "error",
          {
            script: ["ts", "js"]
          }
        ],
        "svelte/button-has-type": "error",
        "svelte/comment-directive": [
          "error",
          {
            reportUnusedDisableDirectives: true
          }
        ],
        "svelte/derived-has-same-inputs-outputs": "error",
        "svelte/infinite-reactive-loop": "error",
        "svelte/no-at-html-tags": "error",
        "svelte/no-dom-manipulating": "error",
        "svelte/no-dupe-on-directives": "error",
        "svelte/no-dupe-use-directives": "error",
        "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
        "svelte/no-extra-reactive-curlies": "error",
        "svelte/no-ignored-unsubscribe": "error",
        "svelte/no-immutable-reactive-statements": "error",
        "svelte/no-reactive-functions": "error",
        "svelte/no-reactive-literals": "error",
        "svelte/no-reactive-reassign": "error",
        "svelte/no-store-async": "error",
        "svelte/no-target-blank": "error",
        "svelte/no-useless-mustaches": "error",
        "svelte/prefer-class-directive": "error",
        "svelte/prefer-destructured-store-props": "error",
        "svelte/prefer-style-directive": "error",
        "svelte/require-each-key": "error",
        "svelte/require-event-dispatcher-types": "error",
        "svelte/require-optimized-style-attribute": "error",
        "svelte/require-store-callbacks-use-set-param": "error",
        "svelte/require-store-reactive-access": "error",
        "svelte/sort-attributes": "error",
        "svelte/spaced-html-comment": "error",
        "svelte/valid-each-key": "error",
        "svelte/valid-prop-names-in-kit-pages": "error",

        // Doesn't work with tailwind.
        "svelte/no-unused-class-name": "off"
      }
    },
    {
      files: ["**/*.svelte"],
      languageOptions: {
        parser: svelteParser,
        parserOptions: options.typescript
          ? {
              extraFileExtensions: [".svelte"],
              parser: "@typescript-eslint/parser"
            }
          : undefined
      },
      rules: {
        "jsdoc/require-file-overview": "off",

        "import-x/no-mutable-exports": "off",
        "import-x/unambiguous": "off"
      }
    },
    ...sourceFileConfigs
  ];
}

export const sveltePrettierConfigs: FlatConfig[] = compat.extends(
  "plugin:svelte/prettier"
);
