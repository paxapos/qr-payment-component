import { p as promiseResolve, b as bootstrapLazy } from './index-c6d0d70e.js';

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["qr-pay",[[1,"qr-pay",{"href":[1],"done":[4],"qr":[32]}]]]], options);
  });
};

export { defineCustomElements };
