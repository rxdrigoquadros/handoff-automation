// test/pageobjects/client.page.js
import { faker } from '@faker-js/faker';

class ClientPage {
    get clientsButton() { return $('android=new UiSelector().description("󰭕, Clients")'); }
    get addClientButton() { return $('android=new UiSelector().text("󰐕")'); }
    get nameInput() { return $('android=new UiSelector().text("Enter a name")'); }
    get emailInput() { return $('android=new UiSelector().text("Enter an email")'); }
    get phoneInput() { return $('android=new UiSelector().text("Enter a phone number")'); }
    get addressInput() { return $('android=new UiSelector().text("Search for an address")'); }
    get saveButton() { return $('android=new UiSelector().resourceId("button-container")'); }

    getClientName(name) { 
        return $(`android=new UiSelector().text("${name}")`); 
    }
    
    getClientEmail(email) { 
        return $(`android=new UiSelector().text("${email}")`); 
    }
    
    getClientPhone(phone) { 
        return $(`android=new UiSelector().text("${phone}")`); 
    }

    getClientAddress(address) { 
        return $(`android=new UiSelector().text("${address}")`); 
    }

    generateClientData() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        return {
            fullName: `${firstName} ${lastName}`,
            email: faker.internet.email({ firstName, lastName }).toLowerCase(),
            phone: faker.phone.number('##########'), // Generates 10-digit phone number
            address: faker.location.streetAddress(true) // Includes full address with secondary address
        };
    }

    async navigateToClients() {
        console.log('Navigating to clients section');
        await this.clientsButton.click();
    }

    async initiateNewClient() {
        console.log('Clicking add new client button');
        await this.addClientButton.click();
    }

    async addNewClient(name, email, phone, address) {
        console.log('Adding new client with generated data');
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.phoneInput.setValue(phone);
        await this.addressInput.setValue(address);
        await this.saveButton.click();
    }

    async validateClientInfo(name, email, phone, address) {
        console.log('Validating client information');
        await expect(this.getClientName(name)).toBeDisplayed();
        await expect(this.getClientEmail(email)).toBeDisplayed();
        await expect(this.getClientPhone(phone)).toBeDisplayed();
        await expect(this.getClientAddress(address)).toBeDisplayed();
    }
}

export default new ClientPage();