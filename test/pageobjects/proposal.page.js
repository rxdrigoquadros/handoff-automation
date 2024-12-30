// test/pageobjects/proposal.page.js
class ProposalPage {
    get reviewEstimateButton() { return $('android=new UiSelector().text("Review estimate")'); }
    get createProposalButton() { return $('android=new UiSelector().text("Create proposal")'); }
    get previewAndSendButton() { return $('android=new UiSelector().text("Preview & Send")'); }
    get sendProposalButton() { return $('android=new UiSelector().text("Send proposal")'); }
    get searchClientInput() { return $('android=new UiSelector().text("Search for a client")'); }
    get finalSendProposalButton() { return $('android=new UiSelector().text("Send proposal")'); }
    get emailOptionButton() { return $('android=new UiSelector().text("Email")'); }
    get sendButton() { return $('android=new UiSelector().text("Send")'); }
    get unopenedStatus() { return $('android=new UiSelector().textContains("unopened")'); }

    getClientName(name) {
        return $(`android=new UiSelector().text("${name}")`);
    }

    getServiceName(service) {
        return $(`android=new UiSelector().text("${service}")`);
    }

    async reviewEstimate() {
        console.log('Reviewing estimate');
        await this.reviewEstimateButton.click();
    }

    async validateEstimateReview(clientName, selectedServices) {
        console.log('Validating estimate review details');
        await expect(this.getClientName(clientName)).toBeDisplayed();
        
        for (const service of selectedServices) {
            await expect(this.getServiceName(service)).toBeDisplayed();
        }
    }

    async createProposal() {
        console.log('Creating proposal');
        await this.createProposalButton.click();
    }

    async previewAndSendProposal() {
        console.log('Previewing and sending proposal');
        await this.previewAndSendButton.click();
    }

    async validateProposalCreation(clientName, selectedServices) {
        console.log('Validating proposal details');
        await expect(this.getClientName(clientName)).toBeDisplayed();
        
        for (const service of selectedServices) {
            await expect(this.getServiceName(service)).toBeDisplayed();
        }
    }

    async sendProposal() {
        console.log('Clicking initial send proposal button');
        await this.sendProposalButton.click();
    }

    async searchClient(clientName) {
        console.log(`Searching for client: ${clientName}`);
        await this.searchClientInput.setValue(clientName);
    }

    async confirmSendProposal() {
        console.log('Confirming send proposal');
        await this.finalSendProposalButton.click();
    }

    async selectEmailOption() {
        console.log('Selecting email option');
        await this.emailOptionButton.click();
    }

    async clickSendButton() {
        console.log('Clicking final send button');
        await this.sendButton.click();
    }

    async validateUnopenedStatus() {
        console.log('Validating unopened status');
        await expect(this.unopenedStatus).toBeDisplayed();
    }
}

export default new ProposalPage();