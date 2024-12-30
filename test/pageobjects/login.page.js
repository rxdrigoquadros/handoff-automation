// test/pageobjects/login.page.js
class LoginPage {
    get loginButton() { return $('android=new UiSelector().text("Log in")'); }
    get phoneOption() { return $('android=new UiSelector().text("Phone")'); }
    get phoneInput() { return $('android=new UiSelector().className("android.widget.EditText")'); }
    get continueButton() { return $('android=new UiSelector().text("Continue")'); }
    get smsCodeInput() { return $('android=new UiSelector().className("android.widget.EditText")'); }
    get verifyButton() { return $('android=new UiSelector().text("Verify")'); }
    get successMessage() { return $('android=new UiSelector().text("Estimates")'); }

    async login(phoneNumber, smsCode) {
        console.log('Starting login process');
        await this.loginButton.click();
        await this.phoneOption.click();
        await this.phoneInput.setValue(phoneNumber);
        await this.continueButton.click();

        console.log('Entering SMS verification code');
        await this.smsCodeInput.waitForDisplayed({ timeout: 10000 });
        await this.smsCodeInput.setValue(smsCode);
        await this.verifyButton.click();
    }

    async waitForSuccess() {
        console.log('Waiting for success message');
        await this.successMessage.waitForDisplayed({ timeout: 5000 });
    }
}

export default new LoginPage();