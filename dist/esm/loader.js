import { p as promiseResolve, b as bootstrapLazy } from './index-cb929c79.js';

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["qr-pay",[[1,"qr-pay",{"href":[1],"done":[4],"background":[1],"color":[1],"width":[2],"options":[32]}]]]], options);
  });
};

export { defineCustomElements };
