import { type ConfigWithExtendsArray } from "@eslint/config-helpers";
import { type Config, defineConfig } from "eslint/config";
import eslintTS from "typescript-eslint";

import { type CommonOptions, defineCommonConfig } from "./common.ts";

export type TypescriptOptions = CommonOptions;

export const defineTypescriptConfig = (
    options: TypescriptOptions = {},
    ...configs: ConfigWithExtendsArray
): Config[] => {
    const { ...commonOptions } = options;
    const common = defineCommonConfig(commonOptions);

    return defineConfig(
        common,
        {
            files: ["**/*.{ts,tsx,mts,cts}"],
            extends: [
                eslintTS.configs.recommendedTypeChecked,
                eslintTS.configs.strictTypeChecked,
                eslintTS.configs.stylisticTypeChecked,
            ],
            languageOptions: {
                parser: eslintTS.parser,
                parserOptions: { projectService: true },
            },
            rules: {
                "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
                        allowAny: true,
                        allowBoolean: true,
                        allowNullish: true,
                        allowNumber: true,
                        allowRegExp: true,
                    },
                ],
            },
        },
        ...configs,
    );
};
