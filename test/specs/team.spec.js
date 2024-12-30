// test/specs/team.spec.js
import LoginPage from '../pageobjects/login.page.js';
import TeamPage from '../pageobjects/team.page.js';
import dotenv from 'dotenv';

dotenv.config();

describe('Team Management Flow', () => {
    let testMember;

    before(async () => {
        console.log('Logging in before team management');
        await LoginPage.login(process.env.PHONE_NUMBER, process.env.SMS_CODE);
        testMember = TeamPage.generateMemberData();
        console.log('Generated test member data:', testMember);
    });

    it('should add a new team member with random data and validate their information', async () => {
        console.log('Test: Adding new team member');
        await TeamPage.navigateToTeam();
        await TeamPage.addNewMember(
            testMember.fullName,
            testMember.email,
            testMember.phone
        );
        await TeamPage.validateMemberInfo(
            testMember.fullName,
            testMember.email,
            testMember.phone
        );
    });
});