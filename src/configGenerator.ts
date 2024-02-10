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
        import("./pluginConfigs/import.js").then((importedConfig) => {
          return importedConfig.getImportConfig(this.options);
        }),
        import("./pluginConfigs/security.js").then((importedConfig) => {
          return importedConfig.securityConfig;
        }),
        import("./pluginConfigs/promise.js").then((importedConfig) => {
          return importedConfig.promiseConfig;
        })
      );
      // Typescript automatically enables javascript.
      if (this.options.typescript) {
        configs.push(
          import("./pluginConfigs/typescript.js").then((importedConfig) => {
            return importedConfig.tsConfig;
          }),
          import("./pluginConfigs/deprecation.js").then((importedConfig) => {
            return importedConfig.deprecationConfig;
          })
        );
      }
    }

    if (this.options.jsdoc) {
      configs.push(
        import("./pluginConfigs/jsdoc.js").then((importedConfig) => {
          return importedConfig.getJSDocConfig(this.options);
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
