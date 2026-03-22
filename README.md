# servicenow-glide

Concrete class stubs for ServiceNow Glide Scriptable APIs — designed for Jest mocking and testing of ServiceNow SDK ES Module projects.

## Installation

Since ServiceNow resolves `@servicenow/glide` as a special namespace at runtime, your test environment needs this package aliased under that name. npm supports this via the `npm:` protocol:

```bash
npm install --save-dev @servicenow/glide@npm:servicenow-glide
```

This installs `servicenow-glide` from npm but registers it as `@servicenow/glide` in your `node_modules`, so your imports work identically in both ServiceNow and your test environment:

```typescript
import { GlideRecord } from '@servicenow/glide';
import { RESTMessageV2 } from '@servicenow/glide/sn_ws';
```

Your `package.json` will show:

```json
{
  "devDependencies": {
    "@servicenow/glide": "npm:servicenow-glide@^27.0.5"
  }
}
```

## Why does this exist?

### The problem

ServiceNow publishes `@servicenow/glide` on npm as a **type declaration only** package (`.d.ts` files). This works fine for IDE autocompletion, but when you try to run tests with Jest or other frameworks, they expect actual JavaScript implementations — not just types. Importing a declaration-only module in a test results in errors because there are no constructors or methods to instantiate or mock.

### What this package does

This package takes every type declaration from the official `@servicenow/glide` and generates a concrete class stub with mock return values:

- `string` methods return `""`
- `number` methods return `0`
- `boolean` methods return `false`
- `void` methods are empty
- Complex/custom types return `null`

This means Jest can instantiate classes, call methods, and mock them without errors.

### Multi-application type sharing

Standard ServiceNow `declare module` extensions can't be exported for reuse across projects. If you define custom types for one app, you have to duplicate them in every other app. This package provides a concrete base you can extend in a shared library, eliminating that duplication.

## Namespace imports

All ServiceNow namespaces are available as sub-path imports:

```typescript
import { GlideRecord, GlideDateTime } from '@servicenow/glide';        // types (default)
import { RESTMessageV2 } from '@servicenow/glide/sn_ws';               // web services
import { GlideQuery } from '@servicenow/glide/types';                   // core types
import { FlowDesigner } from '@servicenow/glide/sn_flow';              // flow designer
import { StandardCredentialsProvider } from '@servicenow/glide/sn_cc';  // credentials
```

## Keeping up to date

This package syncs with the upstream `@servicenow/glide` package via an automated script:

```bash
# Sync with the latest version
npm run sync

# Preview changes without writing
npm run sync:check

# Sync a specific version
npm run sync -- --version 27.0.5
```

A GitHub Actions workflow runs weekly to check for upstream updates and automatically creates a PR when changes are detected.

## Development

```bash
npm install         # install dependencies
npm run sync        # sync from upstream @servicenow/glide
npm run build       # compile TypeScript to dist/
npm run clean       # remove dist/ and build artifacts
```

## License

MIT
