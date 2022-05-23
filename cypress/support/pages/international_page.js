class InternationalPage {
    openCountryHomePage(countryCode) {
        cy.get(`#country-list [href = '/${countryCode}/en/']`).click();
    }
}
export default new InternationalPage();