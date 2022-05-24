class PaymentPage {
    // region properties
    get #pageHeader() {
        return cy.get("div.registration-payment__header");
    }
    // endregion properties

    // region checks
    checkHeaderDisplayed() {
        this.#pageHeader.should("exist").and("be.visible");
        return this;
    }

    checkUrl() {
        cy.url().should("contain", "/registration/payment");
        return this;
    }
    // endregion checks
}
export default new PaymentPage();