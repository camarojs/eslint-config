import eslintJS from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import type { TSESLint } from "@typescript-eslint/utils";
import { Linter } from "eslint";
import eslintTS from "typescript-eslint";

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
            "eqeqeq": "error",
            "prefer-const": ["error", { destructuring: "all" }],

            "@stylistic/array-bracket-newline": "error",
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/function-call-spacing": ["error", "never"],
            "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
            "@stylistic/max-len": ["error", { code: 120 }],
            "@stylistic/object-curly-newline": "error",
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
        rules: {
            ...eslintTsRules,
            "@typescript-eslint/restrict-template-expressions": "error", // override strict rule options
        },
    },
];
