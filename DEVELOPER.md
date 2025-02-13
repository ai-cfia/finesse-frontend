# Migration From Create-React-App to Vite

([*Le français est disponible au bas de la page*](#vue-densemble))

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
  example](https://github.com/vitest-dev/vitest/tree/main/examples/react) for
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

---

## Migration de Create-React-App vers Vite

## Vue d'ensemble

Ce document décrit les étapes effectuées pour migrer une application React
TypeScript de Create-React-App (CRA) vers Vite, avec une transition de Jest à
Vitest pour les tests unitaires.

## Configuration initiale et nettoyage

- Créez une nouvelle branche pour le processus de migration.
- Supprimez les fichiers inutiles à l'exception de la documentation, des
  configurations `.github`, du Dockerfile et des autres fichiers de
  configuration de l'environnement de développement.

## Création d'un nouveau projet avec Vite

- Initialisez un nouveau projet Vite en exécutant `npm create vite@latest .`
  dans votre répertoire de projet, en choisissant le framework `react` et la
  variante `TypeScript + SWC`.
- Importez le code `src` et les assets du projet précédent dans la nouvelle
  structure du projet Vite.

## Configuration des dépendances

- Installez les dépendances nécessaires, en excluant celles qui ne sont pas
  requises dans l'environnement Vite.
- Mettez à jour les préfixes des variables d'environnement de `REACT_APP_` à
  `VITE_` dans l'ensemble du code.

## Ajustement de la configuration de Vite

- Modifiez `vite.config.ts` pour servir sur `0.0.0.0` et utiliser par défaut le
  port `3000`.
- Ajoutez la configuration suivante pour les tests avec Vitest dans
  `vite.config.ts` :

```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
  css: true,
}
```

## Intégration de Vitest pour les tests

- Suivez l'exemple de [Vitest's React Testing
  Library](https://github.com/vitest-dev/vitest/tree/main/examples/react) pour
  la configuration de Vitest.
- Ajoutez la configuration de test suivante à `vite.config.ts` :

```typescript
test: {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/test/setup.ts",
  css: true,
}
```

- Ajoutez `"types": ["vitest/globals"]` à `tsconfig.json`.
- Créez le fichier `src/test/setup.ts` avec `import
  '@testing-library/jest-dom'`.
- Adaptez les tests pour utiliser Vitest à la place de Jest.
- Conservez `@testing-library/react` et `@testing-library/jest-dom` installés et
  utilisés.

## Étapes finales

- Vérifiez que l'application fonctionne correctement dans l'environnement Vite.
- Exécutez les tests avec Vitest pour confirmer la logique de l'application et
  l'intégrité des composants.
- Finalisez les modifications sur la nouvelle branche, suivez les revues de code
  et effectuez des tests avant de fusionner.
