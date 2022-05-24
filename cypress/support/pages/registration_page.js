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
        return cy.get("input[name = 'addressZipCode']");
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

    get #requiredCheckboxes() {
        return cy.get("input[type = 'checkbox'][required]");
    }

    get #registerNowButton() {
        return cy.get("#registration-save-button");
    }
    // endregion properties

    // region actions
    selectCity(name) {
        this.#cityDropdown.then(($dropdown) => {
            if ($dropdown.text() !== name) {
                cy.url().then(url => {
                    this.#cityDropdown.select(name);
                    cy.url().should("not.eq", url);
                })
            }
        })
        return this;
    }

    setEmail(email) {
        cy.wait(500);
        this.#emailInput.type(email);
        return this;
    }

    setPassword(password) {
        this.#passwordInput.type(password);
        return this;
    }

    setPin(pin) {
        this.#pinInput.type(pin);
        return this;
    }

    setCredentials(email, password, pin) {
        return this.setEmail(email)
            .setPassword(password)
            .setPin(pin);
    }

    selectSalutation(optionIndex) {
        this.#salutationDropdown.select(optionIndex);
        return this;
    }

    setFirstName(firstName) {
        this.#firstNameInput.type(firstName);
        return this;
    }

    setLastName(lastName) {
        this.#lastNameInput.type(lastName);
        return this;
    }

    setFullName(firstName, lastName) {
        return this.setFirstName(firstName)
            .setLastName(lastName);
    }

    selectBirthDay(day) {
        this.#birthDayDropdown.select(day);
        return this;
    }

    selectBirthMonth(month) {
        this.#birthMonthDropdown.select(month);
        return this;
    }

    selectBirthYear(year) {
        this.#birthYearDropdown.select(year);
        return this;
    }

    selectBirthDate(day, month, year) {
        return this.selectBirthDay(day)
            .selectBirthMonth(month)
            .selectBirthYear(year);
    }

    setBirthPlace(value) {
        this.#birthPlaceInput.type(value);
        return this;
    }

    setStreet(value) {
        this.#streetInput.type(value);
        return this;
    }

    setZipCode(zipCode) {
        this.#zipCodeInput.type(zipCode);
        return this;
    }

    setCity(city) {
        this.#cityInput.type(city);
        return this;
    }

    setMobilePhoneNumber(number) {
        this.#mobilePhoneNumberInput.type(number);
        return this;
    }

    tickAllRequiredCheckboxes() {
        this.#requiredCheckboxes.check({force: true});
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