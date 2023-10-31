import React, { useState } from "react";
import "./DebugPanel.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

interface DebugPanelProps {
  isEnabled: boolean;
  onToggle: () => void;
  onSetSimulatedData?: (data: any) => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
  isEnabled,
  onToggle,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch } = useStateValue();

  const handleSearch = (): void => {
    if (searchQuery === "") {
      alert("Please enter a search query.");
      return;
    }
    console.log("Search query set:", searchQuery); // This will log the search query
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchQuery,
    });
    if (isEnabled) {
      dispatch({
        type: actionTypes.SET_USE_SIMULATED_DATA,
        useSimulatedData: true,
      });
    }
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
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Enter search query"
            className="search-input"
          />
          <button onClick={handleSearch} className="set-data-button">
            Set Data
          </button>
        </div>
      )}
    </div>
  );
};
