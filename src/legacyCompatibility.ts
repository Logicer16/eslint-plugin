/**
 * @file Compatibility with the legacy config format.
 */
import path from "node:path";
import {fileURLToPath} from "node:url";
import {
  type FixupConfig,
  fixupConfigRules,
  type FixupPluginDefinition,
  fixupPluginRules
} from "@eslint/compat";
import {FlatCompat} from "@eslint/eslintrc";
import {FlatConfig, Plugin} from "./types.js";
import {ArrayOrSolo, isArrayOfType} from "./typeUtils.js";

type V8FlatConfig = ReturnType<FlatCompat["extends"]>[number];

/**
 * Get the legacy config format compatibility instance for a module's path.
 *
 * @param importMetaURL The module path returned by `import.meta.url`.
 * @returns A `FlatCompat` instance.
 */
export class legacyCompatibility {
  private flatCompat: FlatCompat;

  constructor(importMetaURL: string) {
    const __filename = fileURLToPath(importMetaURL);
    const __dirname = path.dirname(__filename);

    this.flatCompat = new FlatCompat({
      baseDirectory: __dirname
    });
  }

  public extends(...configsToExtend: string[]): FlatConfig[] {
    const configs = this.flatCompat.extends(...configsToExtend);

    if (
      !isArrayOfType(configs, (config): config is FlatConfig & V8FlatConfig => {
        return legacyCompatibility.isV9FlatConfig(config);
      })
    ) {
      throw new Error(
        "One or more flat config objects has members not supported by eslint v9."
      );
    }

    return configs.flatMap((config) => {
      return legacyCompatibility.v8Config(config);
    });
  }

  public static v8Config<T extends FixupConfig | FlatConfig>(
    config: ArrayOrSolo<T>
  ): T[] {
    // type-coverage:ignore-next-line Use custom, more compatible types. Config should be identical in shape; only addition should be necessary wrappers.
    return fixupConfigRules(config as FixupConfig) as T[];
  }

  public static v8Plugin<T extends FixupPluginDefinition | Plugin>(
    plugin: T
  ): T {
    // type-coverage:ignore-next-line Use custom, more compatible types. Plugin should be identical in shape; only addition should be necessary wrappers.
    return fixupPluginRules(plugin as FixupPluginDefinition) as T;
  }

  /**
   * Check if the config is a valid eslint v9 flat config.
   *
   * Required due to outdated types for `@types/eslint__eslintrc`.
   *
   * @param config The config which should be checked.
   * @returns True if the config is a valid eslint v9 flat config. Otherwise, returns false.
   */
  private static isV9FlatConfig(
    config: FlatConfig | V8FlatConfig
  ): config is FlatConfig {
    const {files, ignores} = config;
    if (!this.isV9FileSpec(files)) {
      return false;
    }
    if (!this.isV9FileSpec(ignores)) {
      return false;
    }
    // Test type safety.
    // eslint-disable-next-line unused-imports/no-unused-vars
    const _: FlatConfig = {...config, files, ignores};
    return true;
  }

  private static isV9FileSpec(
    fileSpec: V8FlatConfig["files"]
  ): fileSpec is FlatConfig["files"] {
    return (
      fileSpec === undefined ||
      isArrayOfType(fileSpec, (file): file is string | string[] => {
        return (
          typeof file === "string" ||
          (Array.isArray(file) &&
            isArrayOfType(file, (file): file is string => {
              return typeof file === "string";
            }))
        );
      })
    );
  }
}
