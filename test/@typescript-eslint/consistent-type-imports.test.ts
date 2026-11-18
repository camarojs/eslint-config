import { describe, it } from "node:test";

import { lintText } from "../util.ts";

const ruleId = "@typescript-eslint/consistent-type-imports";

void describe(ruleId, () => {
    void it("should report errors when using regular imports for types", async () => {
        await lintText(
            "import { SomeType } from './types';\ntype Foo = SomeType;",
            { errorCount: 1, ruleId, messageIds: ["typeOverValue"] },
        );
    });

    void it("should not report errors when using type imports", async () => {
        await lintText(
            "import type { SomeType } from './types';\ntype Foo = SomeType;",
            { errorCount: 0, ruleId },
        );
    });

    void it("should not report errors for value imports", async () => {
        await lintText(
            "import { someFunction } from './utils';\nsomeFunction();",
            { errorCount: 0, ruleId },
        );
    });
});
