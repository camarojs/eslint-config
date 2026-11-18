import globals from "globals";

import { defineTypescriptConfig } from "../src/typescript.ts";

export default defineTypescriptConfig(
    {},
    {
        files: ["**/*.ts"],
        languageOptions: {
            globals: globals.node,
        },
    },
    {
        ignores: ["lib/**/*"],
    },
    {
        ignores: ["eng/**/*"],
        rules: {
            "no-restricted-exports": [
                "error",
                {
                    restrictDefaultExports: { direct: true },
                },
            ],
        },
    },
);
