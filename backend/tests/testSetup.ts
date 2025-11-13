/**
 * @summary Global test setup configuration
 * @description Shared test environment setup for all test files
 */

import dotenv from 'dotenv';

/**
 * @rule {be-testing-standards} Load test environment variables
 */
dotenv.config({ path: '.env.test' });

/**
 * @summary Global test timeout
 */
jest.setTimeout(10000);

/**
 * @summary Mock console methods in tests
 */
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
};
