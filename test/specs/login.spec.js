// test/specs/login.spec.js
import LoginPage from '../pageobjects/login.page.js';
import dotenv from 'dotenv';

dotenv.config();

describe('Login Flow', () => {
    it('should login successfully with valid credentials', async () => {
        console.log('Test: Successful login');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
        await expect(LoginPage.successMessage).toBeDisplayed();
    });
});