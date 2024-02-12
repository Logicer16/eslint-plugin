/**
 * @file The configuration for `eslint-plugin-json-schema-validator`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {Linter} from "eslint";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const jsonSchemaConfigs: Linter.FlatConfig[] = compat.extends(
  "plugin:json-schema-validator/recommended"
);
