const tsEslint = require("typescript-eslint");
const common = require("./common");

const typescriptRules = [
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
].reduce((acc, config) => ({ ...acc, ...config.rules }), {});

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    ...common,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsEslint.parser,
            parserOptions: { projectService: true },
        },
        plugins: { "@typescript-eslint": tsEslint.plugin },
        rules: { ...typescriptRules },
    },
];
