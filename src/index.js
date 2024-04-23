const stylistic = require("@stylistic/eslint-plugin");
const eslint = require("@eslint/js");
const globals = require("globals");

const customized = stylistic.configs.customize({
    jsx: false,
    semi: true,
    quotes: "double",
    indent: 4,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
    {
        rules: {
            ...eslint.configs.recommended.rules,
            ...customized.rules,
        },
        plugins: {
            "@stylistic": stylistic,
        },
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];

module.exports = config;
