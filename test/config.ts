interface TestConfig {
    ruleId: string;
    invalidCount: number;
    errorMessages: string[];
}

export const TestConfig: TestConfig[] = [
    {
        ruleId: "@stylistic/max-len",
        invalidCount: 1,
        errorMessages: ["This line has a length of 166. Maximum allowed is 120."],
    },
];
