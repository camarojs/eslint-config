import { describe, it } from "node:test";
import { lintText } from "../util.js";

const ruleId = "prefer-const";

void describe(ruleId, () => {
    void it("should report an error when 'let' can be replaced with 'const'", async () => {
        await lintText("let { a } = { a: 1 };", { errorCount: 1, ruleId, messageIds: ["useConst"] });
    });

    void it("should not report errors when a variable is reassigned", async () => {
        await lintText("let { a, b } = { a: 1, b: 2 };\na = 2;", { errorCount: 0, ruleId });
    });
});
