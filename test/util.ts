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
    /** The expected error count */
    errorCount: number;
    /** The rule ID to check for */
    ruleId: string;
    /** The expected warning count */
    messageIds?: string[];
}

export const lintText = async (code: string, options: LintTextOptions) => {
    const results = await eslint.lintText(code, { filePath: dummyFilePath });
    const result = (results as [ESLint.LintResult])[0];

    assert.strictEqual(results.length, 1, "Expected exactly one result");

    const messages = result.messages.filter(message => message.ruleId === options.ruleId);

    assert.strictEqual(messages.length, options.errorCount);

    messages.forEach((message, index) => {
        assert.strictEqual(message.severity, 2);

        if (options.messageIds?.length) {
            assert.strictEqual(message.messageId, options.messageIds[index]);
        }
    });
};
