const postcss = require('./node_modules/postcss');
const tailwindcss = require('./node_modules/tailwindcss');

async function test() {
  try {
    const result = await postcss([tailwindcss]).process('@tailwind base; @tailwind components; @tailwind utilities;', {
      from: './app/globals.css'
    });
    console.log('SUCCESS: PostCSS + Tailwind processed CSS correctly');
    console.log('Output length:', result.css.length, 'chars');
  } catch(e) {
    console.error('PostCSS ERROR:', e.message);
    if (e.stack) console.error(e.stack.split('\n').slice(0,5).join('\n'));
  }
}

test();
