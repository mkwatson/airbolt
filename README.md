# Airbolt

> Lean-but-no-compromise Fastify starter kit

A production-ready TypeScript API starter built with Fastify v5, featuring comprehensive tooling, documentation, and containerization.

## ✨ Features

- **🚀 Fastify v5** - High-performance web framework
- **📚 OpenAPI 3.0** - Interactive API documentation with Swagger UI
- **🔒 TypeScript Strict Mode** - Enhanced type safety
- **🐳 Docker Ready** - Multi-stage production builds
- **🧪 Vitest** - Fast unit testing with coverage
- **🎨 Biome** - Lightning-fast formatting and linting
- **🪝 Git Hooks** - Pre-commit quality gates with Husky
- **📦 pnpm** - Efficient package management

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# View API documentation
open http://localhost:3001/docs
```

## 📋 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm lint` | Check code style and quality |
| `pnpm format` | Format code |
| `pnpm typecheck` | Type checking |
| `pnpm quality` | Run full quality pipeline |
| `pnpm ci` | CI pipeline (typecheck + test + build) |

## 🐳 Docker

```bash
# Build image
docker build -t airbolt .

# Run container
docker run -p 3001:3001 airbolt

# Health check
curl http://localhost:3001/healthz
```

## 📚 API Documentation

- **Interactive Docs**: http://localhost:3001/docs
- **OpenAPI Spec**: http://localhost:3001/docs/json
- **YAML Spec**: http://localhost:3001/docs/yaml

### Documentation Strategy

Airbolt follows **API-first documentation** best practices:
- **Live API reference** served by the application (like Stripe, GitHub APIs)
- **Auto-generated** from route schemas - always accurate and up-to-date
- **Interactive testing** directly in the browser during development
- **Environment-aware** - different docs for dev/staging/production

This approach ensures documentation never drifts from implementation, providing immediate developer feedback and production-ready API exploration.

## 🏗️ Project Structure

```
├── src/
│   └── server.ts          # Main application
├── test/
│   ├── healthz.spec.ts    # Health endpoint tests
│   ├── swagger.spec.ts    # Documentation tests
│   └── setup.ts           # Test configuration
├── dist/                  # Built output
├── .husky/                # Git hooks
├── Dockerfile             # Container definition
├── vitest.config.ts       # Test configuration
├── tsconfig.json          # TypeScript config
├── tsconfig.build.json    # Production build config
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3001)

### TypeScript

- **Strict mode** enabled for maximum type safety
- **ESM modules** with modern Node.js features
- **Separate build config** for production

### Quality Gates

Pre-commit hooks ensure:
- ✅ Code formatting (Biome)
- ✅ Type checking (TypeScript)
- ✅ Tests passing (Vitest)

## 🚢 Production Deployment

The Docker image is optimized for production:

- **Multi-stage build** for minimal image size
- **Non-root user** for security
- **Health checks** for orchestration
- **Alpine Linux** base for security and size

## 📄 License

MIT