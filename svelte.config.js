import * as path from 'path';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['*', '/content.json']
		},
	}
};

export default config;