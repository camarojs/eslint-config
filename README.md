# @camaro/eslint-config

A shareable ESLint configuration preset for modern JavaScript and TypeScript projects.

## Features

- 🚀 Modern ESLint 10+ support with flat config
- 📘 TypeScript support with type-checked rules
- 🎨 Stylistic rules for consistent code formatting
- 📦 Import sorting via `eslint-plugin-simple-import-sort`
- 🌐 Configurable global categories (e.g. `browser`, `node`)
- ⚡ Zero-config experience with sensible defaults
- 📦 Modular design with optional dependencies

## Installation

```bash
npm install --save-dev @camaro/eslint-config eslint
```

For TypeScript support:

```bash
npm install --save-dev @camaro/eslint-config eslint typescript-eslint
```

## Usage

### Basic Configuration (JavaScript)

Create `eslint.config.js`:

```javascript
import { defineCommonConfig } from '@camaro/eslint-config';

export default defineCommonConfig();
```

### With Options

```javascript
import { defineCommonConfig } from '@camaro/eslint-config';

export default defineCommonConfig({
    globals: ['browser', 'node'],
    indent: 4,
    quotes: 'double',
    semi: true,
    jsx: false,
});
```

### TypeScript Configuration

Create `eslint.config.js`:

```javascript
import { defineTypescriptConfig } from '@camaro/eslint-config/typescript';

export default defineTypescriptConfig({
    files: ['**/*.ts', '**/*.tsx'],
});
```

## Configuration Details

### Common Config

The base configuration (`defineCommonConfig`) includes:

- ESLint recommended rules
- Stylistic rules (code formatting, line breaks, spacing)
- Import sorting rules (`simple-import-sort/imports`, `simple-import-sort/exports`)
- Quality rules (`eqeqeq`, `prefer-const`)
- Configurable globals via category names (e.g. `browser`, `node`, `es2021`)
- Default stylistic options: 4-space indentation, double quotes, semicolons required, JSX disabled

### TypeScript Config

The TypeScript configuration (`defineTypescriptConfig`) extends the common config and adds:

- TypeScript ESLint recommended, strict, and stylistic type-checked rules
- Type-aware linting with `projectService`
- Consistent type import rules (`inline-type-imports`)
- Template expression restriction rules with sensible defaults

## Rules

### Stylistic Rules

- `@stylistic/array-bracket-newline`: Enforce consistent newlines in array brackets
- `@stylistic/array-element-newline`: Enforce consistent newlines between array elements
- `@stylistic/function-call-spacing`: Enforce no spacing between function names and invocations
- `@stylistic/function-paren-newline`: Enforce multiline function arguments
- `@stylistic/max-len`: Enforce 120 character line limit
- `@stylistic/object-curly-newline`: Enforce consistent newlines in object brackets

### Import Sorting Rules

- `simple-import-sort/imports`: Enforce sorted import declarations
- `simple-import-sort/exports`: Enforce sorted export declarations

### Quality Rules

- `eqeqeq`: Require strict equality operators
- `prefer-const`: Prefer `const` declarations

### TypeScript Rules

- `@typescript-eslint/consistent-type-imports`: Enforce consistent type import style (inline-type-imports)
- `@typescript-eslint/restrict-template-expressions`: Restrict template literal expressions with sensible defaults

## Requirements

- **eslint**: >= 10.0.3
- **typescript-eslint**: >= 8.57.0 (optional, only needed for TypeScript projects)

## License

MIT

## Development

This package is maintained independently in [camarojs/eslint-config](https://github.com/camarojs/eslint-config).
Use the current Node.js LTS release, as CI does.

```bash
npm ci
npm run lint
npm test
npm run build
npm pack --dry-run
```

The lint command checks spelling and both source and test types before running ESLint.
The build produces the JavaScript and declaration files in `lib/`.

`npm ci` also installs Husky hooks for local development:

- Before a commit, lint-staged checks spelling in staged files.
- Commit messages must follow Conventional Commits.
- Before a push, the full lint command runs.

CI, production-only installs, and `HUSKY=0` skip hook installation.

## Releases

Release Please tracks this root package and creates `vX.Y.Z` tags.
Configure the repository's `RELEASE_PLEASE_PAT` Actions secret for release PRs,
and update the npm trusted publisher for `@camaro/eslint-config` to use
`camarojs/eslint-config` and the `release.yml` workflow.
Tag pushes build and publish the package with npm provenance.
Version `0.3.0` is already published; the migration does not republish it.
