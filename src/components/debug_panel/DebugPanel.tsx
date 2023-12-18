import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFilenames } from "../../api/useApiUtil";
import { useData } from "../../contexts/DataContext";
import { useLayout } from "../../contexts/LayoutContext";
import { SearchSource } from "../../types";
import "./DebugPanel.css";

interface DebugPanelProps {
  onSetSimulatedData?: (data: any) => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = () => {
  const { isDebugPanelVisible } = useLayout();
  const { currentSearchSource, setCurrentSearchSource, setSearchTerm } =
    useData();
  const [filenames, setFilenames] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentSearchSource === SearchSource.Simulated) {
      const loadFilenames = async (): Promise<void> => {
        const fetchedFilenames = await fetchFilenames();
        setFilenames(fetchedFilenames);
      };

      loadFilenames()
        .then(() => {
          console.log("Filenames loaded successfully");
        })
        .catch((error) => {
          console.error("Error loading filenames", error);
        });
    } else {
      setFilenames([]);
    }
  }, [currentSearchSource]);

  const handleFilenameClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    filename: string,
  ): void => {
    e.preventDefault();
    // TODO: revisit navigate.
    navigate("/search");
    setSearchTerm(filename);
    alert("Search query set successfully!");
  };

  if (!isDebugPanelVisible) return null;
  return (
    <div className="debug-panel" data-testid="debug-panel">
      <h4>Debug Panel</h4>
      <div className="radio-container">
        <label className="radio-option">
          <input
            type="radio"
            value="ailab"
            checked={currentSearchSource === SearchSource.Ailab}
            onChange={() => {
              setCurrentSearchSource(SearchSource.Ailab);
            }}
          />
          <span className="radio-label">Use AI Lab search</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="azure"
            checked={currentSearchSource === SearchSource.Azure}
            onChange={() => {
              setCurrentSearchSource(SearchSource.Azure);
            }}
          />
          <span className="radio-label">Use Azure AI Search</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="simulated"
            checked={currentSearchSource === SearchSource.Simulated}
            onChange={() => {
              setCurrentSearchSource(SearchSource.Simulated);
            }}
          />
          <span className="radio-label">Use Simulated Data</span>
        </label>
      </div>
      {currentSearchSource === SearchSource.Simulated && (
        <div className="input-container">
          <div>
            <h5>Filenames:</h5>
            <ul>
              {filenames.map((filename, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => {
                      handleFilenameClick(e, filename);
                    }}
                  >
                    {filename}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
