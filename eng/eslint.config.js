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
        files: ["test/**/*.ts"],
    },
];
