// test/specs/signup.spec.js
import SignUpPage from '../pageobjects/signup.page.js';
import FakerHelper from '../helpers/faker.helper.js';
import dotenv from 'dotenv';

dotenv.config();

describe('User Registration Flow', () => {
    before(async () => {
        console.log('Starting registration tests');
    });

    beforeEach(async () => {
        console.log('Setting up test environment');
    });

    it('should successfully register a new user', async () => {
        console.log('Test: Successful user registration');
        
        const userData = FakerHelper.getSignUpData();
        await SignUpPage.fillSignUpForm(userData);
        await SignUpPage.submit();
        
        // Handle SMS verification
        console.log('Handling SMS verification');
        await SignUpPage.enterSmsCode(process.env.SMS_CODE);
        
        await SignUpPage.waitForSuccess();
        await expect(SignUpPage.successMessage).toBeDisplayed();
        console.log('User registration completed successfully');
    });

    it('should validate required fields', async () => {
        console.log('Test: Required fields validation');
        
        await SignUpPage.submit();
        // Add assertions for error messages
        console.log('Required fields validation completed');
    });

    it('should validate email format', async () => {
        console.log('Test: Email format validation');
        
        const userData = FakerHelper.getSignUpData();
        userData.email = 'invalid.email';
        
        await SignUpPage.fillSignUpForm(userData);
        await SignUpPage.submit();
        
        // Add assertions for email error message
        console.log('Email format validation completed');
    });

    afterEach(async () => {
        console.log('Cleaning up test environment');
    });

    after(async () => {
        console.log('Registration tests completed');
    });
});