const { ts } = require("..");
const globals = require("globals");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    ...ts,
    {
        ignores: ["lib/**/*"],
    },
    {
        files: ["eng/**/*.js"],
        languageOptions: { globals: { ...globals.node } },
    },
    {
        files: ["src/**/*.ts"],
    },
];
