import testData from "../../test_data/testData.json";
import { getHighlightedIndices } from "./HighlightedContent";

test("highlightWords should return highlighted indices for the first data item", () => {
  // Input sentence and query
  const firstDataItem = testData[0];
  const sentence = firstDataItem.content;
  const query = "guidance";

  const expectedHighlightedIndices = [8];

  // Invoke the getHighlightedIndices function
  const highlightedIndices = getHighlightedIndices(sentence, query);

  // Assert the highlighted indices
  expect(highlightedIndices).toEqual(expectedHighlightedIndices);
});
