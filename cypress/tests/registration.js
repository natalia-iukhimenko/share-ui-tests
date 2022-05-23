import internationalPage from "../support/pages/international_page"
import countryHomePage from "../support/pages/country_home_page"
import registrationPage from "../support/pages/registration_page";

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
})