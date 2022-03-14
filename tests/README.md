# Tests

## Overview
This repository uses [Jest](https://jestjs.io/) to run unit tests on the helper classes.

## Running the tests
### Running all tests
Run the following command line from the root folder.
```
npm run test
```

### Running specifical tests
Run the following command line from the root folder.
```
# Simple run
npm  test -- -t "Name of the test"

# Display console logs
npm  test -- --verbose false -t "Name of the test"
```

## Misc
### Linked Lists
For simplicity, we convert linked lists into arrays before running some of the tests.
