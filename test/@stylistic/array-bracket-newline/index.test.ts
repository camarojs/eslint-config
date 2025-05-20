import { runTests, TestConfig } from "../../common";

const config: TestConfig = {
    ruleId: "@stylistic/array-bracket-newline",
    invalidCount: 1,
    errorMessageIds: [
        "missingOpeningLinebreak",
    ],
};

runTests(config);
