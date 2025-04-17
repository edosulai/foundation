import { appTools, defineConfig } from '@modern-js/app-tools';
import { serverPlugin } from '@modern-js/plugin-server';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';

// const isLocal = process.env.IS_LOCAL === "true";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    pluginNodePolyfill(),
    moduleFederationPlugin(),
    serverPlugin(),
  ],
  // output: {
  //   copy: [{ from: "./dist/public", to: isLocal ? "" : "./public" }],
  // },
  server: {
    ssr: {
      mode: 'string',
    },
  },
});
