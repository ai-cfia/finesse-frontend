import DOMPurify from "dompurify";
import React from "react";

interface ResultContentProps {
  content: string;
}

const ResultContent: React.FC<ResultContentProps> = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  return <span dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

export default ResultContent;
