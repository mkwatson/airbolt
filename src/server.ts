import Fastify from "fastify";

export const buildServer = async () => {
	const app = Fastify({
		logger: {
			level: "info",
			transport:
				process.env.NODE_ENV === "development"
					? { target: "pino-pretty" } // pretty-print locally
					: undefined, // JSON in prod/CI
		},
	});

	// Register Swagger documentation
	await app.register(import("@fastify/swagger"), {
		openapi: {
			openapi: "3.0.0",
			info: {
				title: "Airbolt API",
				description: "Lean-but-no-compromise Fastify starter kit",
				version: "1.0.0",
			},
			servers: [
				{
					url: "http://localhost:3001",
					description: "Development server",
				},
			],
		},
	});

	// Register Swagger UI
	await app.register(import("@fastify/swagger-ui"), {
		routePrefix: "/docs",
		uiConfig: {
			docExpansion: "list",
			deepLinking: false,
		},
		staticCSP: true,
		transformStaticCSP: (header: string) => header,
	});

	// health check route
	app.get(
		"/healthz",
		{
			schema: {
				description: "Health check endpoint",
				tags: ["health"],
				response: {
					200: {
						description: "Service is healthy",
						type: "object",
						properties: {
							ok: { type: "boolean" },
						},
					},
				},
			},
		},
		async () => ({ ok: true }),
	);

	return app;
};

if (import.meta.url === `file://${process.argv[1]}`) {
	// CLI entrypoint ⤵
	const server = await buildServer();
	const port = Number(process.env.PORT) || 3001;
	server.listen({ port, host: "0.0.0.0" }).catch((err) => {
		server.log.error(err);
		process.exit(1);
	});
}
