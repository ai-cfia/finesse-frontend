import { FaCog } from "react-icons/fa";
import { useLayout } from "../../contexts/LayoutContext";

interface DebugButtonProps {
  style?: React.CSSProperties;
  className?: string;
}

const DebugButton: React.FC<DebugButtonProps> = ({ style, className }) => {
  const { isDebugButtonVisible, toggleDebugPanel } = useLayout();

  if (!isDebugButtonVisible) return null;

  return (
    <FaCog
      onClick={toggleDebugPanel}
      style={style}
      className={className}
      data-testid="debug-button"
    />
  );
};

export default DebugButton;
