import { runTests, TestConfig } from "../../common";

const config: TestConfig = {
    ruleId: "@stylistic/array-bracket-newline",
    invalidCount: 4,
    errorMessages: [
        "There should be no linebreak before ']'.",
        "A linebreak is required before ']'.",
        "There should be no linebreak before ']'.",
        "A linebreak is required before ']'.",
    ],
};

runTests(config);
