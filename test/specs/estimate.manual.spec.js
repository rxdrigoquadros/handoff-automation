// test/specs/estimate.manual.spec.js
import LoginPage from '../pageobjects/login.page.js';
import ManualEstimatePage from '../pageobjects/estimate.manual.page.js';
import dotenv from 'dotenv';

dotenv.config();

const kitchenDescription = "This kitchen remodel is 15 inches x 10 inches with 9 inches ceilings. Scope includes: complete demo, drywall, 12x12 tile floor, base and upper cabinets, quartz countertops, 12 inches mosaic backsplash, new sink, outlets, recessed lights, appliances, baseboard, and painting. No layout changes. Use mid grade finishes";

describe('Manual Estimate Creation Flow', () => {
    before(async () => {
        console.log('Logging in before manual estimate creation');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
    });

    it('should create a new blank estimate for kitchen remodel', async () => {
        console.log('Test: Creating new blank estimate for kitchen');
        await ManualEstimatePage.startNewEstimate();
        await ManualEstimatePage.createBlankEstimate(kitchenDescription);
        await ManualEstimatePage.waitForEstimateGeneration();
        await expect(ManualEstimatePage.generatedEstimate).toBeDisplayed();
    });
});