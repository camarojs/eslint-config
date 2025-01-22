const stylistic = require("@stylistic/eslint-plugin");
const eslint = require("@eslint/js");

const customized = stylistic.configs.customize({
    indent: 4,
    jsx: false,
    quotes: "double",
    semi: true,
});

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    eslint.configs.all,
    stylistic.configs["all-flat"],
    customized,
    {
        rules: {
            // #region eslint rules
            "no-await-in-loop": "off",
            "one-var": ["error", "never"],
            "sort-keys": ["error", "asc", { allowLineSeparatedGroups: true }],
            // #endregion

            // #region stylistic rules
            "@stylistic/array-bracket-newline": ["error", { multiline: true }],
            "@stylistic/array-element-newline": ["error", { consistent: true }],
            "@stylistic/function-call-argument-newline": ["error", "consistent"],
            "@stylistic/function-paren-newline": ["error", "multiline"],
            "@stylistic/max-len": [
                "error", {
                    code: 120,
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                },
            ],
            "@stylistic/object-curly-newline": ["error", { multiline: true }],
            "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
            // #endregion
        },
    },
];
