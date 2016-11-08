"use strict";

const root = require('./helpers.js').root;
const ip = require('ip');

exports.HOST = ip.address();
exports.DEV_PORT = 3000;
exports.E2E_PORT = 4201;
exports.PROD_PORT = 8088;
exports.USE_DEV_SERVER_PROXY = false;
exports.DEV_SERVER_PROXY_CONFIG = {
  '**': 'http://localhost:8089'
};

exports.DEV_SOURCE_MAPS = 'eval';
exports.PROD_SOURCE_MAPS = 'source-map';

exports.DEV_SERVER_WATCH_OPTIONS = {
  poll: undefined,
  aggregateTimeout: 300,
  ignored: /node_modules/
};

/**
 * monitor | logger | both | none
 */

exports.STORE_DEV_TOOLS = 'both';

exports.EXCLUDE_SOURCE_MAPS = [
  root('node_modules/@angular'),
  root('node_modules/rxjs')
];

/**
 * Use this for folders you want to be copied in to Client dist
 * src/assets and index.html are already copied by default.
 * format is { from: 'folder_name', to: 'folder_name' }
 */

exports.MY_COPY_FOLDERS = [];

/**
 * List polyfills that you want to be included in your dlls files
 * this will speed up initial dev server build and incremental builds.
 * Be sure to run `npm run build:dll` if you make changes to this array.
 */

exports.MY_POLYFILL_DLLS = [];

/**
 * List vendors that you want to be included in your dlls files
 * this will speed up initial dev server build and incremental builds.
 * Be sure to run `npm run build:dll` if you make changes to this array.
 */

exports.MY_VENDOR_DLLS = [];

/**
 * Use this to import your own webpack config Client plugins.
 */

exports.MY_CLIENT_PLUGINS = [];

/**
 * Use this to import your own webpack config plugins for production use.
 */

exports.MY_CLIENT_PRODUCTION_PLUGINS = [];

/**
 * Use this to import your own rules for Client webpack config.
 */

exports.MY_CLIENT_RULES = [];

/**
 * Use this to import your own rules for Test webpack config.
 */

exports.MY_TEST_RULES = [];

/**
 * Use this to import your own Test webpack config plugins.
 */

exports.MY_TEST_PLUGINS = [];
