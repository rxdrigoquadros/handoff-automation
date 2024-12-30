// test/pageobjects/signup.page.js
class SignUpPage {
    get inputFullName() { return $('android=new UiSelector().text("Full Name *")'); }
    get inputCompany() { return $('android=new UiSelector().text("Company *")'); }
    get inputEmail() { return $('android=new UiSelector().text("Email *")'); }
    get inputPhone() { return $('android=new UiSelector().text("Phone *")'); }
    get submitButton() { return $('android=new UiSelector().text("Get Started Free")'); }
    get smsCodeInput() { return $('android=new UiSelector().className("android.widget.EditText")'); }
    get verifyButton() { return $('android=new UiSelector().text("Verify")'); }
    get gotItButton() { return $('android=new UiSelector().resourceId("button")'); }
    get remodelsButton() { return $('android=new UiSelector().text("Remodels")'); }
    get continueButton() { return $('android=new UiSelector().text("Continue")'); }
    get mediumButton() { return $('android=new UiSelector().text("Medium")'); }
    get manuallyLocationButton() { return $('android=new UiSelector().description("Choose manually")'); }
    get inputPriceLocation() { return $('android=new UiSelector().text("Set your price location")'); }
    get bathroomRemodelTemplateButton() { return $('android=new UiSelector().text("Bathroom Remodel")'); }
    get sendButton() { return $('android=new UiSelector().text("󰁝")'); }
    get onboardingSucessMessage() { return $('android=new UiSelector().text("PRO TIP:")')}
    get estimateSuccessMessage() { return $('android=new UiSelector().text("Review estimate")'); }
    get backButton() { return $('android=new UiSelector().text("󰁍")'); }
    get profileButton() { return $('android=new UiSelector().text("H")'); }
    get deleteAccountButton() { return $('android=new UiSelector().text("Delete account")'); }
    get inputPhraseConfirmation() { return $('android=new UiSelector().text("Write ´delete my account´ to confirm")'); }
    get deleteConfirmationButton() { return $('android=new UiSelector().text("Delete")'); }

    async fillSignUpForm(userData) {
        console.log(`Filling signup form for user: ${userData.fullName}`);
        
        await this.inputFullName.setValue(userData.fullName);
        await this.inputCompany.setValue(userData.company);
        await this.inputEmail.setValue(process.env.ONBOARDING_EMAIL);
        await this.inputPhone.setValue(userData.phone);
    }

    async submit() {
        console.log('Submitting signup form');
        await this.submitButton.click();
    }

    async enterSmsCode(code) {
        console.log('Entering SMS verification code');
        await this.smsCodeInput.waitForDisplayed({ timeout: 10000 });
        await this.smsCodeInput.setValue(code);
        await this.verifyButton.click();
    }

    async onboarding() {
        console.log('Starting onboarding process');
        await this.gotItButton.click();
        await this.remodelsButton.click();
        await this.continueButton.click();
        await this.mediumButton.click();
        await this.manuallyLocationButton.click();
        await this.inputPriceLocation.setValue("New York, NY, USA");
        await this.continueButton.click();
        await this.bathroomRemodelTemplateButton.click();
        await this.sendButton.click();
    }

    async waitForSuccess() {
        console.log('Waiting for success message');
        await this.onboardingSucessMessage.waitForDisplayed({ timeout: 10000 });
        await this.estimateSuccessMessage.waitForDisplayed({ timeout: 10000})
    }

    async deleteAccount() {
        console.log('Starting delete account process');
        await this.backButton.click();
        await this.backButton.click();
        await this.profileButton.click();
        await this.deleteAccountButton.click();
        await this.inputPhraseConfirmation.setValue("delete my account");
        await this.deleteConfirmationButton.click();
    }
}

export default new SignUpPage();