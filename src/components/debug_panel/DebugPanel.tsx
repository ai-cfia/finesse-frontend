import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { fetchFilenames } from "../../api/useApiUtil";
import { ActionTypes, SearchSources } from "../../types";
import "./DebugPanel.css";

interface DebugPanelProps {
  onSetSimulatedData?: (data: any) => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = () => {
  const {
    state: { currentSearchSource },
    dispatch,
  } = useStateValue();
  const [filenames, setFilenames] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentSearchSource === SearchSources.Simulated) {
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
    navigate("/search");

    dispatch({
      type: ActionTypes.SetSearchTerm,
      payload: filename,
    });
    alert("Search query set successfully!");
  };

  const handleSourceChange = (source: SearchSources): void => {
    dispatch({
      type: ActionTypes.SetSearchSource,
      payload: source,
    });
  };

  return (
    <div className="debug-panel">
      <h4>Debug Panel</h4>
      <div className="radio-container">
        <label className="radio-option">
          <input
            type="radio"
            value="ailab"
            checked={currentSearchSource === SearchSources.Ailab}
            onChange={() => {
              handleSourceChange(SearchSources.Ailab);
            }}
          />
          <span className="radio-label">Use ailab search</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="azure"
            checked={currentSearchSource === SearchSources.Azure}
            onChange={() => {
              handleSourceChange(SearchSources.Azure);
            }}
          />
          <span className="radio-label">Use azure search</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="simulated"
            checked={currentSearchSource === SearchSources.Simulated}
            onChange={() => {
              handleSourceChange(SearchSources.Simulated);
            }}
          />
          <span className="radio-label">Use Simulated Data</span>
        </label>
      </div>
      {currentSearchSource === SearchSources.Simulated && (
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
