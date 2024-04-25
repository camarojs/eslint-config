const stylistic = require("@stylistic/eslint-plugin");
const eslint = require("@eslint/js");
const globals = require("globals");

const customized = stylistic.configs.customize({
    indent: 4,
    jsx: false,
    quotes: "double",
    semi: true,
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
        rules: {
            // #region Possible Problems
            "array-callback-return": "error",
            "no-await-in-loop": "error",
            "no-duplicate-imports": "error",
            "no-promise-executor-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "error",
            "no-unmodified-loop-condition": "error",
            "no-unreachable-loop": "error",
            "no-useless-assignment": "error",
            "require-atomic-updates": "error",
            // #endregion

            // #region Suggestions
            "camelcase": "error",
            "dot-notation": "error",
            "no-var": "error",
            "prefer-const": "error",
            "sort-keys": ["error", "asc", { allowLineSeparatedGroups: true }],
            "symbol-description": "error",
            // #endregion
        },

    },
];
