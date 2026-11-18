import { type ConfigWithExtendsArray, type ExtendsElement } from "@eslint/config-helpers";
import eslintJS from "@eslint/js";
import stylistic, { type StylisticCustomizeOptions } from "@stylistic/eslint-plugin";
import { type Config, defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const defaultStylisticOptions: StylisticCustomizeOptions = {
    indent: 4,
    quotes: "double",
    semi: true,
    jsx: false,
};

export interface CommonOptions extends StylisticCustomizeOptions {
    extends?: ExtendsElement;
}

export const defineCommonConfig = (options: CommonOptions = {}, ...configs: ConfigWithExtendsArray): Config[] => {
    const { ...stylisticOptions } = options;
    const styleLintConfig = stylistic.configs.customize({
        ...defaultStylisticOptions,
        ...stylisticOptions,
    });

    return defineConfig(
        eslintJS.configs.recommended,
        styleLintConfig,
        {
            plugins: {
                "simple-import-sort": simpleImportSort,
            },
            rules: {
                "eqeqeq": "error",
                "prefer-const": ["error", { destructuring: "all" }],

                "@stylistic/array-bracket-newline": "error",
                "@stylistic/array-element-newline": ["error", "consistent"],
                "@stylistic/function-call-spacing": ["error", "never"],
                "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
                "@stylistic/max-len": ["error", { code: 120 }],
                "@stylistic/object-curly-newline": "error",

                "simple-import-sort/exports": "error",
                "simple-import-sort/imports": "error",
            },
        },
        ...configs,
    );
};
