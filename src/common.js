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
    customized,
    eslint.configs.recommended,
    {
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
            "curly": "error",
            "dot-notation": "error",
            "no-var": "error",
            "prefer-const": "error",
            "prefer-template": "error",
            "sort-keys": ["error", "asc", { allowLineSeparatedGroups: true }],
            "symbol-description": "error",
            // #endregion

            // #region Stylistic
            "@stylistic/array-bracket-newline": ["error", { multiline: true }],
            "@stylistic/function-call-argument-newline": ["error", "consistent"],
            "@stylistic/function-call-spacing": "error",
            "@stylistic/function-paren-newline": ["error", "multiline"],
            "@stylistic/implicit-arrow-linebreak": "error",
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
            "@stylistic/no-extra-semi": "error",
            "@stylistic/object-curly-newline": ["error", { multiline: true }],
            "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
            "@stylistic/semi-style": "error",
            "@stylistic/switch-colon-spacing": "error",
            // #endregion
        },
    },
];
