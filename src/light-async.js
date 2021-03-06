import createAsyncLoadingHighlighter from './async-syntax-highlighter';

export default createAsyncLoadingHighlighter({
  supportsLanguageRegistering: true,
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */ 
    'lowlight/lib/core').then((module) => {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return module.default || module;
    }),
});