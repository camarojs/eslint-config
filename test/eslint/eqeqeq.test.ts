import { describe, it } from "node:test";
import { lintText } from "../util.js";

const ruleId = "eqeqeq";

void describe(ruleId, () => {
    void it("should report an error when using '=='", async () => {
        await lintText("0 == 0", { errorCount: 1, ruleId, messageIds: ["unexpected"] });
    });

    void it("should report an error when using '!='", async () => {
        await lintText("0 != 0", { errorCount: 1, ruleId, messageIds: ["unexpected"] });
    });
});
