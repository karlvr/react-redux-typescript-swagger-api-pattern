# React + Redux + OAuth2 + Swagger Codegen API Client + TypeScript pattern

This is a pattern for using React with Redux to build an app using a Swagger Codegen API Client in TypeScript. This is based upon my pattern
for building [React + Redux + Typescript](https://github.com/karlvr/react-redux-typescript-pattern). Please refer to
that pattern first for an introduction to the approach.

For the API example we use the [Swagger Petstore](http://petstore.swagger.io/) API, which includes a Swagger API definition that we use to generate the API client, using [openapi-generator](https://github.com/openapitools/openapi-generator).

We also include an OAuth 2 authentication example. Note that this is independent of the API example!

You can also read the [original create-react-app README](README-CRA.md)

### Layout

We add an `auth` module and an `api` module:

* `src/modules/auth` the auth module
* `src/modules/petstore` an example module that displays a list of pets, and interacts with the API.
* `src/modules/api` the root file for the API module

Within each of these modules we follow the sample template layout as in the original pattern, with the addition
of:

* `functions.ts` module functions
* `sagas.ts` async redux-saga code
* `selectors.ts` Redux state selectors
* `types.ts` module type definitions

## Dependencies

In addition to the base [React + Redux + Typescript pattern](https://github.com/karlvr/react-redux-typescript-pattern) we add
the following dependencies:

* [redux-saga](https://redux-saga.js.org) (powerful async processing)

## Running

You can run this project by cloning the git repo, then cd into the project folder.

First install the required node modules:

```
npm install
```

You'll then need to also install dependencies for the API module:

```
pushd gen/api && npm install && popd
```

Then run it using:

```
npm start
```

## Setup

Start with the setup of the base [React + Redux + Typescript pattern](https://github.com/karlvr/react-redux-typescript-pattern) and then
continue...

Install more dependencies:

```
npm install --save redux-saga
```

### API

This pattern uses the [Swagger Petstore](http://petstore.swagger.io/) example API to demonstrate using [openapi-generator](https://github.com/openapitools/openapi-generator) to generate an API module.

```
npm install --save-dev @openapitools/openapi-generator-cli
```

We generate the API client code using an npm script, configured in `package.json` and using configuration from `api.json`. You can run it to regenerate the API client:

```
npm run api
```

Note that script runs openapi-generator and then runs `npm install` in the resulting package, so it is ready to be used.

We generate the code into the `gen/api` folder. Note that we also add `gen` to the ignore list in `tsconfig.json` so that TypeScript doesn't try to compile it as part of our code, as we will be instead be installing it as a node module.

We then install this code into our project:

```
npm install --save gen/api
```
