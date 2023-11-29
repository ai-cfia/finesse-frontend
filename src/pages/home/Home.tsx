import { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { useStateValue } from "../../StateProvider";
import { GetEndpoint, PingBackend } from "../../api/useApiUtil";
import { DebugPanel } from "../../components/debug_panel/DebugPanel";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { environment } from "../../environments/environment";
import styles from "../home/Home.module.css";

const Home: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDebugPanelVisible, setIsDebugPanelVisible] = useState(false);

  const {
    state: { currentSearchSource },
  } = useStateValue();

  useEffect(() => {
    console.log("currentSearchSource:", currentSearchSource);

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
      PingBackend(GetEndpoint("/health"))
        .then((response) => {
          if (response === "ok") {
            console.log("Ping response:", response);
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
  }, [currentSearchSource]);

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
      {isDebugPanelVisible && <DebugPanel />}
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
