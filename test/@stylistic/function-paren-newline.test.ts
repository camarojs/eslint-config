import { describe, it } from "node:test";
import { lintText } from "../util";

const ruleId = "@stylistic/function-paren-newline";

void describe(ruleId, () => {
    const disableRules = ["@typescript-eslint/no-empty-function"];

    void it("reports error if param is on new line but closing paren isn't", async () => {
        await lintText(
            "function foo(\n    bar) {}",
            { errorCount: 1, ruleId, messageIds: ["expectedBefore"], disableRules },
        );
    });

    void it("reports error if multiple params are on new lines but closing paren isn't", async () => {
        await lintText(
            "function foo(\n    bar, baz) { }",
            { errorCount: 1, ruleId, messageIds: ["unexpectedAfter"], disableRules },
        );
    });

    void it("should allow function parentheses to be on the same line", async () => {
        await lintText("function foo(bar) { }", { errorCount: 0, disableRules });
    });

    void it("should allow function parentheses to be on the next line", async () => {
        await lintText("function foo(\n    bar,\n) { }", { errorCount: 0, disableRules });
    });
});
