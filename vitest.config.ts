import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			exclude: ["dist/**", "test/**", "**/*.config.*"],
			thresholds: {
				global: {
					branches: 80,
					functions: 80,
					lines: 80,
					statements: 80,
				},
			},
		},
		// Fail fast on first test failure in CI
		bail: process.env.CI ? 1 : 0,
	},
});
