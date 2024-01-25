- [Overview](#overview)
- [Testing Search Functionality](#testing-search-functionality)
  - [Test 1: Interactive Search Input](#test-1-interactive-search-input)
  - [Test 2: Submitting a Search Query](#test-2-submitting-a-search-query)
- [Testing Debug Panel Interactivity](#testing-debug-panel-interactivity)
  - [Test 1: Default Data Source Selection](
      #test-1-default-data-source-selection)
  - [Test 2: Interaction with Data Source Options](
      #test-2-interaction-with-data-source-options)
  - [Test 3: Data Source Selection Affects Search Results](
      #test-3-data-source-selection-affects-search-results)
- [Testing Filenames List Interaction](#testing-filenames-list-interaction)
  - [Test 1: Clicking on Filename Sets Search Bar
  and Performs Search with Simulated Data](
  #test-1-clicking-on-filename-sets-bar-and-performs-search-with-simulated-data)
- [Testing CFIA Logo Navigation](#testing-cfia-logo-navigation)
  - [Test 1: CFIA Logo Redirect Functionality](
      #test-1-cfia-logo-redirect-functionality)

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

### Test 1: Default Data Source Selection

**Objective:** Confirm that 'Use AI Lab search' is selected by default and the
application behaves as expected upon initial load.

**Preconditions:**

- [ ] The application is open and the debug panel is visible.

**Test Steps:**

1. Observe the debug panel upon page load without interacting with it.
2. Confirm that the 'Use AI Lab search' radio button is selected by default.

**Expected Results:**

- [ ] 'Use AI Lab search' is selected by default when the page loads.
- [ ] No other data source options are selected.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if 'Use AI Lab search' is selected by default.
- [ ] Fail if 'Use AI Lab search' is not selected by default, or another option
      is selected.

---

### Test 2: Interaction with Data Source Options

**Objective:** Ensure the user can select between different data source options
and the application responds correctly to the selection.

**Preconditions:**

- [ ] The application is open and the debug panel is visible.
- [ ] 'Use AI Lab search' is selected by default.

**Test Steps:**

1. Click on the 'Use Azure AI Search' radio button and verify the selection.
2. Click on the 'Use Simulated Data' option and verify that a list of filenames
   appears below.
3. Return to 'Use AI Lab search' and verify that the list of filenames
   disappears.

**Expected Results:**

- [ ] Selecting 'Use Azure AI Search' should not show the list of filenames.
- [ ] Selecting 'Use Simulated Data' should display a list of filenames below
      the debug panel.
- [ ] Returning to 'Use AI Lab search' should hide the list of filenames.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if each data source option can be selected, and the list of filenames
      appears or disappears as expected.
- [ ] Fail if selections do not register, the list of filenames does not
      appear/disappear, or if the application behaves unexpectedly.

---

### Test 3: Data Source Selection Affects Search Results

**Objective:** Verify that selecting different data source options changes the
search results, even though the current implementation does not clearly
differentiate the results based on the source.

**Preconditions:**

- [ ] The application is open and the debug panel is visible.
- [ ] 'Use AI Lab search' is selected by default, and a known search result is
      available for this source.

**Test Steps:**

1. Perform a search with 'Use AI Lab search' selected and note the search
   results.
2. Select 'Use Azure AI Search', perform the same search, and note any changes
   in search results.
3. Select 'Use Simulated Data', perform the same search, and observe the changes
   in search results or the appearance of the filenames list.

**Expected Results:**

- [ ] With 'Use AI Lab search' selected, search results should correspond to
      what is expected from this source.
- [ ] Upon selecting 'Use Azure AI Search', search results should be distinct
      from the AI Lab's and correspond to the Azure AI Search's expected
      results.
- [ ] When 'Use Simulated Data' is selected, the results should change again,
      displaying either a relevant list of filenames or other indicators that
      the search is pulling from simulated data.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if each data source selection yields distinct search results
      appropriate to the selected source.
- [ ] Fail if the search results do not change with the selection of different
      data sources, or if the results do not match the expected output for the
      selected source.

**Notes:**: Currently, the application does not provide a clear visual or
functional indication of which data source is active based on the search
results. This test ensures that the underlying functionality is working as
expected and that the application is indeed pulling different results from each
data source.

## Testing Filenames List Interaction

### Test 1: Clicking on Filename Sets Bar and Performs Search with Simulated Data

**Objective:** Verify that clicking on a filename sets the string in the search
bar, alerts the user of the action's success, and performs the search when using
simulated data.

**Preconditions:**

- [ ] The application is open, and the user is on the main search page.
- [ ] "Use Simulated Data" is selected in the debug panel.
- [ ] The filenames list is visible with at least one filename displayed under
      the debug panel.

**Test Steps:**

1. Confirm "Use Simulated Data" is selected.
2. Observe the filenames listed in the debug panel.
3. Click on one of the filenames.
4. Confirm that an alert is shown indicating the successful action.
5. Verify that the string in the search bar is set to the filename clicked.
6. Confirm that the search is performed using the set string.

**Expected Results:**

- [ ] When a filename is clicked, the search bar is populated with that
      filename.
- [ ] An alert is displayed to the user confirming the action's success.
- [ ] The application automatically performs a search with the clicked filename
      as the query.

**Actual Results:**

- [ ] Describe what actually happened when the test was executed.

**Pass/Fail:**

- [ ] Pass if the search bar is correctly populated, an alert is shown, and the
      search is performed automatically upon clicking a filename.
- [ ] Fail if any of the expected results are not achieved, especially if "Use
      Simulated Data" is not selected.

## Testing CFIA Logo Navigation

### Test 1: CFIA Logo Redirect Functionality

**Objective:** Verify that clicking the CFIA logo redirects the user to the
application's base path as defined by the `REACT_APP_BASENAME` environment
variable.

**Preconditions:**

- [ ] The application is open, and the user is on a page other than the base
  path set by `REACT_APP_BASENAME`.
- [ ] The CFIA logo is visible and not obscured by any elements.
- [ ] The `REACT_APP_BASENAME` environment variable is set to the appropriate
  base path (e.g., "/finesse-frontend").

**Test Steps:**

1. Ensure the `REACT_APP_BASENAME` environment variable is set to the desired
   base path.
2. Navigate to a page within the application that is not the base path.
3. Click on the CFIA logo.

**Expected Results:**

- [ ] Clicking the logo should redirect the user to the base path as defined by
  `REACT_APP_BASENAME`.
- [ ] The base path page should load successfully without errors.

**Actual Results:**

- [ ] Describe what happens after clicking the CFIA logo.

**Pass/Fail:**

- [ ] Pass if the user is redirected to the base path set by
  `REACT_APP_BASENAME` and it loads correctly.
- [ ] Fail if the user is not redirected to the base path, or the base path does
  not load properly.
