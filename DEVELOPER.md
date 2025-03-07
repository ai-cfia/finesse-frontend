# Migration From Create-React-App to Vite

## Overview

This document outlines the steps taken to migrate a TypeScript React application
from Create React App (CRA) to Vite, transitioning from Jest to Vitest for unit
testing.

## Initial Setup and Cleanup

- Create a new branch for the migration process.
- Delete unnecessary files except for documentation, `.github` configurations,
  Dockerfile, and other dev env config files.

## Creating a New Project with Vite

- Initialize a new Vite project by running `npm create vite@latest .` in your
  project directory, choosing the `react` framework and the `TypeScript + SWC`
  variant.
- Import the previous project's `src` code and assets into the new Vite project
  structure.

## Configuring Dependencies

- Install necessary dependencies, excluding those not required in the Vite
  environment.
- Update environment variable prefixes from `REACT_APP_` to `VITE_` across the
  codebase.

## Adjusting Vite Configuration

- Modify `vite.config.ts` to serve on `0.0.0.0` and default to port `3000`.
- Update `vite.config.ts` for testing with Vitest:

```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
  css: true,
}
```

## Integrating Vitest for Testing

- Follow the example from [Vitest's React Testing Library
  example](https://github.com/vitest-dev/vitest/tree/main/examples/basic) for
  Vitest setup.
- Add the following test configuration to `vite.config.ts`:

```typescript
test: {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/test/setup.ts",
  css: true,
}
```

- Add `"types": ["vitest/globals"]` to `tsconfig.json`.
- Create `src/test/setup.ts` with `import '@testing-library/jest-dom'`.
- Adjust tests to utilize Vitest instead of Jest.
- Keep `@testing-library/react` and `@testing-library/jest-dom` installed and
  used.

## Final Steps

- Verify the application functions correctly in the Vite environment.
- Execute tests with Vitest to confirm application logic and component
  integrity.
- Finalize changes on the new branch, followed by code reviews and testing
  before merging.
