import { describe, expect, it } from "vitest";
import { buildServer } from "../src/server";

describe("Swagger Documentation", () => {
	it("serves OpenAPI JSON spec", async () => {
		const app = await buildServer();

		const response = await app.inject({
			method: "GET",
			url: "/docs/json",
		});

		expect(response.statusCode).toBe(200);
		expect(response.headers["content-type"]).toMatch(/application\/json/);

		const spec = response.json();
		expect(spec.openapi).toBe("3.0.0");
		expect(spec.info.title).toBe("Airbolt API");
		expect(spec.paths["/healthz"]).toBeDefined();
	});

	it("serves Swagger UI", async () => {
		const app = await buildServer();

		const response = await app.inject({
			method: "GET",
			url: "/docs",
		});

		expect(response.statusCode).toBe(200);
		expect(response.headers["content-type"]).toMatch(/text\/html/);
		expect(response.payload).toContain("Swagger UI");
	});
});
