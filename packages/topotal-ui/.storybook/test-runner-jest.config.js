// ./test-runner-jest.config.js
const { getJestConfig } = require('@storybook/test-runner');

const testRunnerConfig = getJestConfig();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default Jest configuration comes from @storybook/test-runner
  ...testRunnerConfig,
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  testTimeout: 30000, // default timeout is 15s
};
