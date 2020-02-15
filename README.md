# Jest CI

CLI for [Jest](https://jestjs.io/) JS testing framework, which run `--coverage`
only on first CI job.

Checking code coverage uses a lot of resources, but the result doesn’t depend
on Node.js version. You can check coverage only on first CI job and speed up
other jobs by run tests without code coverage.

<a href="https://evilmartians.com/?utm_source=jest-ci">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
      alt="Sponsored by Evil Martians" width="236" height="54">
</a>


## Usage

1. Add both `jest` and `jest-ci` to dependencies.

   ```sh
   npm i --save-dev jest jest-ci
   ```

2. Use `jest-ci` instead of `jest` in `test` script or CI config:

   ```diff
     "scripts": {
   -   "test": "jest --coverage && eslint ."
   +   "test": "jest-ci --coverage && eslint ."
     }
   ```
