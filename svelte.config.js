import adapter from '@sveltejs/adapter-static';
import { normalizePath } from 'vite';
import path from 'path';

const dev = (process.env.NODE_ENV == 'development') 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	root: normalizePath(path.resolve('./')),

	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        prerender : { 
			default: true // need this to get it to create index.html in docs, which is needed for github pages 
		},
        paths: {
            // change below to your repo name
            base: dev ? "" : "/sveltekit_test",
		},
		// for svelte-carousel
		vite: { optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] } } 
	}
};

export default config;
