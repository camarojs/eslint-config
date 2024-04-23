const { parser } = require("typescript-eslint");
const common = require("./common");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    ...common,
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
