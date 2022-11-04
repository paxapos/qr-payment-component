'use strict';

const index = require('./index-d068c8e6.js');

/*
 Stencil Client Patch Browser v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('qr-pay.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["qr-pay.cjs",[[1,"qr-pay",{"href":[1],"done":[4],"background":[1],"color":[1],"colorSuccess":[1,"color-success"],"width":[2],"ecl":[1],"options":[32]}]]]], options);
});
