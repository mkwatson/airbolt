import { describe, expect, it } from "vitest";
import { buildServer } from "../src/server";

describe("GET /healthz", () => {
	it("returns ok: true", async () => {
		const app = buildServer();

		const response = await app.inject({
			method: "GET",
			url: "/healthz",
		});

		expect(response.statusCode).toBe(200);
		expect(response.headers["content-type"]).toMatch(/application\/json/);
		expect(response.json()).toEqual({ ok: true });
	});
});
