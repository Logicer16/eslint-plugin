/**
 * @file A default prettier configuration.
 */

/**
 * A default prettier configuration.
 */
export = {
  extends: ["plugin:svelte/recommended", "plugin:svelte/prettier"],
  plugins: ["svelte"],
  rules: {
    "svelte/block-lang": [
      "error",
      {
        script: ["ts", "js"]
      }
    ],
    "svelte/button-has-type": "error",
    "svelte/comment-directive": [
      "error",
      {
        reportUnusedDisableDirectives: true
      }
    ],
    "svelte/derived-has-same-inputs-outputs": "error",
    "svelte/infinite-reactive-loop": "error",
    "svelte/no-dom-manipulating": "error",
    "svelte/no-dupe-on-directives": "error",
    "svelte/no-dupe-use-directives": "error",
    "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
    "svelte/no-extra-reactive-curlies": "error",
    "svelte/no-ignored-unsubscribe": "error",
    "svelte/no-immutable-reactive-statements": "error",
    "svelte/no-reactive-functions": "error",
    "svelte/no-reactive-literals": "error",
    "svelte/no-reactive-reassign": "error",
    "svelte/no-store-async": "error",
    "svelte/no-target-blank": "error",
    "svelte/no-useless-mustaches": "error",
    "svelte/prefer-class-directive": "error",
    "svelte/prefer-destructured-store-props": "error",
    "svelte/prefer-style-directive": "error",
    "svelte/require-each-key": "error",
    "svelte/require-event-dispatcher-types": "error",
    "svelte/require-optimized-style-attribute": "error",
    "svelte/require-store-callbacks-use-set-param": "error",
    "svelte/require-store-reactive-access": "error",
    "svelte/sort-attributes": "error",
    "svelte/spaced-html-comment": "error",
    "svelte/valid-each-key": "error",
    "svelte/valid-prop-names-in-kit-pages": "error",

    // Doesn't work with tailwind.
    // eslint-disable-next-line sort-keys
    "svelte/no-unused-class-name": "off"
  }
};
