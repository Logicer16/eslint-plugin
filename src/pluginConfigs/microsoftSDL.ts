/**
 * @file The configuration for `@microsoft/eslint-plugin-sdl`.
 */
import MicrosoftSDLPlugin from "@microsoft/eslint-plugin-sdl";
import {FlatConfig} from "../types.js";

export const MicrosoftSDLConfig: FlatConfig[] = [
  {
    plugins: {
      "@microsoft/sdl": MicrosoftSDLPlugin
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
  }
];
