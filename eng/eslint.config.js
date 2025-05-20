const { ts } = require("@camaro/eslint-config");
const globals = require("globals");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    ...ts,
    { ignores: ["lib/**/*"] },
    {
        files: ["eng/**/*.js"],
        languageOptions: { globals: { ...globals.node } },
    },
    {
        files: ["test/**/*.test.ts"],
        rules: {
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
];
