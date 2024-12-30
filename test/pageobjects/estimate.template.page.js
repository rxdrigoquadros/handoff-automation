// test/pageobjects/estimate.template.page.js
class TemplateEstimatePage {
    get newEstimateButton() { return $('android=new UiSelector().resourceId("button")'); }
    get bathroomTemplate() { return $('android=new UiSelector().text("Bathroom Remodel")'); }
    get confirmButton() { return $('android=new UiSelector().description("󰁝")'); }
    get creatingMessage() { return $('android=new UiSelector().text("Creating estimate...")'); }
    get generatedEstimate() { return $('android=new UiSelector().resourceId("button")'); }

    async startNewEstimate() {
        console.log('Starting new template estimate');
        await this.newEstimateButton.click();
    }

    async selectBathroomTemplate() {
        console.log('Selecting bathroom template');
        await this.bathroomTemplate.click();
        await this.confirmButton.click();
    }

    async waitForEstimateGeneration() {
        console.log('Waiting for estimate generation');
        await this.creatingMessage.waitForDisplayed({ timeout: 10000 });
        await this.generatedEstimate.waitForDisplayed({ timeout: 30000 });
    }
}

export default new TemplateEstimatePage();