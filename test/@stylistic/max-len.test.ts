import { lintText } from "../util";
import { describe, it } from "node:test";

const ruleId = "@stylistic/max-len";

void describe(ruleId, () => {
    void it("should report error for exceeding max length", async () => {
        await lintText(
            "const str = \"this is a very long string that exceeds the maximum length, "
            + "this is a very long string that exceeds the maximum length, \";",
            { errorCount: 1, ruleId, messageIds: ["max"] },
        );
    });
});
