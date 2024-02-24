/**
 * @file Generate an eslint config.
 */
import {
  type ConfigOptions,
  ESIncompatibleExtensionPatterns,
  FlatConfig,
  type RequiredConfigOptions
} from "./common.js";

const defaultOptions: RequiredConfigOptions = {
  ecmaVersion: "latest",
  eslintPlugin: false,
  javascript: true,
  jest: false,
  jsdoc: false,
  prettier: false,
  svelte: false,
  typescript: false
};

export default class ConfigGenerator {
  private readonly options: RequiredConfigOptions;

  constructor(options?: ConfigOptions) {
    this.options = {...defaultOptions, ...options};

    // Automatically enable javascript when typescript is enabled.
    this.options.javascript = this.options.javascript
      ? true
      : this.options.typescript;
  }

  private static addIgnoreExtensions<T extends FlatConfig>(
    config: T,
    ...extensions: (string[] | string)[]
  ): T {
    return {
      ...config,
      ignores: [
        ...extensions.flat().map((extension) => {
          return `**/*.${extension}`;
        }),
        ...(config.ignores ?? [])
      ]
    };
  }

  /**
   * Get the main config based on the provided options.
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
    )[] = [
      import("./pluginConfigs/esX.js").then((importedConfig) => {
        return importedConfig.getESXConfigs(this.options);
      })
    ];

    if (this.options.javascript) {
      configs.push(
        import("./pluginConfigs/javascript.js").then((importedConfig) => {
          return importedConfig.jsConfigs;
        }),
        import("./pluginConfigs/eslintComments.js").then((importedConfig) => {
          return importedConfig.eslintCommentsConfigs;
        }),
        import("./pluginConfigs/import.js").then((importedConfig) => {
          return importedConfig.getImportConfigs(this.options);
        }),
        import("./pluginConfigs/json.js").then((importedConfig) => {
          return importedConfig.jsonConfigs;
        }),
        import("./pluginConfigs/jsonSchema.js").then((importedConfig) => {
          return importedConfig.jsonSchemaConfigs;
        }),
        import("./pluginConfigs/node.js").then((importedConfig) => {
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
        import("./pluginConfigs/regexp.js").then((importedConfig) => {
          return importedConfig.regexpConfigs;
        }),
        import("./pluginConfigs/security.js").then((importedConfig) => {
          return importedConfig.securityConfigs;
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

      // Typescript automatically enables javascript.
      if (this.options.typescript) {
        configs.push(
          import("./pluginConfigs/typescript.js").then((importedConfig) => {
            return importedConfig.tsConfigs.map((config) => {
              return ConfigGenerator.addIgnoreExtensions(
                config,
                ...ESIncompatibleExtensionPatterns
              );
            });
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
            return importedConfig.deprecationConfigs.map((config) => {
              return ConfigGenerator.addIgnoreExtensions(
                config,
                ...ESIncompatibleExtensionPatterns
              );
            });
          })
        );
      }
    }

    configs.push(
      // Must follow `typescript-eslint`
      import("./pluginConfigs/unusedImports.js").then((importedConfig) => {
        return ConfigGenerator.addIgnoreExtensions(
          importedConfig.unusedImportsConfig,
          ...ESIncompatibleExtensionPatterns
        );
      }),
      // Must follow `eslint-plugin-n` and `eslint-plugin-unused-imports`.
      import("./pluginConfigs/markdown.js").then((importedConfig) => {
        return importedConfig.markdownConfigs;
      })
    );

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
          return importedConfig.getJSDocConfigs(this.options).map((config) => {
            return ConfigGenerator.addIgnoreExtensions(
              config,
              ...ESIncompatibleExtensionPatterns
            );
          });
        })
      );
    }

    if (this.options.svelte) {
      configs.push(
        // Must follow `eslint-plugin-jsdoc` and `eslint-plugin-import`
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
