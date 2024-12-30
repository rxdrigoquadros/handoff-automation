// test/pageobjects/team.page.js
import { faker } from '@faker-js/faker';

class TeamPage {
    get profileButton() { return $('android=new UiSelector().text("AR")'); }
    get teamButton() { return $('android=new UiSelector().text("Team")'); }
    get addMemberButton() { return $('android=new UiSelector().text("󰐕")'); }
    get nameInput() { return $('android=new UiSelector().text("Enter a name")'); }
    get emailInput() { return $('android=new UiSelector().text("Enter an email")'); }
    get phoneInput() { return $('android=new UiSelector().text("Enter a phone number")'); }
    get saveButton() { return $('android=new UiSelector().resourceId("button-text")'); }
    get threeDotsMenu() { return $('android=new UiSelector().text("󰇙")')}
    get deleteTeamMembrer() { return $('android=new UiSelector().text("Delete")'); }
    get confirmDelete() { return $('android=new UiSelector().description("Delete")')}

    getMemberName(name) { 
        return $(`android=new UiSelector().text("${name}")`); 
    }
    
    getMemberEmail(email) { 
        return $(`android=new UiSelector().text("${email}")`); 
    }
    
    getMemberPhone(phone) { 
        return $(`android=new UiSelector().text("${phone}")`); 
    }

    generateMemberData() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        return {
            fullName: `${firstName} ${lastName}`,
            email: faker.internet.email({ firstName, lastName }).toLowerCase(),
            phone: faker.phone.number('##########') // Generates 10-digit phone number
        };
    }

    async navigateToTeam() {
        console.log('Navigating to team section');
        await this.profileButton.click();
        await this.teamButton.click();
    }

    async addNewMember(name, email, phone) {
        console.log('Adding new team member');
        await this.addMemberButton.click();
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.phoneInput.setValue(phone);
        await this.saveButton.click();
    }

    async validateMemberInfo(name, email, phone) {
        console.log('Validating team member information');
        await expect(this.getMemberName(name)).toBeDisplayed();
        await expect(this.getMemberEmail(email)).toBeDisplayed();
        await expect(this.getMemberPhone(phone)).toBeDisplayed();
    }

    async deleteTeamMembrer(){
        console.log('Deleting team member');
        await this.threeDotsMenu.click();
        await this.deleteTeamMembrer.click();
        await this.confirmDelete.click();
    }
}

export default new TeamPage();