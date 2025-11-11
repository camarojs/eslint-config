import { lintText } from "../util.js";
import { describe, it } from "node:test";

const ruleId = "@stylistic/object-curly-newline";

void describe(ruleId, () => {
    void it("should report error for inconsistent object curly newlines", async () => {
        await lintText(
            "const obj = { a: 1, b: 2, c: 3 \n};",
            { errorCount: 1, ruleId, messageIds: ["unexpectedLinebreakBeforeClosingBrace"] },
        );
    });

    void it("should not report error for consistent object curly newlines", async () => {
        await lintText(
            "const obj = { a: 1, b: 2, c: 3 };",
            { errorCount: 0, ruleId },
        );
    });
});
