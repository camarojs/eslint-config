const { parser } = require("typescript-eslint");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser,
            parserOptions: { EXPERIMENTAL_useProjectService: true },
        },
        // eslint-disable-next-line @stylistic/object-curly-newline
        rules: {
            // TODO: wait for typescript-eslint support eslint@v9
            // ...configs.recommendedTypeChecked,
            // ...configs.strictTypeChecked,
            // ...configs.stylisticTypeChecked,
            // eslint-disable-next-line @stylistic/object-curly-newline
        },

    },
];
