import { config as baseConfig } from '../../wdio.conf.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// BrowserStack credentials should be stored in environment variables
const browserstackUser = process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME';
const browserstackKey = process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY';

// Get the app URL from BrowserStack after uploading your app
const app = process.env.BROWSERSTACK_APP_ID || 'bs://YOUR_APP_ID';

export const config = {
    ...baseConfig,
    user: browserstackUser,
    key: browserstackKey,

    specs: [
        './test/specs/**.spec.js',
    ],

    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],

    capabilities: [{
        'platformName': 'Android',
        'platformVersion': '11.0',
        'deviceName': 'Google Pixel 4',
        'automationName': 'UiAutomator2',
        'app': app,
        
        // BrowserStack specific capabilities
        'bstack:options': {
            projectName: "Handoff App Project",
            buildName: 'Handoff Android Build',
            sessionName: 'Handoff Test Session',
            debug: true,
            networkLogs: true,
            deviceLogs: true,
            env: {
                PHONE_NUMBER: process.env.PHONE_NUMBER,
                SMS_CODE: process.env.SMS_CODE
            }
        }
    }],

    maxInstances: 1,

    // BrowserStack specific configuration
    hostname: 'hub-cloud.browserstack.com',

    reporters: [
        'spec',
        ['mochawesome', {
            outputDir: './test/reports',
            outputFileFormat: function(opts) {
                return `browserstack-results-${opts.cid}.json`
            }
        }]
    ]
};