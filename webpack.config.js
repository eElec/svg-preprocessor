const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		library: {
			name: 'svgProcessor',
			type: 'umd',
			export: 'default',
		},
		globalObject: 'this',
		path: path.resolve(__dirname, 'build'),
	},

	devServer: {
		port: 9000,
		open: true,
		openPage: 'demo/',
		publicPath: '/build/',
		injectClient: false
	},
};
