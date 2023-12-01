import DOMPurify from "dompurify";
import React from "react";
import { useData } from "../../contexts/DataContext";

export const getHighlightedIndices = (
  sentence: string,
  query: string,
): number[] => {
  const words = sentence.split(" ");
  const queryWords = query.split(" ");
  return words
    .map((word, index) => (queryWords.includes(word) ? index : -1))
    .filter((index) => index !== -1);
};

export const highlightWords = (
  sentence: string,
  query: string,
): React.ReactNode[] => {
  const words = sentence.split(" ");
  const highlightedIndices = getHighlightedIndices(sentence, query);

  return words.map((word, index) => {
    return highlightedIndices.includes(index) ? (
      <strong key={index}>{word}</strong>
    ) : (
      word
    );
  });
};

interface HighlightedContentProps {
  content: string;
  query: string;
}

const HighlightedContent: React.FC<HighlightedContentProps> = ({
  content,
  query,
}) => {
  const { currentSearchSource } = useData();
  if (currentSearchSource === "azure") {
    const sanitizedContent = DOMPurify.sanitize(content);
    return <span dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
  } else {
    const highlightedElements = highlightWords(content, query);
    return (
      <span>
        {highlightedElements.map((word, index) => (
          <React.Fragment key={index}>
            {word}
            {index !== highlightedElements.length - 1 && <span> </span>}
          </React.Fragment>
        ))}
      </span>
    );
  }
};

export default HighlightedContent;
