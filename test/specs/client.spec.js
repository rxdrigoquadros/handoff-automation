// test/specs/client.spec.js
import LoginPage from '../pageobjects/login.page.js';
import ClientPage from '../pageobjects/client.page.js';
import dotenv from 'dotenv';

dotenv.config();

describe('Client Management Flow', () => {
    let testClient;

    before(async () => {
        console.log('Logging in before client management');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
        testClient = ClientPage.generateClientData();
        console.log('Generated test client data:', testClient);
    });

    it('should add a new client with random data and validate their information', async () => {
        console.log('Test: Adding new client');
        await ClientPage.navigateToClients();
        await ClientPage.initiateNewClient();
        await ClientPage.addNewClient(
            testClient.fullName,
            testClient.email,
            testClient.phone,
            testClient.address
        );
        
        console.log('Validating created client data');
        await ClientPage.validateClientInfo(
            testClient.fullName,
            testClient.email,
            testClient.phone,
            testClient.address
        );
    });
});