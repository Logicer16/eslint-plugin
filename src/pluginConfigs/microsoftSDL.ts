/**
 * @file The configuration for `@microsoft/eslint-plugin-sdl`.
 */
import microsoftSDLPlugin from "@microsoft/eslint-plugin-sdl";
import {FlatConfig} from "../types.js";

export const microsoftSDLConfig: FlatConfig = {
  plugins: {
    "@microsoft/sdl": microsoftSDLPlugin
  },
  rules: {
    "@microsoft/sdl/no-document-write": "error",
    "@microsoft/sdl/no-electron-node-integration": "error",
    "@microsoft/sdl/no-html-method": "error",
    "@microsoft/sdl/no-inner-html": "error",
    "@microsoft/sdl/no-insecure-url": "error",
    "@microsoft/sdl/no-postmessage-star-origin": "error",
    "@microsoft/sdl/no-unsafe-alloc": "error"
  }
};
