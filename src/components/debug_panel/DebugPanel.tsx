import * as React from "react";
import { useEffect, useState } from "react";
import "./DebugPanel.css";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../reducer";
import { fetchFilenames } from "../../api/useApiUtil";

interface DebugPanelProps {
  isEnabled: boolean;
  onToggle: () => void;
  onSetSimulatedData?: (data: any) => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
  isEnabled,
  onToggle,
}) => {
  const { dispatch } = useStateValue();
  const [filenames, setFilenames] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEnabled) {
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
  }, [isEnabled]);

  const handleFilenameClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    filename: string,
  ): void => {
    e.preventDefault();
    navigate("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: filename,
    });
    // Add any other actions you need to perform on click here
    alert("Search query set successfully!");
  };

  return (
    <div className="debug-panel">
      <h4>Debug Panel</h4>
      <div className="toggle-container">
        <span className="toggle-label">Use Simulated Data:</span>
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={onToggle}
          className="toggle-input"
        />
      </div>
      {isEnabled && (
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
