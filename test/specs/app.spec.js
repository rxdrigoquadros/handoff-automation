import { expect } from 'chai';
import logger from '../config/logger.js';

describe('Handoff App Test', () => {
    before(async () => {
        logger.info('=== Starting Test Execution ===');
        logger.info('Waiting for app installation...');
        await driver.pause(5000);
    });

    after(async () => {
        logger.info('=== Test Execution Completed ===');
    });

    it('should verify app installation and launch', async () => {
        // Check if app is installed
        logger.info('Verifying app installation...');
        const isAppInstalled = await driver.isAppInstalled('com.onebuild.handoff');
        expect(isAppInstalled).to.be.true;
        logger.info('App installation verified successfully');

        // Check if app is running
        logger.info('Verifying app launch...');
        const currentPackage = await driver.getCurrentPackage();
        expect(currentPackage).to.equal('com.onebuild.handoff');
        logger.info('App launch verified successfully');
    });
});