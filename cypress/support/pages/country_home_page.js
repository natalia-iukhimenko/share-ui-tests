class CountryHomePage {
    get joinForFreeLink() {
        return cy.get("[data-test-id = 'reggie-link-register-now']").eq(1);
    }

    joinForFree() {
        this.joinForFreeLink.click();
    }
}
export default new CountryHomePage();