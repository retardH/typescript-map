import { faker} from '@faker-js/faker';

class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.person.fullName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
}

const testUser = new User();
console.log(testUser.location, testUser.name);