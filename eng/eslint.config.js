const common = require("../src/common");
const globals = require("globals");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    ...common,
    {
        files: ["src/**/*.js", "eng/**/*.js"],
        languageOptions: { globals: { ...globals.node } },
    },
];
