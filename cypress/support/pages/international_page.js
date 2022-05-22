import countryEnum from "../enums/country_enum"

class InternationalPage {
    #openCountryHomePage(countryCode) {
        cy.get(`#country-list [href = '/${countryCode}/en/']`).click();
    }

    openGermanyHomePage() {
        this.#openCountryHomePage(countryEnum.Germany.code);
    }
}
export default new InternationalPage();