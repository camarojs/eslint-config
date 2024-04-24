const { parser } = require("typescript-eslint");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    {
        files: ["**/*.ts"],
        rules: {
            // TODO: wait for typescript-eslint support eslint@v9
            // ...configs.recommendedTypeChecked,
            // ...configs.strictTypeChecked,
            // ...configs.stylisticTypeChecked,
        },
        languageOptions: {
            parser,
            parserOptions: {
                EXPERIMENTAL_useProjectService: true,
            },
        },
    },
];
