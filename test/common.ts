import { ESLint, Linter } from "eslint";
import { ts } from "../src/index";
import assert from "node:assert";
import { describe, it } from "node:test";

const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: ts as unknown as Linter.Config,
    overrideConfig: { rules: { "@typescript-eslint/no-unused-vars": "off" } },
    allowInlineConfig: false,
});

export interface TestConfig {
    ruleId: string;
    invalidCount: number;
    errorMessages: string[];
}

export const runTests = ({ ruleId, invalidCount, errorMessages }: TestConfig) => {
    describe(ruleId, () => {
        it("should be invalid cases", async () => {
            const results = await eslint.lintFiles(`test/${ruleId}/invalid.test.ts`);
            assert.strictEqual(results.length, 1);

            const result = results[0];
            assert.strictEqual(result?.errorCount, invalidCount);
            assert.strictEqual(result.messages.length, errorMessages.length);

            result.messages.forEach((message, index) => {
                assert.strictEqual(message.severity, 2);
                assert.strictEqual(message.ruleId, ruleId);
                assert.strictEqual(message.message, errorMessages[index]);
            });
        });

        it("should be valid cases", async () => {
            const results = await eslint.lintFiles(`test/${ruleId}/valid.test.ts`);
            assert.strictEqual(results.length, 1);

            const result = results[0];
            assert.strictEqual(result?.errorCount, 0);
        });
    });
};
