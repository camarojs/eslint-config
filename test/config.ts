interface TestConfig {
    ruleId: string;
    invalidCount: number;
    validCount: number;
    messages: string[];
}

export const TestConfig: TestConfig[] = [
    {
        ruleId: "@stylistic/max-len",
        validCount: 1,
        invalidCount: 1,
        messages: ["This line has a length of 166. Maximum allowed is 120."],
    },
];
