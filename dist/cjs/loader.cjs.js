'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-79a24b0d.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["qr-pay.cjs",[[1,"qr-pay",{"href":[1],"done":[4],"background":[1],"color":[1],"width":[2],"options":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
