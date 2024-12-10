# Computer store checkout

## Get Started

### Technology and Tools

- Node: v20.17.0
- npm: v10 (to manage dependencies)
- Typescript: v5
- Jest: v29 (to write unit tests)
- eslint: v9 (to validate code linting)

### Steps

1. Clone the repository
2. Go inside `zlr-computer-store` folder
3. Do `npm install`. This will install all the require dependencies.
4. Use `npm run start` to start the server locally
5. Use `npm run test` to run unit tests and display result with coverage
6. Use `npm run build` to create build (It will remove existing dist folder if it exists)
7. Use `npm run production` to run code in environments

### Folder structure overview

1. `src/utils/constants` contains the data of products as well as offers.
2. `src/services/` contains business logic
3. `src/repositories` contains data operations
4. `test/` contains unit tests
