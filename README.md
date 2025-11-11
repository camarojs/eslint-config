# @camaro/eslint-config

A shareable ESLint configuration for modern TypeScript and JavaScript projects.

## Features

- 🚀 **ESLint 9+** flat config format
- 📦 **ESM-only** package
- 🎨 **Stylistic rules** with customized settings
- 🔧 **TypeScript support** with strict type-checking
- ⚡ **Pre-configured** for best practices

## Installation

```bash
npm install --save-dev eslint @camaro/eslint-config
```

For TypeScript projects, also install:

```bash
npm install --save-dev typescript-eslint
```

## Usage

### JavaScript Projects

Create an `eslint.config.js` file in your project root:

```js
import { common } from "@camaro/eslint-config";

export default [
    ...common,
    {
        ignores: ["dist/**", "build/**"],
    },
];
```

### TypeScript Projects

Create an `eslint.config.js` file in your project root:

```js
import { ts } from "@camaro/eslint-config";

export default [
    ...ts,
    {
        ignores: ["dist/**", "build/**"],
    },
];
```

## Configuration Details

### Common Configuration

The `common` export includes:

- **ESLint recommended rules** (`@eslint/js`)
- **Stylistic rules** with custom settings:
  - 4 spaces indentation
  - Double quotes
  - Semicolons required
  - Max line length: 120 characters
- **Custom rules**:
  - `eqeqeq`: Enforce strict equality (`===` and `!==`)
  - `prefer-const`: Prefer const declarations when variables are not reassigned

### TypeScript Configuration

The `ts` export includes all `common` rules plus:

- **TypeScript ESLint** recommended, strict, and stylistic type-checked rules
- **Parser configuration** for TypeScript with project service
- **Type-aware linting** enabled
- Applies only to `**/*.ts` files

## Customization

You can override any rule or add new rules:

```js
import { ts } from "@camaro/eslint-config";

export default [
    ...ts,
    {
        rules: {
            "@stylistic/max-len": ["error", { code: 100 }],
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
];
```

## NPM Scripts

Add ESLint scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Requirements

- Node.js 18.x or higher
- ESLint 9.x or higher
- TypeScript 5.x or higher (for TypeScript projects)
- typescript-eslint 8.x or higher (for TypeScript projects)

## License

MIT

## Repository

[https://github.com/camarojs/eslint-config](https://github.com/camarojs/eslint-config)
