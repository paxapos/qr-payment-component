import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'qr-pay',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
    },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
};
