/**
 * @file Type declarations for `eslint-plugin-es-x`.
 *
 * Temporary until added to DefinitelyTyped.
 */
declare module "eslint-plugin-es-x" {
  type FlatConfig = import("../src/types.ts").FlatConfig;
  type Plugin = import("../src/types.ts").Plugin;

  declare const eslintPluginN: {
    configs: {
      "flat/no-new-in-es2015": FlatConfig;
      "flat/no-new-in-es2015-intl-api": FlatConfig;
      "flat/no-new-in-es2016": FlatConfig;
      "flat/no-new-in-es2016-intl-api": FlatConfig;
      "flat/no-new-in-es2017": FlatConfig;
      "flat/no-new-in-es2017-intl-api": FlatConfig;
      "flat/no-new-in-es2018": FlatConfig;
      "flat/no-new-in-es2018-intl-api": FlatConfig;
      "flat/no-new-in-es2019": FlatConfig;
      "flat/no-new-in-es2019-intl-api": FlatConfig;
      "flat/no-new-in-es2020": FlatConfig;
      "flat/no-new-in-es2020-intl-api": FlatConfig;
      "flat/no-new-in-es2021": FlatConfig;
      "flat/no-new-in-es2021-intl-api": FlatConfig;
      "flat/no-new-in-es2022": FlatConfig;
      "flat/no-new-in-es2022-intl-api": FlatConfig;
      "flat/no-new-in-es2023": FlatConfig;
      "flat/no-new-in-es2023-intl-api": FlatConfig;
      "flat/no-new-in-es2024": FlatConfig;
      "flat/no-new-in-es2024-intl-api": FlatConfig;
      "flat/no-new-in-es5": FlatConfig;
      "flat/no-new-in-esnext": FlatConfig;
      "flat/no-new-in-esnext-intl-api": FlatConfig;
      "flat/restrict-to-es-intl-api-1st-edition": FlatConfig;
      "flat/restrict-to-es2015": FlatConfig;
      "flat/restrict-to-es2015-intl-api": FlatConfig;
      "flat/restrict-to-es2016": FlatConfig;
      "flat/restrict-to-es2016-intl-api": FlatConfig;
      "flat/restrict-to-es2017": FlatConfig;
      "flat/restrict-to-es2017-intl-api": FlatConfig;
      "flat/restrict-to-es2018": FlatConfig;
      "flat/restrict-to-es2018-intl-api": FlatConfig;
      "flat/restrict-to-es2019": FlatConfig;
      "flat/restrict-to-es2019-intl-api": FlatConfig;
      "flat/restrict-to-es2020": FlatConfig;
      "flat/restrict-to-es2020-intl-api": FlatConfig;
      "flat/restrict-to-es2021": FlatConfig;
      "flat/restrict-to-es2021-intl-api": FlatConfig;
      "flat/restrict-to-es2022": FlatConfig;
      "flat/restrict-to-es2022-intl-api": FlatConfig;
      "flat/restrict-to-es2023": FlatConfig;
      "flat/restrict-to-es2023-intl-api": FlatConfig;
      "flat/restrict-to-es3": FlatConfig;
      "flat/restrict-to-es5": FlatConfig;
    };
  };

  export default eslintPluginN;
}
