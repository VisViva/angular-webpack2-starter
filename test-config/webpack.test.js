const webpack = require('webpack');
const root = require('../helpers').root;

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

const EXCLUDE_SOURCE_MAPS = require('../constants').EXCLUDE_SOURCE_MAPS;
const MY_TEST_RULES = require('../constants').MY_TEST_RULES;
const MY_TEST_PLUGINS = require('../constants').MY_TEST_PLUGINS;
const STORE_DEV_TOOLS = require('../constants').STORE_DEV_TOOLS;

module.exports = {

	entry: {},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				exclude: [root('node_modules')]
      },
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'source-map-loader',
				exclude: [EXCLUDE_SOURCE_MAPS]
      },
			{
				test: /\.ts$/,
				loaders: [
          'awesome-typescript-loader?sourceMap=false,inlineSourceMap=true,compilerOptions{}=removeComments:true',
          'angular2-template-loader'
        ],
				exclude: [/\.e2e\.ts$/]
      },
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: [root('src/index.html')]
			},
			{
				test: /\.css$/,
				loaders: ['to-string-loader', 'css-loader'],
				exclude: [root('src/index.html')]
			},
			{
				test: /\.html$/,
				loader: 'raw-loader',
				exclude: [root('src/index.html')]
			},
			{
				test: /\.(js|ts)$/,
				loader: 'istanbul-instrumenter-loader',
				enforce: 'post',
				include: root('src'),
				exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      },
      ...MY_TEST_RULES
    ]
	},
	plugins: [
    new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			root('./src')
    ),
    new DefinePlugin({
			AOT: false,
			ENV: JSON.stringify('test'),
			HMR: false,
			PORT: 3000,
			HOST: JSON.stringify('localhost'),
			STORE_DEV_TOOLS: JSON.stringify(STORE_DEV_TOOLS)
		}),
    new NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
			options: {
				tslint: {
					emitErrors: false,
					failOnHint: false,
					resourcePath: root('./src')
				}
			}
		}),
    ...MY_TEST_PLUGINS
  ],
	node: {
		global: true,
		process: false,
		crypto: false,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
};
