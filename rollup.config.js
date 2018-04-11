import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const plugins = [
	resolve(),
	commonjs(),
	json()
];

export default [
	// browser-friendly UMD build
	{
		input: pkg.module,
		output: {
			name: 'Paged',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: plugins
	},

	{
		input: pkg.module,
		output: [
			{
				file: pkg.main,
				format: 'cjs'
			},
		]
	},

	{
		input: "./src/polyfill/polyfill.js",
		output: {
			name: 'PagedPolyfill',
			file: "./dist/paged.polyfill.js",
			format: 'umd'
		},
		plugins: plugins
	}
];