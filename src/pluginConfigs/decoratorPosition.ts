/**
 * @file The configuration for `eslint-plugin-decorator-position`.
 */
import {prettierConfigGenerator} from "@logicer/prettier-config";
import decoratorPosition from "eslint-plugin-decorator-position";
import {FlatConfig, RequiredConfigOptions} from "../types.js";

/**
 * Generate an eslint config for decoratorPosition based on the generator's options. Depends on `@typescript-eslint/parser`.
 * @param options The options of the config generator.
 * @returns A eslint config for decoratorPosition.
 */
export function getDecoratorPositionConfig(
  options: RequiredConfigOptions
): FlatConfig {
  return {
    plugins: {"decorator-position": decoratorPosition},
    rules: {
      "decorator-position/decorator-position": [
        "error",
        {
          printWidth:
            prettierConfigGenerator(options).printWidth ??
            80 /* prettier's default */
        }
      ]
    }
  };
}
