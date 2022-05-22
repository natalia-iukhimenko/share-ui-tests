export default class CountryEnum {
    static Austria = new CountryEnum("at", "Austria");
    static Denmark = new CountryEnum("dk", "Denmark");
    static France = new CountryEnum("fr", "France");
    static Germany = new CountryEnum("de", "Germany");
    static Hungary = new CountryEnum("hu", "Hungary");
    static Italy = new CountryEnum("it", "Italy");
    static Netherlands = new CountryEnum("nl", "Netherlands");
    static Spain = new CountryEnum("es", "Spain");

    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
}