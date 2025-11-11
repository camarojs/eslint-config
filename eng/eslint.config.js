import { ts } from "@camaro/eslint-config";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
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
