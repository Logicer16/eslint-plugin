/**
 * @file Generate an eslint config.
 */
import {Linter} from "eslint";

export interface ConfigOptions {
  javascript?: boolean;
  typescript?: boolean;
  prettier?: boolean;
  jsdoc?: boolean;
  svelte?: boolean;
}

const defaultOptions: Required<ConfigOptions> = {
  javascript: true,
  jsdoc: false,
  prettier: false,
  svelte: false,
  typescript: false
};

export default class configGenerator {
  private readonly options: Required<ConfigOptions>;

  constructor(options?: ConfigOptions) {
    this.options = {...defaultOptions, ...options};
    // Automatically enable javascript when typescript is enabled.
    this.options.javascript = this.options.javascript
      ? true
      : this.options.typescript;
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
      const importImport = await import("./pluginConfigs/import.js");

      configs.push(
        import("./pluginConfigs/javascript.js").then((importedConfig) => {
          return importedConfig.jsConfig;
        }),
        import("./pluginConfigs/node.js").then((importedConfig) => {
          return importedConfig.nodeConfig;
        }),
        import("./pluginConfigs/unicorn.js").then((importedConfig) => {
          return importedConfig.unicornConfig;
        }),
        import("./pluginConfigs/regexp.js").then((importedConfig) => {
          return importedConfig.regexpConfig;
        }),
        importImport.importConfig
      );
      // Typescript automatically enables javascript.
      if (this.options.typescript) {
        configs.push(
          import("./pluginConfigs/typescript.js").then((importedConfig) => {
            return importedConfig.tsConfig;
          }),
          import("./pluginConfigs/deprecation.js").then((importedConfig) => {
            return importedConfig.deprecationConfig;
          }),
          importImport.importTypescriptConfig
        );
      }
    }

    if (this.options.jsdoc) {
      configs.push(
        import("./pluginConfigs/jsdoc.js").then((importedConfig) => {
          const jsdocConfigs = [importedConfig.jsdocJsConfig];
          if (this.options.typescript)
            jsdocConfigs.push({
              ignores: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
              ...importedConfig.jsdocTsConfig
            });
          return jsdocConfigs;
        })
      );
    }

    if (this.options.svelte) {
      configs.push(
        import("./pluginConfigs/svelte.js").then((importedConfig) => {
          return importedConfig.getSvelteConfig(this.options);
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
      configs.push(prettierConfig.prettierConfig);
      if (this.options.svelte) {
        configs.push(
          import("./pluginConfigs/svelte.js").then((importedConfig) => {
            return importedConfig.sveltePrettierConfig;
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
