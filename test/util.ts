import { ESLint, Linter } from "eslint";
import { ts } from "../src/index";
import assert from "node:assert";
import path from "node:path";

const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: ts as unknown as Linter.Config,
});

const dummyFilePath = path.resolve(__dirname, "dummy.ts");

interface LintTextOptions {
    /** Whether to enable the no-unused-vars rule, default false */
    noUnusedVars?: boolean;
    /** The expected error count */
    errorCount?: number;
    /** The expected warning count */
    messageIds?: string[];
    /** The ruleId to check against */
    ruleId?: string;
}

export const lintText = async (code: string, options: LintTextOptions = {}) => {
    if (!options.noUnusedVars) {
        code = `/* eslint-disable @typescript-eslint/no-unused-vars */\n${code.trimEnd()}\n`;
    }

    const results = await eslint.lintText(code, { filePath: dummyFilePath });
    const result = (results as [ESLint.LintResult])[0];

    assert.strictEqual(results.length, 1, "Expected exactly one result");
    assert.strictEqual(result.errorCount, options.errorCount);

    result.messages.forEach((message, index) => {
        assert.strictEqual(message.severity, 2);

        if (options.ruleId) {
            assert.strictEqual(message.ruleId, options.ruleId);
        }

        if (options.messageIds?.length) {
            assert.strictEqual(message.messageId, options.messageIds[index]);
        }
    });
};
