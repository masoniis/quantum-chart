import * as path from 'path';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),

		prerender: {
			entries: ['*', '/content.json']
		},

		vite: {
			resolve: {
				alias: {
					$img: path.resolve('src/images'),
					$routes: path.resolve('src/routes')
				}
			},

			server: {
				fs: {
					strict: false
				}
			}
		}
	}
};

export default config;