import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: '404.html',
			precompress: false,
			strict: false,
		}),
		appDir: 'app',
		paths: {
			base: '/demo/simple-svelte-chained-component',
			relative: false,
		}
	}
};

export default config;
