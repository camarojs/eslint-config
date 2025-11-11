import { describe, it } from "node:test";
import { lintText } from "../util.js";

const ruleId = "@typescript-eslint/restrict-template-expressions";

void describe(ruleId, () => {
    void it("should report errors for arrays in template expressions", async () => {
        await lintText("const a = `${[1, 2]}`;", { errorCount: 1, ruleId, messageIds: ["invalidType"] });
    });

    void it("should report errors for objects in template expressions", async () => {
        await lintText(
            "const a = `${{ name: \"foo\" }}`;",
            {
                errorCount: 1,
                ruleId,
                messageIds: ["invalidType"],
            },
        );
    });

    void it("should allow numbers in template expressions", async () => {
        await lintText("const a = 1;\nconst b = `${a}`;", { errorCount: 0, ruleId });
    });

    void it("should allow booleans in template expressions", async () => {
        await lintText("const a = true;\nconst b = `${a}`;", { errorCount: 0, ruleId });
    });

    void it("should allow nullish values in template expressions", async () => {
        await lintText("const a = null;\nconst b = `${a}`;", { errorCount: 0, ruleId });
    });
});
