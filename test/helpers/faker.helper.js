// test/helpers/faker.helper.js
import { faker } from '@faker-js/faker/locale/en_US';
import dotenv from 'dotenv';

dotenv.config();

class FakerHelper {
    static getSignUpData() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const userData = {
            fullName: `${firstName} ${lastName}`,
            company: faker.company.name(),
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@qahandoff.ai`,
            phone: process.env.PHONE_NUMBER
        };

        console.log('Generated test data:', userData);
        return userData;
    }
}

export default FakerHelper;