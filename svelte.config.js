import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			// base: process.env.BASE_PATH || "/my_works_lab5",
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || "/my_works_lab5",
		},
	},
};

export default config;