/**
 * @file Generate an eslint config.
 */
import type {ConfigOptions} from "./types.js";
import {Linter} from "eslint";

const defaultOptions: Required<ConfigOptions> = {
  javascript: true,
  jsdoc: false,
  prettier: false,
  svelte: false,
  typescript: false
};

export default class ConfigGenerator {
  private readonly options: Required<ConfigOptions>;

  private readonly ESIncompatible = [
    "json",
    "jsonc",
    "json5",
    "yml",
    "toml",
    "md",
    "md/**/*.js"
  ];

  constructor(options?: ConfigOptions) {
    this.options = {...defaultOptions, ...options};
    // Automatically enable javascript when typescript is enabled.
    this.options.javascript = this.options.javascript
      ? true
      : this.options.typescript;
  }

  private static addIgnoreExtensions(
    config: Linter.FlatConfig,
    extensions: string[]
  ): Linter.FlatConfig {
    return {
      ...config,
      ignores: [
        ...extensions.map((extension) => {
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
  public get config(): Promise<Linter.FlatConfig[]> {
    return this.getConfig();
  }

  private async getConfig(): Promise<Linter.FlatConfig[]> {
    const configs: (
      | Linter.FlatConfig
      | Linter.FlatConfig[]
      | Promise<Linter.FlatConfig | Linter.FlatConfig[]>
    )[] = [];

    if (this.options.javascript) {
      configs.push(
        import("./pluginConfigs/javascript.js").then((importedConfig) => {
          return importedConfig.jsConfigs;
        }),
        import("./pluginConfigs/node.js").then((importedConfig) => {
          return importedConfig.nodeConfigs;
        }),
        import("./pluginConfigs/unicorn.js").then((importedConfig) => {
          return importedConfig.unicornConfigs;
        }),
        import("./pluginConfigs/regexp.js").then((importedConfig) => {
          return importedConfig.regexpConfigs;
        }),
        import("./pluginConfigs/import.js").then((importedConfig) => {
          return importedConfig.getImportConfigs(this.options);
        }),
        import("./pluginConfigs/security.js").then((importedConfig) => {
          return importedConfig.securityConfigs;
        }),
        import("./pluginConfigs/promise.js").then((importedConfig) => {
          return importedConfig.promiseConfigs;
        }),
        import("./pluginConfigs/markdown.js").then((importedConfig) => {
          return importedConfig.markdownConfigs;
        }),
        import("./pluginConfigs/json.js").then((importedConfig) => {
          return importedConfig.jsonConfigs;
        }),
        import("./pluginConfigs/yml.js").then((importedConfig) => {
          return importedConfig.ymlConfigs;
        }),
        import("./pluginConfigs/toml.js").then((importedConfig) => {
          return importedConfig.tomlConfigs;
        }),
        import("./pluginConfigs/jsonSchema.js").then((importedConfig) => {
          return importedConfig.jsonSchemaConfigs;
        })
      );
      // Typescript automatically enables javascript.
      if (this.options.typescript) {
        configs.push(
          import("./pluginConfigs/typescript.js").then((importedConfig) => {
            return importedConfig.tsConfigs.map((config) => {
              return ConfigGenerator.addIgnoreExtensions(
                config,
                this.ESIncompatible
              );
            });
          }),
          import("./pluginConfigs/deprecation.js").then((importedConfig) => {
            return importedConfig.deprecationConfigs.map((config) => {
              return ConfigGenerator.addIgnoreExtensions(
                config,
                this.ESIncompatible
              );
            });
          })
        );
      }
    }

    if (this.options.jsdoc) {
      configs.push(
        import("./pluginConfigs/jsdoc.js").then((importedConfig) => {
          return importedConfig.getJSDocConfigs(this.options).map((config) => {
            return ConfigGenerator.addIgnoreExtensions(
              config,
              this.ESIncompatible
            );
          });
        })
      );
    }

    if (this.options.svelte) {
      configs.push(
        import("./pluginConfigs/svelte.js").then((importedConfig) => {
          return importedConfig.getSvelteConfigs(this.options);
        })
      );
    }

    return Promise.all(configs).then((resolvedConfigs) => {
      return resolvedConfigs.flat();
    });
  }

  public get endConfig(): Promise<Linter.FlatConfig[]> {
    return this.getEndConfig();
  }

  private async getEndConfig(): Promise<Linter.FlatConfig[]> {
    const configs: (
      | Linter.FlatConfig
      | Linter.FlatConfig[]
      | Promise<Linter.FlatConfig | Linter.FlatConfig[]>
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
        prettierConfig.prettierConfigCustom,
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
