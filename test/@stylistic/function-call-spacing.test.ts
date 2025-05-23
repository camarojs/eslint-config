import { describe, it } from "node:test";
import { lintText } from "../util";

const ruleId = "@stylistic/function-call-spacing";

void describe(ruleId, () => {
    void it("", async () => {
        await lintText("const a = new Date ();", { errorCount: 1, ruleId, messageIds: ["unexpectedWhitespace"] });
    });

    void it("", async () => {
        await lintText("const a = new Date();", { errorCount: 0 });
    });
});
