/**
 * @file The configuration for `eslint-plugin-json-schema-validator`.
 */
import {Linter} from "eslint";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

export const jsonSchemaConfigs: Linter.FlatConfig[] = compat.extends(
  "plugin:json-schema-validator/recommended"
);
