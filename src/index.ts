import stylistic from "@stylistic/eslint-plugin";
import eslintJS from "@eslint/js";
import { Linter } from "eslint";
import eslintTS from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";

const styleLint = stylistic.configs.customize({
    indent: 4,
    jsx: false,
    quotes: "double",
    semi: true,
});

export const common: Linter.Config[] = [
    eslintJS.configs.recommended,
    styleLint,
    {
        rules: {
            "prefer-const": ["error", { destructuring: "all" }],

            "@stylistic/array-bracket-newline": "error",
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/max-len": ["error", { code: 120 }],
        },
    },
];

const eslintTsRules = [
    ...eslintTS.configs.recommendedTypeChecked,
    ...eslintTS.configs.strictTypeChecked,
    ...eslintTS.configs.stylisticTypeChecked,
].reduce<TSESLint.FlatConfig.Rules>((acc, config) => ({ ...acc, ...config.rules }), {});

export const ts: TSESLint.FlatConfig.ConfigArray = [
    ...common,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: eslintTS.parser,
            parserOptions: { projectService: true },
        },
        plugins: { "@typescript-eslint": eslintTS.plugin },
        rules: { ...eslintTsRules },
    },
];
