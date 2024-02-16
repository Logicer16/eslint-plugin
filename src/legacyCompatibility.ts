/**
 * @file Compatibility with the legacy config format.
 */
import path from "node:path";
import {fileURLToPath} from "node:url";
import {FlatCompat} from "@eslint/eslintrc";

/**
 * Get the legacy config format compatibility instance for a module's path.
 * @param importMetaURL The module path returned by `import.meta.url`.
 * @returns A `FlatCompat` instance.
 */
export function getLegacyCompatibilityInstance(
  importMetaURL: string
): FlatCompat {
  const __filename = fileURLToPath(importMetaURL);
  const __dirname = path.dirname(__filename);

  return new FlatCompat({
    baseDirectory: __dirname
  });
}
