/**
 * @file The configuration for `eslint-plugin-json-schema-validator`.
 */
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";
import {FlatConfig} from "../types.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const jsonSchemaConfigs: FlatConfig[] = compat.extends(
  "plugin:json-schema-validator/recommended"
);
