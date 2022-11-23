import { logger } from '../utils/logger';
import { srcFileErrorHandler } from '../utils/srcFile';
import * as packageJSONFile from '../package.json';

/**
 * @function getSystemVersion
 * @summary Get system version
 * @returns {string} systemVersionResults
 * @throws {object} errorCodeAndMsg
 */
const getSystemVersion = async function getSystemVersion(): Promise<string> {
  try {
    const version = packageJSONFile?.version;
    logger.debug({ label: 'system version response', results: version });

    return version || 'version is unset';
  } catch (error) {
    return srcFileErrorHandler(error, 'could not get system version');
  }
};

/**
 * @function systemPing
 * @summary Ping system and return success
 * @returns {string} systemPingResults
 */
const systemPing = function systemPing(): string {
  return 'Hi! Successful ping!';
};

export {
  getSystemVersion,
  systemPing
};
