/**
 * @file The configuration for `@html-eslint/eslint-plugin`.
 */
import htmlPlugin from "@html-eslint/eslint-plugin";
import {FlatConfig, RulesRecord} from "../types.js";

const htmlRules: RulesRecord =
  {
      "@html-eslint/no-abstract-roles": "error",
      "@html-eslint/no-accesskey-attrs": "error",
      "@html-eslint/no-aria-hidden-body": "error",
      "@html-eslint/no-inline-styles": "error",
      "@html-eslint/no-non-scalable-viewport": "error",
      "@html-eslint/no-positive-tabindex": "error",
      "@html-eslint/no-script-style-type": "error",
      "@html-eslint/no-skip-heading-levels": "error",
      "@html-eslint/no-target-blank": "error",
      "@html-eslint/require-attrs": "error",
      "@html-eslint/require-button-type": "error",
      "@html-eslint/require-closing-tags": [
        "error",
        {allowSelfClosingCustom: true, selfClosing: "always"}
      ],
      "@html-eslint/require-frame-title": "error",
      "@html-eslint/require-img-alt": "error",
      "@html-eslint/require-meta-charset": "error",
      "@html-eslint/require-meta-viewport": "error",

      "@html-eslint/element-newline": "error",
      "@html-eslint/id-naming-convention": ["error", "camelCase"],
      "@html-eslint/indent": "off",
      "@html-eslint/lowercase": "error",
      "@html-eslint/no-extra-spacing-attrs": "off",
      "@html-eslint/no-trailing-spaces": "error",
      "@html-eslint/quotes": "off",
      "@html-eslint/sort-attrs": "error"
    }
;

const htmlConfig: FlatConfig = htmlPlugin.configs["flat/recommended"];

htmlConfig.files = [...(htmlConfig.files ?? []), "**/*.html"];
htmlConfig.rules = {...htmlConfig.rules, ...htmlRules};

export {htmlConfig};
