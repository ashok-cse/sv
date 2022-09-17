import adapter from '@sveltejs/adapter-node';

import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	],
	kit: {
		adapter: adapter({out: '.svelte-kit/cloudflare'}),
	}
}

export default config
