import * as React from "react";
import { useData } from "../../contexts/dataContext";
import { useLayout } from "../../contexts/layoutContext";
import {
  DebugPanelContainer,
  RadioContainer,
  RadioLabel,
  RadioOption,
} from "../../styles/indexElements";
import { SearchSource } from "../../types";
import "./DebugPanel.css";

export const DebugPanel: React.FC = () => {
  const { isDebugPanelVisible } = useLayout();
  const { currentSearchSource, setCurrentSearchSource } =
    useData();

  if (!isDebugPanelVisible) return null;
  return (
    <DebugPanelContainer data-testid="debug-panel">
      <h4 style={{ color: "black" }}>Debug Panel</h4>
      <RadioContainer>
        <RadioOption>
          <input
            data-testid="search-source-ailab"
            type="radio"
            value="ailab"
            checked={currentSearchSource === SearchSource.ailab}
            onChange={() => {
              setCurrentSearchSource(SearchSource.ailab);
            }}
          />
          <RadioLabel>Use AI Lab Search</RadioLabel>
        </RadioOption>
        <RadioOption>
          <input
            data-testid="search-source-azure"
            type="radio"
            value="azure"
            checked={currentSearchSource === SearchSource.azure}
            onChange={() => {
              setCurrentSearchSource(SearchSource.azure);
            }}
          />
          <RadioLabel>Use Azure AI Search</RadioLabel>
        </RadioOption>
        <RadioOption>
          <input
            data-testid="search-source-llamaindex"
            type="radio"
            value="llamaindex"
            checked={currentSearchSource === SearchSource.llamaindex}
            onChange={() => {
              setCurrentSearchSource(SearchSource.llamaindex);
            }}
          />
          <RadioLabel>Use AI Lab LlamaIndex Search</RadioLabel>
        </RadioOption>
      </RadioContainer>
    </DebugPanelContainer>
  );
};
