/**
 * @file The configuration for `eslint-plugin-tailwindcss`.
 */
import tailwind from "eslint-plugin-tailwindcss";
import {FlatConfig} from "../types.js";

export const tailwindcssConfigs: FlatConfig[] = [
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/migration-from-tailwind-2": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error"
    }
  }
];
