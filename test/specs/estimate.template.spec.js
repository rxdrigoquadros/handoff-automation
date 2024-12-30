// test/specs/estimate.template.spec.js
import LoginPage from '../pageobjects/login.page.js';
import TemplateEstimatePage from '../pageobjects/estimate.template.page.js';
import dotenv from 'dotenv';

dotenv.config();

describe('Template Estimate Creation Flow', () => {
    before(async () => {
        console.log('Logging in before template estimate creation');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
    });

    it('should create a new estimate using bathroom template', async () => {
        console.log('Test: Creating new estimate from bathroom template');
        await TemplateEstimatePage.startNewEstimate();
        await TemplateEstimatePage.selectBathroomTemplate();
        await TemplateEstimatePage.waitForEstimateGeneration();
        await expect(TemplateEstimatePage.generatedEstimate).toBeDisplayed();
    });
});