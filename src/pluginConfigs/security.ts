/**
 * @file The configuration for `eslint-plugin-security`.
 */
import securityPlugin from "eslint-plugin-security";
import {FlatConfig} from "../common.js";

export const securityConfigs: FlatConfig[] = [
  securityPlugin.configs.recommended,
  {
    rules: {
      "security/detect-bidi-characters": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "error",
      "security/detect-disable-mustache-escape": "error",
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "error",
      "security/detect-no-csrf-before-method-override": "error",
      "security/detect-non-literal-fs-filename": "off",
      "security/detect-non-literal-regexp": "off",
      "security/detect-non-literal-require": "error",
      "security/detect-object-injection": "off",
      "security/detect-possible-timing-attacks": "error",
      "security/detect-pseudoRandomBytes": "error",
      "security/detect-unsafe-regex": "off"
    }
  }
];
