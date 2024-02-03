/**
 * @file The configuration for `eslint-plugin-n`.
 */

import {Linter} from "eslint";
import nodePlugin from "eslint-plugin-n";

export const nodeConfig: Linter.FlatConfig[] = [
  {
    // Default to inferred.
    ...nodePlugin.configs["flat/recommended"],
    rules: {
      "n/exports-style": ["error", "exports"],
      "n/file-extension-in-import": ["error", "always"],
      "n/no-mixed-requires": "error",
      "n/no-new-require": "error",
      "n/no-path-concat": "error",
      "n/no-sync": "error",
      "n/prefer-global/buffer": ["error", "never"],
      "n/prefer-global/console": "error",
      "n/prefer-global/process": ["error", "never"],
      "n/prefer-global/text-decoder": "error",
      "n/prefer-global/text-encoder": "error",
      "n/prefer-global/url": "error",
      "n/prefer-global/url-search-params": "error",
      "n/prefer-promises/dns": "error",
      "n/prefer-promises/fs": "error"
    }
  },
  ...nodePlugin.configs["flat/mixed-esm-and-cjs"]
];
