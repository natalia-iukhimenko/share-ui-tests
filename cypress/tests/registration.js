import internationalPage from "../support/pages/international_page"
import countryHomePage from "../support/pages/country_home_page"
import registrationPage from "../support/pages/registration_page";
import paymentPage from "../support/pages/payment_page";
import * as dataGenerator from "../support/util/data_generator";
const { faker } = require('@faker-js/faker');

describe("UI tests for registration process", () => {
    let countryInfo;

    before(() => {
        cy.fixture("country_specific_data").then((data) => {
            countryInfo = data[`${Cypress.env('country_code')}`];
        })
    })

    beforeEach(() => {
        cy.openStartPage();
        internationalPage.openCountryHomePage(Cypress.env('country_code'));
        countryHomePage.joinForFree();
    })

    it("Validation of country-specific default values", () => {
        registrationPage.checkSelectedCountry(countryInfo.code)
            .checkAvailableCities(countryInfo.cities)
            .checkAvailableLanguage(countryInfo.language)
            .checkSelectedMobileCode(countryInfo.mobileCode)
            .checkPageHasLink(countryInfo.termsLink)
            .checkPageHasLink(countryInfo.rewardsLink)
            .checkPageHasLink(countryInfo.contactUsLink)
            .checkPageHasLink(countryInfo.imprintLink)
            .checkPageHasLink(countryInfo.privacyPolicyLink)
            .checkPageHasLink(countryInfo.cookiesLink);
    })

    it("Successful registration with only required fields specified", () => {
        registrationPage.selectCity(countryInfo.cities[0])
            .setCredentials(dataGenerator.generateEmail(), dataGenerator.generatePassword(), dataGenerator.generatePin())
            .selectSalutation(1)
            .setFullName(faker.name.firstName(), faker.name.lastName())
            .selectBirthDate(1,1, 1)
            .setBirthPlace(faker.address.country())
            .setStreet(faker.address.streetName())
            .setZipCode(dataGenerator.generateZipCode())
            .setCity(faker.address.cityName())
            .setMobilePhoneNumber(dataGenerator.generatePhoneNumber())
            .tickAllRequiredCheckboxes()
            .doRegister();
            paymentPage.checkUrl()
                .checkHeaderDisplayed();
    })
})