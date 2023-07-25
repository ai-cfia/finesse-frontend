import React from "react";

// Function to highlight words within a sentence
export const highlightWords = (
  sentence: string,
  query: string,
): {
  renderedWords: Array<{
    word: React.ReactNode;
    hasSpace: boolean;
    punctuation: React.ReactNode | null;
  }>;
} => {
  const words = sentence.split(" ");

  const renderedWords = words.map((word, wordIndex) => {
    const normalizedWord = word.replace(/[.,?!]/g, ""); // Remove punctuation for comparison
    const shouldHighlight =
      query.toLowerCase().includes(normalizedWord.toLowerCase()) &&
      normalizedWord.length > 4; // Check if word length is greater than 4
    const punctuation = word
      .slice(normalizedWord.length)
      .replace(/[.,?!]/g, ""); // Extract punctuation

    return {
      word: shouldHighlight ? <strong>{word}</strong> : word, // Highlight the word if shouldHighlight is true
      hasSpace: wordIndex !== words.length - 1, // Add a space between words if it's not the last word
      punctuation:
        shouldHighlight && punctuation !== "" ? (
          <span>{punctuation}</span>
        ) : null, // Render punctuation if it exists and shouldHighlight is true
    };
  });

  return { renderedWords }; // Return the rendered words
};

// Function to render highlighted sentences
const renderHighlightedSentences = (
  content: string,
  query: string,
): Array<{
  sentence: Array<{
    word: React.ReactNode;
    hasSpace: boolean;
    punctuation: React.ReactNode | null;
  }>;
  hasPeriod: boolean;
}> => {
  const sentences = content.split(". "); // Split the content into sentences

  const sentenceElements = sentences.map((item, index) => {
    const trimmedSentence = item.trim(); // Trim leading and trailing whitespace

    const { renderedWords } = highlightWords(trimmedSentence, query); // Highlight the words in the sentence

    return {
      sentence: renderedWords.map((wordObj) => ({
        word: wordObj.word,
        hasSpace: wordObj.hasSpace,
        punctuation: wordObj.punctuation,
      })),
      hasPeriod: index !== sentences.length - 1, // Add a period and space between sentences if it's not the last sentence
    };
  });

  return sentenceElements;
};

// HighlightedContent component
interface HighlightedContentProps {
  content: string;
  query: string;
}

const HighlightedContent: React.FC<HighlightedContentProps> = ({
  content,
  query,
}) => {
  // Render the highlighted sentences using the external function
  const sentenceElements = renderHighlightedSentences(content, query);

  return (
    <>
      {sentenceElements.map((sentenceObj, sentenceIndex) => (
        <span key={sentenceIndex}>
          {sentenceObj.sentence.map((wordObj, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {wordObj.word}
              {wordObj.hasSpace && <span> </span>}
              {wordObj.punctuation}
            </React.Fragment>
          ))}
          {sentenceObj.hasPeriod && <span>. </span>}
        </span>
      ))}
    </>
  );
};

export default HighlightedContent;
