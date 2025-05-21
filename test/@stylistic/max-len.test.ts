import { lintText } from "../util";
import { describe, it } from "node:test";

const ruleId = "@stylistic/max-len";

describe(ruleId, () => {
    it(`should report error for exceeding max length`, () => {
        const code = "const foo = { bar: \"This is a bar.\", baz: { qux: \"This is a qux\" }, difficult: \"to read\","
            + " text: \"This is a very long string, which is allowed by the max-len rule.\" };";

        lintText(code, { ruleId, errorCount: 1, messageIds: ["max"] });
    });

    it(`should not report error for within max length`, () => {
        const code = "const foo = { bar: \"This is a bar.\", baz: { qux: \"This is a qux\" } };";

        lintText(code, { ruleId, errorCount: 0 });
    });
});
