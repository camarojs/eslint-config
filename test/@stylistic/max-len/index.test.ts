import { runTests, TestConfig } from "../../common";

const config: TestConfig = {
    ruleId: "@stylistic/max-len",
    invalidCount: 1,
    errorMessageIds: ["max"],
};

runTests(config);
