const path = require('path');
try {
  const tw = require('./node_modules/tailwindcss');
  console.log('tailwindcss loaded OK, type:', typeof tw);
  const cfg = require('./postcss.config.js');
  console.log('postcss.config.js plugins:', Object.keys(cfg.plugins || {}));
  console.log('SUCCESS: PostCSS config and tailwindcss are working');
} catch(e) {
  console.error('ERROR:', e.message);
  console.error(e.stack);
}
