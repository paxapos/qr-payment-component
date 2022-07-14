import { p as promiseResolve, b as bootstrapLazy } from './index-cb929c79.js';

/*
 Stencil Client Patch Browser v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["qr-pay",[[1,"qr-pay",{"href":[1],"done":[4],"background":[1],"color":[1],"width":[2],"options":[32]}]]]], options);
});
