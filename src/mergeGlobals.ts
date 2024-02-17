/**
 * @file Merge two sets of ESLint globals to create the most permissive combination.
 */
import {ESLint} from "eslint";
import {GlobalValue} from "./common.js";

/**
 * Compare two values to determine the greater valued one.
 * @param first The first value to compare.
 * @param second The second value to compare.
 * @returns The greater valued one of the two provided values.
 */
function getGreaterKey(
  first: GlobalValue = "off",
  second: GlobalValue = "off"
): GlobalValue {
  let firstString = first;
  let secondString = second;
  if (typeof firstString === "boolean") {
    firstString = firstString ? "writable" : "readonly";
  }
  if (typeof secondString === "boolean") {
    secondString = secondString ? "writable" : "readonly";
  }

  if (
    firstString === "off" ||
    (firstString === "readonly" && secondString === "writable")
  ) {
    return secondString;
  }
  return firstString;
}

/**
 * Merge multiple eslint global objects.
 * @param globals The global objects to merge.
 * @returns A merged global object.
 */
export function mergeGlobals(...globals: ESLint.Globals[]): ESLint.Globals {
  const merged: ESLint.Globals = {};

  for (const global of globals) {
    for (const key of Object.keys(global)) {
      // No prototype properties
      const existing = Object.hasOwn(merged, key) ? merged[key] : undefined;
      merged[key] = getGreaterKey(existing, global[key]);
    }
  }

  return merged;
}
