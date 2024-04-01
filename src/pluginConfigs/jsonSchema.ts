/**
 * @file The configuration for `eslint-plugin-json-schema-validator`.
 */
import jsonSchemaPlugin from "eslint-plugin-json-schema-validator";
import {FlatConfig} from "../types.js";

export const jsonSchemaConfigs: FlatConfig[] =
  jsonSchemaPlugin.configs["flat/recommended"];
