import { SearchBar } from "../../components/searchbar/SearchBar";
import styles from "../home/Home.module.css";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import { useState, useEffect } from "react";
import { PingBackend, GetEndpoint } from "../../api/useApiUtil";
import { environment } from "../../environments/environment";
import { DebugPanel } from "../../components/debug_panel/DebugPanel";
import { useStateValue, actionTypes } from "../../StateProvider";
import { FaCog } from "react-icons/fa";

const Home: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDebugPanelVisible, setIsDebugPanelVisible] = useState(false);

  const {
    state: { useSimulatedData },
    dispatch,
  } = useStateValue();

  useEffect(() => {
    console.log("useSimulatedData:", useSimulatedData);

    if (
      process.env.REACT_APP_BACKEND_URL === null ||
      process.env.REACT_APP_BACKEND_URL === ""
    ) {
      setIsError(true);
      setAlertMessage(
        "Warning: Backend URL is not set, frontend is misconfigured.",
      );
      console.log("Backend URL is not set, frontend is misconfigured.");
    } else {
      PingBackend(GetEndpoint("/search"))
        .then((responseData) => {
          if (Array.isArray(responseData) && responseData.length === 0) {
            console.log("Empty array response from backend");
          } else {
            setIsError(true);
            setAlertMessage(
              "Warning: Initializing ping request to backend failed.",
            );
            console.log("Initializing ping request to backend failed.");
          }
        })
        .catch(() => {
          setIsError(true);
          setAlertMessage(
            "Warning: Initializing ping request to backend failed.",
          );
          console.log(
            "Initializing ping request to backend failed. Caught in catch.",
          );
        });
    }
  }, [useSimulatedData]);

  return (
    <div className={styles.layout}>
      <Header />
      {isError && <div className={styles.warning}>{alertMessage}</div>}
      <FaCog
        onClick={() => {
          setIsDebugPanelVisible(!isDebugPanelVisible);
          console.log("Toggling Debug Panel visibility");
        }}
        style={{
          cursor: "pointer",
          zIndex: 1001,
          position: "absolute",
          left: "10px",
          top: isError ? "160px" : "110px",
        }}
      />
      {isDebugPanelVisible && (
        <DebugPanel
          isEnabled={useSimulatedData}
          onToggle={() => {
            dispatch({
              type: actionTypes.SET_USE_SIMULATED_DATA,
              useSimulatedData: !useSimulatedData,
            });
            console.log("Toggling useSimulatedData");
          }}
        />
      )}
      <div className="logo-container">
        <CFIALogo />
      </div>
      <div className="searchBar-container">
        <SearchBar />
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          marginTop: 20,
          flexDirection: "column",
          alignItems: "center",
          color: "grey",
        }}
      >
        <text>Empowering agency&apos;s users with precision search.</text>
        <text style={{ marginTop: 10 }}>
          Équiper les utilisateurs de l&apos;agence avec la recherche de
          précision.
        </text>
      </div>
      <div className={styles.versionText}>
        {environment.version !== "" ? "v" + environment.version : ""}
      </div>
    </div>
  );
};

export default Home;
