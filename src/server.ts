import Fastify from "fastify";

export const buildServer = () => {
	const app = Fastify({
		logger: {
			level: "info",
			transport:
				process.env.NODE_ENV === "development"
					? { target: "pino-pretty" } // pretty-print locally
					: undefined, // JSON in prod/CI
		},
	});

	// health check route
	app.get("/healthz", async () => ({ ok: true }));

	return app;
};

if (import.meta.url === `file://${process.argv[1]}`) {
	// CLI entrypoint ⤵
	const server = buildServer();
	const port = Number(process.env.PORT) || 3001;
	server.listen({ port, host: "0.0.0.0" }).catch((err) => {
		server.log.error(err);
		process.exit(1);
	});
}
