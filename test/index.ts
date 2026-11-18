import { run } from "node:test";
import { spec } from "node:test/reporters";

const stream = run({
    concurrency: true,
    execArgv: ["--enable-source-maps"],
    globPatterns: ["test/**/*.test.ts"],
    isolation: "none",

    setup(reporter) {
        reporter.on("test:fail", () => {
            process.exitCode = 1;
        });
    },
});

stream.compose(spec).pipe(process.stdout);
