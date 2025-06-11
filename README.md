# Airbolt

*A lean, type-safe Fastify API starter that aims for **maximum signal with minimum tooling**.*

| Status  | Badge (activated in later commits) |
|---------|------------------------------------|
| Build   | _coming soon_ |
| Coverage| _coming soon_ |
| Release | _coming soon_ |
| Docs    | `/docs` (after Commit 5) |

---

## Quick start

1. **Install dependencies**

```bash
pnpm install
````

2. **Run the dev server** (will be added in Commit 2):

```bash
pnpm dev
```

   The API will start on [http://localhost:3001](http://localhost:3001) with a `/healthz` route.

3. **Run tests** (added in Commit 4):

```bash
pnpm test
```

---

## Philosophy

* **Zero-ceremony** – only the tools that pull their weight.
* **Fail-fast** – strict TypeScript, tests, and CI gates catch issues early.
* **Observable by default** – structured logs (Pino) and OpenTelemetry hooks ship with the skeleton.
* **Docs as code** – OpenAPI spec is auto-generated and served from the running app.

---

## Roadmap (first 7 commits)

1. Fastify skeleton with `/healthz`
2. Hot-reload dev loop (`node --watch`)
3. Biome formatter/linter with pre-commit hook
4. Vitest harness + first spec
5. OpenAPI docs route (`/docs`)
6. GitHub Actions (test, build, CodeQL, semantic-release)
7. Dependabot updates

---

## License

Airbolt is released under the [MIT License](./LICENSE).