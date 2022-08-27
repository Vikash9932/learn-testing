#### Types of Tests

- **Unit tests**
  - Tests one unit of code in isolation
- **Integration tests**
  - How multiple units work together
- **Functional Tests**
  - Tests a particular function of software
- **Acceptance/End-to-end (E2E) Tests**
  - Use actual browser and server (Cypress, Selenium)

**Unit Testing**

Isolated: mock dependencies, test internals

- Very Easy to pinpoint failures

- Further from how users interact with software
- More likely to break with refactoring

**Functional Testing**

Includes all relevant units, tests behaviour

- Close to how users interact with software
- Robust tests

- More difficult to debug failing tests

**Advantages of Functional Testing outweigh Unit Testing**

#### Unit Testing Functions

- Functions seperate from components
  - Used by several components
  - Complex logic
- Unit test if
  - Complex logic difficult to test via functional tests
  - Too many edge cases

#### When to unit test?

- could be covered by functional tests on button
- For more complicated functions, unit tests help with:
  - covering all possible edge cases
  - determining what caused functional tests to fail
- Issue with functional tests:
  - high-level makes them resistant to refactors
  - high-level makes them difficult to diagnose

# React Testing Library

- Not just a library, also a philosophy ('opinionated')

  - Test your software the way users actually use it
    - not internal implementation
  - Find elements by accessibility markers, not test IDs

- Provides virtual DOM for tests

- React Testing Library helps with

  - rendering components into virtual DOM
  - searching virtual DOM
  - Interacting with virtual DOM

- Needs a test runner - `Jest`
  - Find tests, run them, make assertions
- Jest
  - is recommended by Testing Library
  - comes with create-react-app

### What React Testing Library does

- Creates virtual DOM for testing
  - and utilities for interacting with DOM
- Allows testing without a browser

# Jest

- Test runner that
  - Finds tests
  - Runs tests
  - Determines whether tests pass or fail

### render

- Create virtual DOM for argument JSX
- Access virtual DOM via `screen` global

### expect

- `expect`

  - Jest global, starts the assertion
  - assertion, causes test to succeed or fail

- expect argument

  - subject of the assertion
  - e.g. `expect(linkElement)`

- matcher

  - type of assertion
  - this matcher comes from Jest-DOM
  - e.g. `toBeInTheDocument()`, `toBe('Hello')`, `toHaveLength(7)`, `toBeVisible()`, `toBeChecked()`

- matcher argument
  - refines matcher
  - e.g. ('Hello'), (7)

### jest-dom

- comes with create-react-app
- `src/setupTests.js` imports it before each test, makes matchers available
- [Link](https://github.com/testing-library/jest-dom) for custom matchers

### Jest Watch mode

- watch for changes in files since last commit
- only run tests related to these files
- No changes? No tests
  - Type `a` to run all tests

### Jest working

- `describe` method to group tests
- global `test` method has two arguments:
  - string description
  - test function
- Test fails if error is thrown when running function
  - assertion throws errors when expectation fails which fails the test
- No error -> tests pass
  - Empty test passes!

## TDD: Test-Driven Development

- Write tests before writing code
  - then write code accroding to "spec" set by tests
- "red-green" testing
  - Tests fail before code is written

**Steps:**

- Write "shell" function - in the components
- Write tests
- Tests fail
- Write code
- Tests pass!

**Advantages**

- Makes a huge difference in how it feels to write tests
  - part of the coding process, not a "chore" to do at the end
- More efficient
  - Re-run tests "for free" after changes (regression testing)

## BDD: Behaviour-Driven Development

- Meaning how users actually use the app
- Testing library encourages testing _behaviour_ over _implementation_
- involves collaboration between lots of roles
  - developers, QA, business partners, etc
- defines process for different groups to interact

## Accessibility and Finding Elements

- Testing Library recommends finding elements by accessibility handles [Guide](https://testing-library.com/docs/guide-which-query/)
- create-react-app's example test uses `getByText` - (non-interactive elements like div, span, p)
  - ok for non-interactive elements
  - **better:** `getByRole`
  - e.g. const linkElement = screen.getByRole('link', { name: /learn react/i });
- Roles documentation [here](https://www.w3.org/TR/wai-aria#role_definitions)
  - some elements have built-in roles: `button`, `a`

## ESLint

- Popular linter for JavaScript
  - Linter: analyzes static text and marks syntax that breaks rules
    - Linters address format and style
  - Static: analyzes code as written, not what happes when code is run
- Linting keeps code style consistent
  - especially for multi-eng projects
- Also catches errors in code
  - using variable before defining
  - importing from nonexisting files

### ESLint Plugins

- Plug-ins extend ESLint
- Testing Library and jest-dom ESLint plugins
  - Enforce best practices
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
- Preferred rules and plugins [Bonnie](https://github.com/bonnie/bonniedotdev/blob/master/client/.eslintrc.json)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# THE PLAN

- Start with very simple React
  - focus on Testing Library syntax
- First app: not much of an app
  - changing button color, disabling button with checkbox
  - introduce: testing interactions that affect DOM, unit testing functions
- Build up to more complex functionality and tests
- Second App: design and order an ice-cream sundae
  - testing more complex user interactions, interactions between components
  - mocking server responses with Mock Service Worker
  - testing async functionality

# Lecture code

[Link](https://github.com/bonnie/udemy-TESTING-LIBRARY/tree/master/lecture-code)
