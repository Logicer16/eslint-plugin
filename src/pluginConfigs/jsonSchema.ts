/**
 * @file The configuration for `eslint-plugin-json-schema-validator`.
 */
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const jsonSchemaConfigs: FlatConfig[] = compat.extends(
  "plugin:json-schema-validator/recommended"
);
