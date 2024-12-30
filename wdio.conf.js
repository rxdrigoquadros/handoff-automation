import path from 'path';
import { fileURLToPath } from 'url';
import logger from './test/config/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_4_API_30',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './app/handoff.apk'),
        'appium:appPackage': 'com.onebuild.handoff',
        'appium:appActivity': 'com.onebuild.handoff.MainActivity',
        'appium:noReset': false,
        'appium:fullReset': true,
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 80000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723
            },
            logPath: './logs'
        }]
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['mochawesome', {
            outputDir: './test/reports',
            outputFileFormat: function(opts) {
                return `results-${opts.cid}.json`
            }
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },

    // Hooks
    onPrepare: function (config, capabilities) {
        logger.info('=== Test Session Starting ===');
    },

    beforeSession: function (config, capabilities, specs) {
        logger.info('Initializing test session...');
    },

    before: function (capabilities, specs) {
        logger.info('Setting up test requirements...');
    },

    beforeSuite: function (suite) {
        logger.info(`Starting test suite: ${suite.title}`);
    },

    beforeTest: function (test, context) {
        logger.info(`Starting test: ${test.title}`);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (passed) {
            logger.info(`Test passed: ${test.title}`);
        } else {
            logger.error(`Test failed: ${test.title}`);
            await browser.takeScreenshot();
            if (error) {
                logger.error(`Error: ${error.message}`);
            }
        }
    },

    afterSuite: function (suite) {
        logger.info(`Completed test suite: ${suite.title}`);
    },

    after: function (result, capabilities, specs) {
        logger.info('Cleaning up test environment...');
    },

    onComplete: function(exitCode, config, capabilities, results) {
        logger.info('=== Test Session Completed ===');
    }
};