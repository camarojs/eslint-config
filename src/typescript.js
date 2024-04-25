const { parser } = require("typescript-eslint");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser,
            parserOptions: {
                // eslint-disable-next-line camelcase
                EXPERIMENTAL_useProjectService: true,
            },
        },
        rules: {
            // TODO: wait for typescript-eslint support eslint@v9
            // ...configs.recommendedTypeChecked,
            // ...configs.strictTypeChecked,
            // ...configs.stylisticTypeChecked,
        },

    },
];
