### Improvements

- Implement localized unit tests for each component
- Create integration tests that test the app as a whole.
- Refactor types to be tighter, stricter, and more verbose
- Create a context and reducer to hold a global state. This would help prevent prop drilling and reduce the amount of props and typing we would have to setup in our individual components.
- Setup a CI pipeline that runs the test suites through Browserstack to check multiple supports browsers and devices.
- Move all secrets to an .env file

### Potential Browser Conflicts

We're using Babel for Transpiling in order to support a wider array of browsers.

If we were lacking this transpiling, we'd want to include polyfills in order to avoid erroring on missing features. These features ranging from es6 syntax, promises, etc.
