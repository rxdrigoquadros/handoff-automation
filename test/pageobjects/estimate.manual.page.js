// test/pageobjects/estimate.manual.page.js
class ManualEstimatePage {
    get newEstimateButton() { return $('android=new UiSelector().resourceId("button")'); }
    get startBlankButton() { return $('android=new UiSelector().resourceId("button-text")'); }
    get titleInput() { return $('android=new UiSelector().resourceId("text-input-outlined")'); }
    get descriptionInput() { return $('android=new UiSelector().text("Type or talk to start estimating")'); }
    get confirmButton() { return $('android=new UiSelector().description("󰁝")'); }
    get creatingMessage() { return $('android=new UiSelector().text("Creating estimate...")'); }
    get generatedEstimate() { return $('android=new UiSelector().resourceId("button")'); }

    async startNewEstimate() {
        console.log('Starting new manual estimate');
        await this.newEstimateButton.click();
    }

    async createBlankEstimate(description) {
        console.log('Creating blank estimate');
        await this.startBlankButton.click();
        
        const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const title = `Teste ${currentDate}`;
        
        await this.titleInput.setValue(title);
        await this.descriptionInput.setValue(description);
        await this.confirmButton.click();
    }

    async waitForEstimateGeneration() {
        console.log('Waiting for estimate generation');
        await this.creatingMessage.waitForDisplayed({ timeout: 10000 });
        await this.generatedEstimate.waitForDisplayed({ timeout: 30000 });
    }
}

export default new ManualEstimatePage();