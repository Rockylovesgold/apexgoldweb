// Simulate how Next.js calls getPostCssPlugins
const path = require('path');
const dir = __dirname;

async function run() {
  try {
    // Reproduce the findConfig call
    const { findConfig } = require('./node_modules/next/dist/lib/find-config');
    const config = await findConfig(dir, 'postcss');
    console.log('PostCSS config found:', JSON.stringify(config));

    // Now try to load the plugins
    const { getPostCssPlugins } = require('./node_modules/next/dist/build/webpack/config/blocks/css/plugins');
    const plugins = await getPostCssPlugins(dir, undefined, false);
    console.log('PostCSS plugins count:', plugins.length);
    console.log('SUCCESS');
  } catch(e) {
    console.error('FAIL:', e.message);
    console.error(e.stack ? e.stack.split('\n').slice(0,8).join('\n') : '');
  }
}

run();
