## Changelog

## 3.2.0
* Process error that can happen on `clearMocks` call;
* Run `clearMocks` at the end of suite instead of the beginning;
* Pass `suite` to `clearMocks` implementation;
* Bump dependencies;

## 3.1.4
* Add `diff` as a dependency like it should be.

## 3.1.3
* Update README.

## 3.1.2
* Fix `babel-register` load.

## 3.1.1

* Throw error when trying to use v8 coverage on incompatible node version.
* Rename project to `jest-runner-mocha-next`.

## 3.1.0

* Experimental support for `--coverageProvider v8` option.

## 3.0.0

* Update all deps (can be breaking change), remove lock files, fix tests. Should be more stable now.

## 2.1.2

* Fix error messages display.

## 2.1.1

* Remove packages which are not used any more.

## 2.1.0

* Use create-jest-runner from [patrickdawson](https://github.com/patrickdawson/jest-runner-mocha).

## 2.0.1

* Use npm-shrinkwrap.json to fix transitive deps and testing without yarn. ([#26](https://github.com/rogeliog/jest-runner-mocha/issues/26))

## 2.0.0

* Drop node 4 support, get rid of build process and babel.

## 1.1.2
* Replace setupFiles with setupFilesAfterEnv option.

## 1.1.1
* Only use clearMocks if option passed from jest.

## 1.1.0

* Add support for setupFiles jest option.
* Add support for custom clearMocks implementation and calls (see README). ([#24](https://github.com/rogeliog/jest-runner-mocha/issues/24))

## 1.0.0

* Fix Emitter issue. ([#21](https://github.com/rogeliog/jest-runner-mocha/issues/21))
* Allow using any version of mocha. ([#6](https://github.com/rogeliog/jest-runner-mocha/issues/6))

## 0.6.0

### Features
* Allow configuration of coverage babelrc usage ([#15](https://github.com/rogeliog/jest-runner-mocha/pull/15))
* Add ancestors to handle describe block nesting. ([#12](https://github.com/rogeliog/jest-runner-mocha/pull/12))

## 0.5.0

### Fixes

* Handle when an error occurs in a beforeEach block of a mocha test.
  ([#9](https://github.com/rogeliog/jest-runner-mocha/pull/9))
* Add support for file cliOptions arg.
  ([#8](https://github.com/rogeliog/jest-runner-mocha/pull/8))
