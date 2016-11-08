const testWebpackConfig = require('./webpack.test.js');

const ENV = process.env.npm_lifecycle_event;
const runOnce = ENV === 'test:once' || ENV === 'test:once:ci';

module.exports = function (config) {
	const configuration = {
		basePath: '',
		frameworks: ['jasmine'],
		exclude: [],
		files: [{
			pattern: './test-config/spec-bundle.js',
			watched: false
		}],
		preprocessors: {
			'./test-config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
		},
		webpack: testWebpackConfig,
		coverageReporter: {
			type: 'in-memory'
		},
		remapCoverageReporter: {
			'text-summary': null,
			json: './coverage/coverage.json',
			html: './coverage/html'
		},
		webpackServer: {
			noInfo: true
		},
		reporters: ['mocha', 'coverage', 'remap-coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: !runOnce,
		browsers: [
      'Chrome'
    ],
		singleRun: runOnce
	};

	config.set(configuration);
};
