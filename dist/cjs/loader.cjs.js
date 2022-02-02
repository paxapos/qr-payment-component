'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-65cc7d72.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["qr-pay.cjs",[[1,"qr-pay",{"href":[1],"done":[4],"qr":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
