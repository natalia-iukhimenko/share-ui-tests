class RegistrationPage {
    // region properties
    get #countryDropdown() {
        return cy.get("select[name = 'drivingCountryIsoCode']");
    }

    get #cityDropdown() {
        return cy.get("select[name = 'drivingLocation']");
    }

    get #languageDropdown() {
        return cy.get("select[name = 'language']");
    }

    get #emailInput() {
        return cy.get("input[name = 'email']");
    }

    get #passwordInput() {
        return cy.get("input[name = 'password']");
    }

    get #pinInput() {
        return cy.get("input[name = 'pin']");
    }

    get #salutationDropdown() {
        return cy.get("select[name = 'salutation']");
    }

    get #firstNameInput() {
        return cy.get("input[name = 'firstName']");
    }

    get #lastNameInput() {
        return cy.get("input[name = 'lastName']");
    }

    get #birthDayDropdown() {
        return cy.get("#camelot-select-birth-date-day");
    }

    get #birthMonthDropdown() {
        return cy.get("#camelot-select-birth-date-month");
    }

    get #birthYearDropdown() {
        return cy.get("#camelot-select-birth-date-year");
    }

    get #birthPlaceInput() {
        return cy.get("input[name = 'birthPlace']");
    }

    get #streetInput() {
        return cy.get("input[name = 'addressStreet']");
    }

    get #additionalAddressInfoInput() {
        return cy.get("input[name = 'addressAdditionalStreet']");
    }

    get #zipCodeInput() {
        return cy.get("input[name = 'addressAdditionalStreet']");
    }

    get #cityInput() {
        return cy.get("input[name = 'addressCity']");
    }

    get #mobilePhoneCodeDropdown() {
        return cy.get("#mobilePhone select");
    }

    get #mobilePhoneNumberInput() {
        return cy.get("input[name = 'mobilePhone']");
    }

    get #promotionCodeInput() {
        return cy.get("input[name = 'promotionCode']");
    }

    get #termsAndConditionsCheckbox() {
        return cy.get("input[id ^= 'camelot-checkbox']").eq(0);
    }

    get #rewardsTermsAndConditionsCheckbox() {
        return cy.get("input[id ^= 'camelot-checkbox']").eq(1);
    }

    get #discountsSubscriptionCheckbox() {
        return cy.get("input[id ^= 'camelot-checkbox']").eq(2);
    }

    get #offersSubscriptionCheckbox() {
        return cy.get("input[id ^= 'camelot-checkbox']").eq(3);
    }

    get #registerNowButton() {
        return cy.get("#registration-save-button");
    }
    // endregion properties

    // region actions
    selectCountry(countryCode) {
        this.#countryDropdown.select(countryCode);
        return this;
    }

    selectCity(name) {
        this.#cityDropdown.select(name);
        return this;
    }

    selectLanguage(name) {
        this.#languageDropdown.select(name);
        return this;
    }

    setEmail(email) {
        this.#emailInput.clear().type(email);
        return this;
    }

    setPassword(password) {
        this.#passwordInput.clear().type(password);
        return this;
    }

    setPin(pin) {
        this.#pinInput.clear().type(pin);
        return this;
    }

    selectSalutation(value) {
        this.#salutationDropdown.select(value);
    }

    setFirstName(firstName) {
        this.#firstNameInput.clear().type(firstName);
        return this;
    }

    setLastName(lastName) {
        this.#lastNameInput.clear().type(lastName);
        return this;
    }

    selectBirthDay(day) {
        this.#birthDayDropdown.select(day);
    }

    selectBirthMonth(month) {
        this.#birthMonthDropdown.select(month);
    }

    selectBirthYear(year) {
        this.#birthYearDropdown.select(year);
    }

    setBirthPlace(value) {
        this.#birthPlaceInput.clear().type(value);
        return this;
    }

    setStreet(value) {
        this.#streetInput.clear().type(value);
        return this;
    }

    setAdditionalAddressInfo(value) {
        this.#additionalAddressInfoInput.clear().type(value);
        return this;
    }

    setZipCode(zipCode) {
        this.#zipCodeInput.clear().type(zipCode);
        return this;
    }

    setCity(city) {
        this.#cityInput.clear().type(city);
        return this;
    }

    selectMobilePhoneCode(code) {
        this.#mobilePhoneCodeDropdown.select(code);
        return this;
    }

    setMobilePhoneNumber(number) {
        this.#mobilePhoneNumberInput.clear().type(number);
        return this;
    }

    setPromotionCode(code) {
        this.#promotionCodeInput.clear().type(code);
        return this;
    }

    tickTermsAndConditionsCheckbox() {
        this.#termsAndConditionsCheckbox.click();
        return this;
    }

    tickRewardsTermsAndConditionsCheckbox() {
        this.#rewardsTermsAndConditionsCheckbox.click();
        return this;
    }

    tickDiscountsSubscriptionCheckbox() {
        this.#discountsSubscriptionCheckbox.click();
        return this;
    }

    tickOffersSubscriptionCheckbox() {
        this.#offersSubscriptionCheckbox.click();
        return this;
    }

    doRegister() {
        this.#registerNowButton.click();
    }
    // endregion actions

    // region checks
    checkSelectedCountry(expectedValue) {
        this.#countryDropdown.should("have.value", expectedValue);
        return this;
    }

    checkAvailableCities(expectedValues) {
        this.#cityDropdown.find("option")
            .filter((idx, el) => el.getAttribute("value").length !== 0)
            .each((item, index, list) => {
                cy.wrap(item).should("have.text", expectedValues[index]);
            })
        return this;
    }

    checkAvailableLanguage(expectedValue) {
        this.#languageDropdown.find("option").should("contain.text", expectedValue);
        return this;
    }

    checkSelectedMobileCode(expectedValue) {
        this.#mobilePhoneCodeDropdown.should("have.value", expectedValue);
        return this;
    }

    checkPageHasLink(expectedLink) {
        cy.get(`a[href *= "${expectedLink}"]`).should("be.visible");
        return this;
    }
    // endregion checks
}
export default new RegistrationPage();