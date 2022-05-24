# UI tests for a car sharing web application

### To run tests:

1. Clone this repository:
```sh
git clone https://github.com/natalia-iukhimenko/share-ui-tests.git
```

2. Install Node packages:
```sh
npm install
```

3. Navigate to 'share-ui-tests' directory and execute the following command to run tests in a headless mode:
```sh
npm run cy:run
```

4. By default, the tests are executed on "german" version of the application. To run them for France, execute
```sh
npm run cy:run --env country_code=fr --browser=firefox
```
