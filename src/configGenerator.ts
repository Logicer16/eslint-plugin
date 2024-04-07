/**
 * @file Generate an eslint config.
 */
import {ESIncompatibleExtensionPatterns} from "./const.js";
import type {
  ConfigOptions,
  FlatConfig,
  RequiredConfigOptions
} from "./types.js";

const defaultOptions: RequiredConfigOptions = {
  ecmaVersion: "latest",
  eslintPlugin: false,
  general: true,
  jest: false,
  jsdoc: false,
  prettier: false,
  sourceFiles: [],
  svelte: false,
  tailwind: false,
  typescript: false
};

/**
 * Process a config object ensuring all values are set by setting them to their default value if they are not already set.
 *
 * @param options The config object to process.
 * @returns A config object with all values set.
 */
export function processConfig(options?: ConfigOptions): RequiredConfigOptions {
  const processedOptions = {...defaultOptions, ...options};

  // Automatically enable general when typescript is enabled.
  processedOptions.general = processedOptions.general
    ? true
    : processedOptions.typescript;

  return processedOptions;
}

export default class ConfigGenerator {
  private readonly options: RequiredConfigOptions;

  constructor(options?: ConfigOptions) {
    this.options = processConfig(options);
  }

  private static ignoreExtensions<T extends FlatConfig>(
    configs: T[],
    ...extensions: (string[] | string)[]
  ): T[] {
    return configs.map((config) => {
      return {
        ...config,
        ignores: [
          ...extensions.flat().map((extension) => {
            return `**/*.${extension}`;
          }),
          ...(config.ignores ?? [])
        ]
      };
    });
  }

  /**
   * Get the main config based on the provided options.
   *
   * @returns A promise which resolves to the config.
   */
  public get config(): Promise<FlatConfig[]> {
    return this.getConfig();
  }

  private async getConfig(): Promise<FlatConfig[]> {
    const configs: (
      | FlatConfig
      | FlatConfig[]
      | Promise<FlatConfig | FlatConfig[]>
    )[] = [];

    if (this.options.general) {
      configs.push(
        import("./pluginConfigs/javascript.js").then((importedConfig) => {
          return importedConfig.jsConfigs;
        }),
        import("./pluginConfigs/css.js").then((importedConfig) => {
          return importedConfig.cssConfigs;
        }),
        import("./pluginConfigs/eslintComments.js").then((importedConfig) => {
          return importedConfig.eslintCommentsConfigs;
        }),
        // import("./pluginConfigs/html.js").then((importedConfig) => {
        //   return importedConfig.htmlConfig;
        // }),
        import("./pluginConfigs/importX.js").then((importedConfig) => {
          return importedConfig.getImportXConfigs(this.options);
        }),
        import("./pluginConfigs/json.js").then((importedConfig) => {
          return importedConfig.jsonConfigs;
        }),
        import("./pluginConfigs/jsonSchema.js").then((importedConfig) => {
          return importedConfig.jsonSchemaConfigs;
        }),
        import("./pluginConfigs/microsoftSDL.js").then((importedConfig) => {
          return importedConfig.microsoftSDLConfig;
        }),
        import("./pluginConfigs/n.js").then((importedConfig) => {
          return importedConfig.nodeConfigs;
        }),
        import("./pluginConfigs/noUseExtendNative.js").then(
          (importedConfig) => {
            return importedConfig.noUseExtendNativeConfigs;
          }
        ),
        import("./pluginConfigs/promise.js").then((importedConfig) => {
          return importedConfig.promiseConfigs;
        }),
        import("./pluginConfigs/perfectionist.js").then((importedConfig) => {
          return importedConfig.perfectionistConfigs;
        }),
        import("./pluginConfigs/regexp.js").then((importedConfig) => {
          return importedConfig.regexpConfigs;
        }),
        import("./pluginConfigs/security.js").then((importedConfig) => {
          return importedConfig.securityConfigs;
        }),
        import("./pluginConfigs/shopify.js").then((importedConfig) => {
          return importedConfig.shopifyConfig;
        }),
        import("./pluginConfigs/simpleImportSort.js").then((importedConfig) => {
          return importedConfig.simpleImportSortConfig;
        }),
        import("./pluginConfigs/toml.js").then((importedConfig) => {
          return importedConfig.tomlConfigs;
        }),
        import("./pluginConfigs/unicorn.js").then((importedConfig) => {
          return importedConfig.unicornConfigs;
        }),
        import("./pluginConfigs/yml.js").then((importedConfig) => {
          return importedConfig.ymlConfigs;
        })
      );

      // eslint-disable-next-line unicorn/no-array-push-push
      configs.push(
        // Must follow `eslint-plugin-import-x`
        import("./pluginConfigs/esX.js").then((importedConfig) => {
          return importedConfig.getESXConfigs(this.options);
        })
      );

      // Typescript automatically enables general for javascript.
      if (this.options.typescript) {
        configs.push(
          import("./pluginConfigs/typescript.js").then((importedConfig) => {
            return ConfigGenerator.ignoreExtensions(
              importedConfig.tsConfigs,
              ...ESIncompatibleExtensionPatterns
            );
          }),
          import("./pluginConfigs/arrayFunc.js").then((importedConfig) => {
            return importedConfig.arrayFuncConfig;
          }),
          import("./pluginConfigs/decoratorPosition.js").then(
            (importedConfig) => {
              return importedConfig.getDecoratorPositionConfig(this.options);
            }
          ),
          import("./pluginConfigs/deprecation.js").then((importedConfig) => {
            return ConfigGenerator.ignoreExtensions(
              importedConfig.deprecationConfigs,
              ...ESIncompatibleExtensionPatterns
            );
          }),
          import("./pluginConfigs/etc.js").then((importedConfig) => {
            return ConfigGenerator.ignoreExtensions(
              importedConfig.etcConfigs,
              ...ESIncompatibleExtensionPatterns
            );
          })
        );

        // eslint-disable-next-line unicorn/no-array-push-push
        configs.push(
          // Must follow `typescript-eslint`
          import("./pluginConfigs/unusedImports.js").then((importedConfig) => {
            return ConfigGenerator.ignoreExtensions(
              [importedConfig.unusedImportsConfig],
              ...ESIncompatibleExtensionPatterns
            );
          }),
          // Must follow `eslint-plugin-n` and `eslint-plugin-unused-imports`.
          import("./pluginConfigs/markdown.js").then((importedConfig) => {
            return importedConfig.markdownConfigs;
          })
        );
      }
    }

    if (this.options.eslintPlugin) {
      configs.push(
        import("./pluginConfigs/eslintPlugin.js").then((importedConfig) => {
          return importedConfig.eslintPluginConfigs;
        })
      );
    }

    if (this.options.jest) {
      configs.push(
        import("./pluginConfigs/jest.js").then((importedConfig) => {
          return importedConfig.jestConfigs;
        })
      );
    }

    if (this.options.jsdoc) {
      configs.push(
        import("./pluginConfigs/jsdoc.js").then((importedConfig) => {
          return ConfigGenerator.ignoreExtensions(
            importedConfig.getJSDocConfigs(this.options),
            ...ESIncompatibleExtensionPatterns
          );
        })
      );
    }

    if (this.options.tailwind) {
      configs.push(
        import("./pluginConfigs/tailwindcss.js").then((importedConfig) => {
          return importedConfig.tailwindcssConfigs;
        })
      );
    }

    if (this.options.svelte) {
      configs.push(
        // Must follow `eslint-plugin-jsdoc`, `eslint-plugin-n`, and `eslint-plugin-import`
        import("./pluginConfigs/svelte.js").then((importedConfig) => {
          return importedConfig.getSvelteConfigs(this.options);
        })
      );
    }

    return Promise.all(configs).then((resolvedConfigs) => {
      return resolvedConfigs.flat();
    });
  }

  public get endConfig(): Promise<FlatConfig[]> {
    return this.getEndConfig();
  }

  private async getEndConfig(): Promise<FlatConfig[]> {
    const configs: (
      | FlatConfig
      | FlatConfig[]
      | Promise<FlatConfig | FlatConfig[]>
    )[] = [];

    if (this.options.prettier) {
      const prettierConfig = await import("./pluginConfigs/prettier.js");
      configs.push(
        prettierConfig.prettierConfig,
        import("./pluginConfigs/json.js").then((importedConfig) => {
          return importedConfig.jsonPrettierConfigs;
        }),
        import("./pluginConfigs/yml.js").then((importedConfig) => {
          return importedConfig.ymlPrettierConfigs;
        })
      );
      if (this.options.svelte) {
        configs.push(
          import("./pluginConfigs/svelte.js").then((importedConfig) => {
            return importedConfig.sveltePrettierConfigs;
          })
        );
      }
      configs.push(
        prettierConfig.getCustomPrettierConfig(this.options),
        import("./pluginConfigs/javascript.js").then((importedConfig) => {
          return importedConfig.jsPrettierOverrides;
        })
      );
    }

    return Promise.all(configs).then((resolvedConfigs) => {
      return resolvedConfigs.flat();
    });
  }
}
