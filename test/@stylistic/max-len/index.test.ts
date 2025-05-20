import { runTests, TestConfig } from "../../common";

const config: TestConfig = {
    ruleId: "@stylistic/max-len",
    invalidCount: 1,
    errorMessages: ["This line has a length of 166. Maximum allowed is 120."],
};

runTests(config);
