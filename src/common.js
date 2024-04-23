const stylistic = require("@stylistic/eslint-plugin");
const eslint = require("@eslint/js");
const globals = require("globals");

const customized = stylistic.configs.customize({
    jsx: false,
    semi: true,
    quotes: "double",
    indent: 4,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    customized,
    eslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
