// test/specs/sendProposal.spec.js
import LoginPage from '../pageobjects/login.page.js';
import ProposalPage from '../pageobjects/proposal.page.js';
import dotenv from 'dotenv';

dotenv.config();

describe('Send Proposal Flow', () => {
    const selectedServices = ['Deep Clean', 'Regular Clean'];
    const searchClientName = 'Pedro Silva';
    let testClient;

    before(async () => {
        console.log('Logging in before sending proposal');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
        testClient = {
            fullName: 'Test Client'
        };
    });

    it('should review estimate and send proposal via email', async () => {
        console.log('Test: Review estimate and send proposal via email');
        
        // Review estimate steps
        await ProposalPage.reviewEstimate();
        await ProposalPage.validateEstimateReview(testClient.fullName, selectedServices);
        
        // Create proposal steps
        await ProposalPage.createProposal();
        await ProposalPage.previewAndSendProposal();
        await ProposalPage.validateProposalCreation(testClient.fullName, selectedServices);
        
        // Send proposal steps
        await ProposalPage.sendProposal();
        await ProposalPage.searchClient(searchClientName);
        await ProposalPage.confirmSendProposal();
        
        // Email specific steps
        await ProposalPage.selectEmailOption();
        await ProposalPage.clickSendButton();
        
        // Validate proposal was sent and is unopened
        await ProposalPage.validateUnopenedStatus();
    });
});