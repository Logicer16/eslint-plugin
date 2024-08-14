// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck: Types are unavailable.
/**
 * @file Generate rule typings.
 */

import fs from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";
// eslint-disable-next-line n/no-unpublished-import
import {pluginsToRulesDTS} from "eslint-typegen/core";

const outPath = "types/generated/typegen.ts";

const declaration = await pluginsToRulesDTS({
  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  "array-func": (await import("eslint-plugin-array-func")).default,
  "css": (await import("eslint-plugin-css")).default,
  "decorator-position": (await import("eslint-plugin-decorator-position"))
    .default,
  "deprecation": (await import("eslint-plugin-deprecation")).default,
  "es-x": (await import("eslint-plugin-es-x")).default,
  "eslint-plugin": (await import("eslint-plugin-eslint-plugin")).default,
  "etc": (await import("eslint-plugin-etc")).default,
  "import-x": (await import("eslint-plugin-import-x")).default,
  "jest": (await import("eslint-plugin-jest")).default,
  "jest-extended": (await import("eslint-plugin-jest-extended")).default,
  "jest-formatting": (await import("eslint-plugin-jest-formatting")).default,
  "jsdoc": (await import("eslint-plugin-jsdoc")).default,
  "json-schema-validator": (await import("eslint-plugin-json-schema-validator"))
    .default,
  "jsonc": (await import("eslint-plugin-jsonc")).default,
  "markdown": (await import("eslint-plugin-markdown")).default,
  "n": (await import("eslint-plugin-n")).default,
  "no-constructor-bind": (await import("eslint-plugin-no-constructor-bind"))
    .default,
  "no-use-extend-native": (await import("eslint-plugin-no-use-extend-native"))
    .default,
  "perfectionist": (await import("eslint-plugin-perfectionist")).default,
  "prettier": (await import("eslint-plugin-prettier")).default,
  "promise": (await import("eslint-plugin-promise")).default,
  "regexp": (await import("eslint-plugin-regexp")).default,
  "security": (await import("eslint-plugin-security")).default,
  "simple-import-sort": (await import("eslint-plugin-simple-import-sort"))
    .default,
  "svelte": (await import("eslint-plugin-svelte")).default,
  "tailwindcss": (await import("eslint-plugin-tailwindcss")).default,
  "toml": (await import("eslint-plugin-toml")).default,
  "unicorn": (await import("eslint-plugin-unicorn")).default,
  "unused-imports": (await import("eslint-plugin-unused-imports")).default,
  "yml": (await import("eslint-plugin-yml")).default,

  "": (await import("@eslint/js")).default,
  "@html-eslint": (await import("@html-eslint/eslint-plugin")).default,
  "@microsoft/sdl": (await import("@microsoft/eslint-plugin-sdl")).default,
  "@typescript-eslint": (await import("typescript-eslint")).default,
  "shopify": (await import("@shopify/eslint-plugin")).default
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fullOutPath = path.join(__dirname, outPath);
const outDirectory = path.dirname(fullOutPath);

await fs.access(outDirectory).catch(async () => {
  return fs.mkdir(outDirectory, {recursive: true});
});

await fs.writeFile(fullOutPath, `// @ts-nocheck\n${declaration}`);
