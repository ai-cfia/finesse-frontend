import React from "react";
import "./DebugPanel.css"; // Ensure you import the styles

interface DebugPanelProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
  isEnabled,
  onToggle,
}) => {
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
    </div>
  );
};
