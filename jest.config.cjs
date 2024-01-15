/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  injectGlobals: false,
  notify: false,
  clearMocks: true,
  coverageProvider: "v8",

};

module.exports = config;
