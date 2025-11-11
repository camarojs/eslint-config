import { describe, it } from "node:test";
import { lintText } from "../util.js";

const ruleId = "@stylistic/array-bracket-newline";

void describe(ruleId, () => {
    void it("should report errors for array with incorrect line breaks", async () => {
        await lintText(
            "const a = [1,\n" + "    2,\n" + "];",
            { errorCount: 1, ruleId, messageIds: ["missingOpeningLinebreak"] },
        );

        await lintText(
            "const b = [\n    1,\n];",
            { errorCount: 2, ruleId, messageIds: ["unexpectedOpeningLinebreak", "unexpectedClosingLinebreak"] },
        );
    });

    void it("should not report errors for correctly formatted arrays", async () => {
        await lintText("const a = [1, 2];", { errorCount: 0, ruleId });
        await lintText("const d = [\n    1,\n    2,\n];", { errorCount: 0, ruleId });
    });
});
