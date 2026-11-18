# Changelog

## [0.3.0](https://github.com/camarojs/camaro/compare/eslint-config-v0.2.0...eslint-config-v0.3.0) (2026-03-15)


### ⚠ BREAKING CHANGES

* **eslint-config:** globals and files options removed from config API, consumers need to handle globals and file matching directly via ESLint languageOptions

### Features

* **eslint-config:** remove globals dep and refactor config API ([#45](https://github.com/camarojs/camaro/issues/45)) ([c81eced](https://github.com/camarojs/camaro/commit/c81eced2f53c91952c30bbeea08a727bd0346933))

## [0.2.0](https://github.com/camarojs/camaro/compare/eslint-config-v0.1.4...eslint-config-v0.2.0) (2026-03-11)


### ⚠ BREAKING CHANGES

* **eslint-config:** eslint peer dependency now requires !!:s^10.0.3. The common export has been replaced with defineCommonConfig() function.

### Features

* **eslint-config:** upgrade to ESLint 10 and refactor config API ([29cb456](https://github.com/camarojs/camaro/commit/29cb456267c0b8744d812a305b2b44b2a03394f0))

## [0.1.4](https://github.com/camarojs/camaro/compare/eslint-config-v0.1.3...eslint-config-v0.1.4) (2026-02-09)


### Features

* **eslint-config:** add additional rules for template expression restrictions in TypeScript config ([#40](https://github.com/camarojs/camaro/issues/40)) ([0a2565d](https://github.com/camarojs/camaro/commit/0a2565d0cfd0e2fa3b968c552ba18a30865dd7bb))

## [0.1.3](https://github.com/camarojs/camaro/compare/eslint-config-v0.1.2...eslint-config-v0.1.3) (2026-02-09)


### Features

* **eslint-config:** update common and typescript lint configurations to use defineConfig ([#36](https://github.com/camarojs/camaro/issues/36)) ([11719df](https://github.com/camarojs/camaro/commit/11719df051cade69427c6ddfdad79e0558bcf372))

## [0.1.2](https://github.com/camarojs/camaro/compare/eslint-config-v0.1.1...eslint-config-v0.1.2) (2026-01-30)


### Features

* **eslint-config:** enable jsx default ([#33](https://github.com/camarojs/camaro/issues/33)) ([7f5a8ff](https://github.com/camarojs/camaro/commit/7f5a8ffe6a53d2110c38e2deeb95f6c81c6fe006))

## [0.1.1](https://github.com/camarojs/camaro/compare/eslint-config-v0.1.0...eslint-config-v0.1.1) (2026-01-23)


### Features

* **eslint-config:** add consistent-type-imports rule ([#30](https://github.com/camarojs/camaro/issues/30)) ([d6aac8b](https://github.com/camarojs/camaro/commit/d6aac8b1c99aa4a8bafe9d18dfc3f82d46063e48))

## [0.1.0](https://github.com/camarojs/camaro/compare/eslint-config-v0.0.1...eslint-config-v0.1.0) (2025-12-16)


### ⚠ BREAKING CHANGES

* **eslint:** restructure exports ([#10](https://github.com/camarojs/camaro/issues/10))

### Features

* **camaro:** implement dependency injection ([#9](https://github.com/camarojs/camaro/issues/9)) ([a307ab7](https://github.com/camarojs/camaro/commit/a307ab72398c15ffdd4bfb6f3dbd9c2343f97f3d))
* **eslint:** restructure exports ([#10](https://github.com/camarojs/camaro/issues/10)) ([aa18575](https://github.com/camarojs/camaro/commit/aa18575da5b27121b5d4cbfae941863906960aa6))
