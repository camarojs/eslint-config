import { ESLint, Linter } from "eslint";
import { ts } from "../src/index";
import assert from "node:assert";
import { describe, test } from "node:test";
import { TestConfig } from "./config";

const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: ts as unknown as Linter.Config,
    overrideConfig: { rules: { "@typescript-eslint/no-unused-vars": "off" } },
    allowInlineConfig: false,
});

TestConfig.forEach(({ ruleId, invalidCount, errorMessages }) => {
    describe(ruleId, () => {
        test("invalid cases", async () => {
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

        test("valid cases", async () => {
            const results = await eslint.lintFiles(`test/${ruleId}/valid.test.ts`);
            assert.strictEqual(results.length, 1);

            const result = results[0];
            assert.strictEqual(result?.errorCount, 0);
        });
    });
});
