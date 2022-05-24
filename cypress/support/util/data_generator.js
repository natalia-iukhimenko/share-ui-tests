const { faker } = require('@faker-js/faker');

export function generateEmail() {
    return faker.internet.email("fake", "user", "fakeuser.test");
}

export function generatePassword(length = 7) {
    return faker.internet.password(length);
}

export function generatePin(length = 4) {
    return faker.finance.pin(length);
}

export function generatePhoneNumber() {
    return faker.random.numeric(11);
}