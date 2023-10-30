import React, { useState } from "react";
import "./DebugPanel.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

interface DebugPanelProps {
  isEnabled: boolean;
  onToggle: () => void;
  onSetSimulatedData: (data: any) => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
  isEnabled,
  onToggle,
}) => {
  const [jsonData, setJsonData] = useState("");
  const { dispatch } = useStateValue();

  const handleSetData = (): void => {
    console.log("Setting simulated data...");
    try {
      const parsedData = JSON.parse(jsonData);
      console.log("Parsed JSON data: ", parsedData);
      dispatch({
        type: actionTypes.SET_SIMULATED_DATA,
        simulatedData: parsedData,
      });
      alert("Simulated data set successfully!");
    } catch (error) {
      console.error("Error setting simulated data: ", error);
      alert("Invalid JSON data. Please make sure it is correctly formatted.");
    }
  };

  return (
    <div className="debug-panel">
      <h4>Debug Panel</h4>
      <div className="toggle-container">
        <span className="toggle-label">Use Simulated Data:</span>
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={() => {
            onToggle();
          }}
          className="toggle-input"
        />
      </div>
      {isEnabled && (
        <div className="textarea-container">
          <textarea
            value={jsonData}
            onChange={(e) => {
              setJsonData(e.target.value);
            }}
            rows={10}
            cols={50}
            placeholder="Paste JSON data here"
          ></textarea>
          <button onClick={handleSetData} className="set-data-button">
            Set Data
          </button>
        </div>
      )}
    </div>
  );
};
