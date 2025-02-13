# Testing documentation

([*Le français est disponible au bas de la page*](#documentation-des-tests))

- [Testing documentation](#testing-documentation)
  - [Overview](#overview)
  - [Testing Search Functionality](#testing-search-functionality)
    - [Test 1: Interactive Search Input](#test-1-interactive-search-input)
    - [Test 2: Submitting a Search Query](#test-2-submitting-a-search-query)
  - [Testing Debug Panel Interactivity](#testing-debug-panel-interactivity)
    - [Test 1: Default search engine
      selection](#test-1-default-search-engine-selection)
    - [Test 2: Search engine selection effects on search
      results](#test-2-search-engine-selection-effects-on-search-results)
  - [Testing CFIA Logo Navigation](#testing-cfia-logo-navigation)
    - [Test 1: CFIA Logo Redirect
      Functionality](#test-1-cfia-logo-redirect-functionality)

## Overview

This document provides detailed instructions and procedures for manually testing
the various functionalities of `finesse-frontend`, ensuring that all features
operate correctly and as expected before deployment or release.

## Testing Search Functionality

### Test 1: Interactive Search Input

#### Objective

Ensure that the search input box is interactive and accepts text.

#### Preconditions

- [ ] The application is open and the user is on the main page.
- [ ] The search input is visible and not obscured by any elements.

#### Test Steps

1. Click on the search input box.
2. Type in a sample search query, e.g., "food safety".

#### Expected Results

- [ ] The search input should be clickable and allow text entry.
- [ ] The text entered should be clearly visible in the input box.

#### Actual Results

- [ ] Describe the interaction with the search input.

#### Pass/Fail

- [ ] Pass if the search input is interactive and the text is visible.
- [ ] Fail if the search input cannot be interacted with or the text is not
      visible.

### Test 2: Submitting a Search Query

#### Objective

Confirm that the search functionality triggers the correct behavior when a query
is submitted.

#### Preconditions

- [ ] The application is open and the user is on the main page.
- [ ] A valid search query is entered into the search input box.

#### Test Steps

1. Enter a search query into the search input box.
2. Submit the query by pressing the "Enter" key or clicking the search button.

#### Expected Results

- [ ] The search query submission should trigger a search action.
- [ ] The application should display search results or a loading indicator.

#### Actual Results

- [ ] Describe the outcome upon submitting a search query.

#### Pass/Fail

- [ ] Pass if the search yields results or shows a loading indicator.
- [ ] Fail if the search does not yield results or the application does not
      react to the query submission.

## Testing Debug Panel Interactivity

### Test 1: Default search engine selection

#### Objective

Confirm that `Use Azure AI Search` is selected by default and the application
behaves as expected upon initial load.

#### Preconditions

- [ ] The application is open and the debug panel is visible.

#### Test Steps

1. Observe the debug panel upon page load without interacting with it.
2. Confirm that the `Use Azure AI Search` radio button is selected by default.

#### Expected Results

- [ ] `Use Azure AI Search` is selected by default when the page loads.
- [ ] No other search engine options are selected.

#### Actual Results

- [ ] Describe what actually happened when the test was executed.

#### Pass/Fail

- [ ] Pass if `Use Azure AI Search` is selected by default.
- [ ] Fail if `Use Azure AI Search` is not selected by default, or another
      option is selected.

### Test 2: Search engine selection effects on search results

#### Objective

Verify that selecting different search engine options changes the search
results, even though the current implementation does not clearly differentiate
the results based on the source.

#### Preconditions

- [ ] The application is open and the debug panel is visible.
- [ ] `Use AI Lab search` is selected by default, and a known search result is
      available for this source.

#### Test Steps

1. Perform a search with `Use AI Lab search` selected and note the search
   results.
2. Select `Use Azure AI Search`, perform the same search, and note any changes
   in search results.
3. Select `Use AI Lab LlamaIndex Search`, perform the same search, and note any
   changes in search results.

#### Expected Results

- [ ] The search results should be similar.

#### Actual Results

- [ ] Describe what actually happened when the test was executed.

#### Pass/Fail

- [ ] Pass if the search engines yield similar results.
- [ ] Fail if the search results are widely different.

**Notes:**: Currently, the application does not provide a clear visual or
functional indication of which search engine is active based on the search
results. This test ensures that the underlying functionality is working as
expected and that the application is indeed pulling different results from each
search engine.

## Testing CFIA Logo Navigation

### Test 1: CFIA Logo Redirect Functionality

#### Objective

Verify that clicking the CFIA logo redirects the user to the application's base
path `/`.

#### Preconditions

- [ ] The application is open, and the user is on a page other than the base
      path `/`.
- [ ] The CFIA logo is visible and not obscured by any elements.

#### Test Steps

1. Navigate to a page within the application that is not the base path.
2. Click on the CFIA logo.

#### Expected Results

- [ ] Clicking the logo should redirect the user to the base path `/`.
- [ ] The base path page should load successfully without errors.

#### Actual Results

- [ ] Describe what happens after clicking the CFIA logo.

#### Pass/Fail

- [ ] Pass if the user is redirected to the base path `/` and it loads
      correctly.
- [ ] Fail if the user is not redirected to the base path, or the base path does
      not load properly.

---

## Documentation des tests

## Aperçu

Ce document fournit des instructions détaillées pour tester manuellement les
différentes fonctionnalités de `finesse-frontend`, afin de s'assurer qu'elles
fonctionnent correctement et comme prévu avant le déploiement.

## Fonctionnalité de recherche

### Test 1 : Champ de recherche interactif

#### Objectif

Vérifier que le champ de recherche est interactif et accepte du texte.

#### Préconditions

- [ ] L'application est ouverte et l'utilisateur se trouve sur la page
  principale.
- [ ] Le champ de recherche est visible et non masqué par d'autres éléments.

#### Étapes du test

1. Cliquez sur le champ de recherche.
2. Saisissez une requête de recherche, par exemple, "sécurité alimentaire".

#### Résultats attendus

- [ ] Le champ de recherche doit être cliquable et permettre la saisie de texte.
- [ ] Le texte saisi doit être clairement visible dans le champ.

#### Résultats réels

- [ ] Décrivez l'interaction avec le champ de recherche.

#### Succès/échec

- [ ] Réussi si le champ est interactif et le texte est visible.
- [ ] Échec si le champ ne permet pas l'interaction ou si le texte n'est pas
  visible.

### Test 2 : Soumission d'une requête de recherche

#### Objectif

Confirmer que la fonctionnalité de recherche déclenche le comportement attendu
lors de la soumission d'une requête.

#### Préconditions

- [ ] L'application est ouverte et l'utilisateur se trouve sur la page
  principale.
- [ ] Une requête valide est saisie dans le champ de recherche.

#### Étapes du test

1. Entrez une requête de recherche dans le champ.
2. Soumettez la requête en appuyant sur la touche "Entrée" ou en cliquant sur le
   bouton de recherche.

#### Résultats attendus

- [ ] La soumission de la requête doit déclencher une action de recherche.
- [ ] L'application doit afficher les résultats de recherche ou un indicateur de
  chargement.

#### Résultats réels

- [ ] Décrivez le résultat de la soumission de la requête.

#### Succès/échec

- [ ] Réussi si la recherche aboutit ou affiche un indicateur de chargement.
- [ ] Échec si la recherche ne produit aucun résultat ou si l'application ne
  réagit pas à la soumission.

## Test d'interactivité du panneau de débogage

### Test 1 : Sélection par défaut du moteur de recherche

#### Objectif

Vérifier que `Use Azure AI Search` est sélectionné par défaut lors du chargement
initial.

#### Préconditions

- [ ] L'application est ouverte et le panneau de débogage est visible.

#### Étapes du test

1. Observez le panneau de débogage au chargement de la page sans interagir avec
   lui.
2. Confirmez que le bouton radio `Use Azure AI Search` est sélectionné par
   défaut.

#### Résultats attendus

- [ ] `Use Azure AI Search` est sélectionné par défaut.
- [ ] Aucun autre moteur de recherche n'est sélectionné.

#### Résultats réels

- [ ] Décrivez ce qui s'est réellement passé lors de l'exécution du test.

#### Succès/échec

- [ ] Réussi si `Use Azure AI Search` est sélectionné par défaut.
- [ ] Échec si `Use Azure AI Search` n'est pas sélectionné ou si une autre
  option est sélectionnée.

### Test 2 : Effets de la sélection du moteur de recherche sur les résultats

#### Objectif

Vérifier que la sélection de différents moteurs de recherche modifie les
résultats.

#### Préconditions

- [ ] L'application est ouverte et le panneau de débogage est visible.

#### Étapes du test

1. Effectuez une recherche avec `Use Azure AI Search` sélectionné et notez les
   résultats.
2. Sélectionnez `Use AI Lab Search`, effectuez la même recherche, et notez les
   changements.
3. Sélectionnez `Use AI Lab LlamaIndex Search`, effectuez la même recherche, et
   notez les changements.

#### Résultats attendus

- [ ] Les résultats doivent refléter des différences selon le moteur
  sélectionné.

#### Résultats réels

- [ ] Décrivez ce qui s'est réellement passé lors de l'exécution du test.

#### Succès/échec

- [ ] Réussi si les moteurs affichent des résultats différents.
- [ ] Échec si les résultats sont identiques ou incohérents.

## Test de navigation avec le logo de l'ACIA

### Test 1 : Fonctionnalité de redirection avec le logo de l'ACIA

#### Objectif

Vérifier que cliquer sur le logo de l'ACIA redirige l'utilisateur vers la page
de base `/`.

#### Préconditions

- [ ] L'application est ouverte et l'utilisateur se trouve sur une page autre
  que la page de base `/`.

#### Étapes du test

1. Naviguez vers une page autre que la page de base.
2. Cliquez sur le logo de l'ACIA.

#### Résultats attendus

- [ ] Cliquer sur le logo doit rediriger l'utilisateur vers la page de base `/`.
- [ ] La page de base doit se charger sans erreur.

#### Résultats réels

- [ ] Décrivez ce qui s'est passé après avoir cliqué sur le logo.

#### Succès/échec

- [ ] Réussi si l'utilisateur est redirigé correctement.
- [ ] Échec si l'utilisateur n'est pas redirigé ou si la page ne se charge pas
  correctement.
