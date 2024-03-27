# Testing documentation

- [Testing documentation](#testing-documentation)
  - [Overview](#overview)
  - [Testing Search Functionality](#testing-search-functionality)
    - [Test 1: Interactive Search Input](#test-1-interactive-search-input)
    - [Test 2: Submitting a Search Query](#test-2-submitting-a-search-query)
  - [Testing Debug Panel Interactivity](#testing-debug-panel-interactivity)
    - [Test 1: Default search engine
      selection](#test-1-default-search-engine-selection)
    - [Test 3: Search engine selection effects on search
      results](#test-3-search-engine-selection-effects-on-search-results)
  - [Testing CFIA Logo Navigation](#testing-cfia-logo-navigation)
    - [Test 1: CFIA Logo Redirect
      Functionality](#test-1-cfia-logo-redirect-functionality)

## Overview

This document provides detailed instructions and procedures for manually testing
the various functionalities of `finesse-frontend`, ensuring that all features
operate correctly and as expected before deployment or release.

## Testing Search Functionality

### Test 1: Interactive Search Input

**Objective:** Ensure that the search input box is interactive and accepts text.

**Preconditions:**

- [ ] The application is open and the user is on the main page.
- [ ] The search input is visible and not obscured by any elements.

**Test Steps:**

1. Click on the search input box.
2. Type in a sample search query, e.g., "food safety".

**Expected Results:**

- [ ] The search input should be clickable and allow text entry.
- [ ] The text entered should be clearly visible in the input box.

**Actual Results:**

- [ ] Describe the interaction with the search input.

**Pass/Fail:**

- [ ] Pass if the search input is interactive and the text is visible.
- [ ] Fail if the search input cannot be interacted with or the text is not
      visible.

---

### Test 2: Submitting a Search Query

**Objective:** Confirm that the search functionality triggers the correct
behavior when a query is submitted.

**Preconditions:**

- [ ] The application is open and the user is on the main page.
- [ ] A valid search query is entered into the search input box.

**Test Steps:**

1. Enter a search query into the search input box.
2. Submit the query by pressing the "Enter" key or clicking the search button.

**Expected Results:**

- [ ] The search query submission should trigger a search action.
- [ ] The application should display search results or a loading indicator.

**Actual Results:**

- [ ] Describe the outcome upon submitting a search query.

**Pass/Fail:**

- [ ] Pass if the search yields results or shows a loading indicator.
- [ ] Fail if the search does not yield results or the application does not
      react to the query submission.

## Testing Debug Panel Interactivity

### Test 1: Default search engine selection

**Objective:** Confirm that `Use Azure AI Search` is selected by default and the
application behaves as expected upon initial load.

**Preconditions:**

- [ ] The application is open and the debug panel is visible.

**Test Steps:**

1. Observe the debug panel upon page load without interacting with it.
2. Confirm that the `Use Azure AI Search` radio button is selected by default.

**Expected Results:**

- [ ] `Use Azure AI Search` is selected by default when the page loads.
- [ ] No other search engine options are selected.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if `Use Azure AI Search` is selected by default.
- [ ] Fail if `Use Azure AI Search` is not selected by default, or another
      option is selected.

---

### Test 3: Search engine selection effects on search results

**Objective:** Verify that selecting different search engine options changes the
search results, even though the current implementation does not clearly
differentiate the results based on the source.

**Preconditions:**

- [ ] The application is open and the debug panel is visible.
- [ ] `Use AI Lab search` is selected by default, and a known search result is
      available for this source.

**Test Steps:**

1. Perform a search with `Use AI Lab search` selected and note the search
   results.
2. Select `Use Azure AI Search`, perform the same search, and note any changes
   in search results.
3. Select `Use AI Lab Llama Search`, perform the same search, and note any
   changes in search results.

**Expected Results:**

- [ ] The search results should be similar.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if the search engines yield similar results.
- [ ] Fail if the search results are widely different.

**Notes:**: Currently, the application does not provide a clear visual or
functional indication of which search engine is active based on the search
results. This test ensures that the underlying functionality is working as
expected and that the application is indeed pulling different results from each
search engine.

## Testing CFIA Logo Navigation

### Test 1: CFIA Logo Redirect Functionality

**Objective:** Verify that clicking the CFIA logo redirects the user to the
application's base path as defined by the `VITE_BASENAME` environment variable.

**Preconditions:**

- [ ] The application is open, and the user is on a page other than the base
      path set by `VITE_BASENAME`.
- [ ] The CFIA logo is visible and not obscured by any elements.
- [ ] The `VITE_BASENAME` environment variable is set to the appropriate base
      path (e.g., "/finesse-frontend").

**Test Steps:**

1. Ensure the `VITE_BASENAME` environment variable is set to the desired base
   path.
2. Navigate to a page within the application that is not the base path.
3. Click on the CFIA logo.

**Expected Results:**

- [ ] Clicking the logo should redirect the user to the base path as defined by
      `VITE_BASENAME`.
- [ ] The base path page should load successfully without errors.

**Actual Results:**

- [ ] Describe what happens after clicking the CFIA logo.

**Pass/Fail:**

- [ ] Pass if the user is redirected to the base path set by `VITE_BASENAME` and
      it loads correctly.
- [ ] Fail if the user is not redirected to the base path, or the base path does
      not load properly.
