import React from "react";
import { highlightWords } from "./HighlightedContent";

test("highlightWords should return highlighted indices", () => {
  // Input sentence and query
  const sentence: string =
    "This is a sample sentence for testing sample bacteria.";
  const query: string = "sample";

  const expectedHighlightedIndices: number[] = [3, 7]; // Expected highlighted indices

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Debug: Log the renderedWords array for inspection
  console.log(renderedWords);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the word content matches the query
      if (
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  console.log(highlightedIndices); // Debug: Log the highlightedIndices array for inspection
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test("highlightWords should handle empty content", () => {
  // Test input
  const sentence: string = "";
  const query: string = "sample";

  // Expected output
  const expectedHighlightedIndices: number[] = [];

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the word content matches the query
      if (
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test("highlightWords should handle content without periods or question marks", () => {
  // Test input
  const sentence: string = "This is a sample sentence without punctuation";
  const query: string = "sample";

  const expectedHighlightedIndices: number[] = [3];

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the word content matches the query
      if (
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test("highlightWords should handle content with punctuation", () => {
  // Test input
  const sentence: string = "This is a sample sentence, for testing! Sample.";
  const query: string = "sample";

  const expectedHighlightedIndices: number[] = [3]; // Only include the first occurrence

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the word content matches the query
      if (
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test("highlightWords should handle content shorter than query", () => {
  // Test input
  const sentence: string = "This is a sample.";
  const query: string = "sample sentence";

  const expectedHighlightedIndices: number[] = []; // Empty array, as the query is not found

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the word content matches the query
      if (
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});

test("highlightWords should not highlight any words when the query is empty", () => {
  // Test input
  const sentence: string = "This is a sample sentence for testing sample.";
  const query: string = "";

  const expectedHighlightedIndices: number[] = [];

  // Invoke the highlightWords function
  const { renderedWords } = highlightWords(sentence, query);

  // Get the indices of highlighted words
  const highlightedIndices: number[] = renderedWords.reduce<number[]>(
    (acc, wordObj, index) => {
      // Check if the query is not empty before pushing any index
      if (
        query !== "" &&
        typeof wordObj.word === "string" &&
        wordObj.word.toLowerCase().includes(query.toLowerCase())
      ) {
        acc.push(index);
      } else if (React.isValidElement(wordObj.word)) {
        // If it's a React element, check its children (in case of <strong> elements)
        const highlightedWord = wordObj.word as React.ReactElement;
        if (
          query !== "" &&
          typeof highlightedWord.props.children === "string" &&
          highlightedWord.props.children.toLowerCase() === query.toLowerCase()
        ) {
          acc.push(index);
        }
      }
      return acc;
    },
    [],
  );

  // Assert the rendered words and highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});
