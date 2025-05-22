import { describe, it } from "node:test";
import { lintText } from "../util";

const ruleId = "@stylistic/array-element-newline";

void describe(ruleId, () => {
    void it("should report missing line break error", async () => {
        await lintText("const a = [\n    2, 4,\n    3,\n];",
            { errorCount: 1, ruleId, messageIds: ["missingLineBreak"] });
    });

    void it("should not report line break error", async () => {
        await lintText("const a = [1, 2, 3];", { errorCount: 0 });
    });
});
