/**
 * @file The configuration for eslint plugins for jest.
 */
import jestExtendedPlugin from "eslint-plugin-jest-extended";
import jestFormattingPlugin from "eslint-plugin-jest-formatting";
import {FlatConfig} from "../common.js";
import {getLegacyCompatibilityInstance} from "../legacyCompatibility.js";

const compat = getLegacyCompatibilityInstance(import.meta.url);

const jestTSFiles = ["**/*.{test,spec}.ts{x,}"];
const jestFiles = [...jestTSFiles, "**/*.{test,spec}.js{x,}"];

let jestConfigs: FlatConfig[] = [
  ...compat.extends("plugin:jest/recommended"),
  {
    rules: {
      "jest/consistent-test-it": "error",
      "jest/expect-expect": "error",
      "jest/max-expects": "off",
      "jest/max-nested-describe": "off",
      "jest/no-alias-methods": "error",
      "jest/no-commented-out-tests": "error",
      "jest/no-conditional-expect": "error",
      "jest/no-conditional-in-test": "error",
      "jest/no-confusing-set-timeout": "error",
      // Doesn't work in shared configs due to dependency resolution.
      // Already served by eslint-plugin-deprecation.
      "jest/no-deprecated-functions": "off",
      "jest/no-disabled-tests": "error",
      "jest/no-done-callback": "error",
      "jest/no-duplicate-hooks": "error",
      "jest/no-export": "error",
      "jest/no-focused-tests": "error",
      "jest/no-hooks": ["error", {allow: ["afterEach", "beforeEach"]}],
      "jest/no-identical-title": "error",
      "jest/no-interpolation-in-snapshots": "error",
      "jest/no-jasmine-globals": "error",
      "jest/no-large-snapshots": ["error", {inlineMaxSize: 8, maxSize: 80}],
      "jest/no-mocks-import": "error",
      "jest/no-standalone-expect": "error",
      "jest/no-test-prefixes": "error",
      "jest/no-test-return-statement": "error",
      "jest/prefer-called-with": "error",
      "jest/prefer-comparison-matcher": "error",
      "jest/prefer-each": "error",
      "jest/prefer-equality-matcher": "error",
      "jest/prefer-expect-assertions": [
        "error",
        {
          onlyFunctionsWithAsyncKeyword: true,
          onlyFunctionsWithExpectInCallback: true,
          onlyFunctionsWithExpectInLoop: true
        }
      ],
      "jest/prefer-expect-resolves": "error",
      "jest/prefer-hooks-in-order": "error",
      "jest/prefer-hooks-on-top": "error",
      "jest/prefer-lowercase-title": "error",
      "jest/prefer-mock-promise-shorthand": "error",
      "jest/prefer-snapshot-hint": ["error", "always"],
      "jest/prefer-spy-on": "error",
      "jest/prefer-strict-equal": "error",
      "jest/prefer-to-be": "error",
      "jest/prefer-to-contain": "error",
      "jest/prefer-to-have-length": "error",
      "jest/prefer-todo": "error",
      "jest/require-hook": "error",
      "jest/require-top-level-describe": "error",
      "jest/valid-describe-callback": "error",
      "jest/valid-expect": "error",
      "jest/valid-expect-in-promise": "error",
      "jest/valid-title": "error"
    }
  },
  {
    plugins: {"jest-formatting": jestFormattingPlugin},
    rules: {
      "jest-formatting/padding-around-after-all-blocks": "error",
      "jest-formatting/padding-around-after-each-blocks": "error",
      "jest-formatting/padding-around-before-all-blocks": "error",
      "jest-formatting/padding-around-before-each-blocks": "error",
      "jest-formatting/padding-around-describe-blocks": "error",
      "jest-formatting/padding-around-expect-groups": "error",
      "jest-formatting/padding-around-test-blocks": "error"
    }
  },
  {
    plugins: {"jest-extended": jestExtendedPlugin},
    rules: {
      "jest-extended/prefer-to-be-array": "error",
      "jest-extended/prefer-to-be-false": "error",
      "jest-extended/prefer-to-be-object": "error",
      "jest-extended/prefer-to-be-true": "error",
      "jest-extended/prefer-to-have-been-called-once": "error"
    }
  }
];

jestConfigs = jestConfigs.map(<T extends FlatConfig>(config: T): T => {
  const snapshotFilePatterns = config.files?.flat().filter((file) => {
    return typeof file === "string" && file.endsWith(".snap");
  });
  if (snapshotFilePatterns !== undefined && snapshotFilePatterns.length > 0) {
    return config;
  }
  return {...config, files: [...(config.files ?? []), ...jestFiles]};
});

jestConfigs.push({
  files: jestTSFiles,
  rules: {
    "jest/no-untyped-mock-factory": "error",
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/unbound-method": "off",
    "jest/unbound-method": "error"
  }
});

export {jestConfigs};
