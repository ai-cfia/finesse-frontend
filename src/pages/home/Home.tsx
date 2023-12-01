import { useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { useStateValue } from "../../StateProvider";
import { PingBackend } from "../../api/useApiUtil";
import AlertBanner from "../../components/alert_banner/AlertBanner";
import { DebugPanel } from "../../components/debug_panel/DebugPanel";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { environment } from "../../environments/environment";
import { ActionTypes } from "../../types";
import styles from "../home/Home.module.css";

const Home: React.FC = () => {
  const {
    state: { currentSearchSource, debugPanelIsVisible, error },
    dispatch,
  } = useStateValue();

  useEffect(() => {
    console.log("currentSearchSource:", currentSearchSource);
    const setError = (error: string): void => {
      console.log(error);
      dispatch({
        type: ActionTypes.SetError,
        payload: error,
      });
    };

    if (
      process.env.REACT_APP_BACKEND_URL === null ||
      process.env.REACT_APP_BACKEND_URL === ""
    ) {
      setError("Warning: Backend URL is not set, frontend is misconfigured.");
    } else {
      PingBackend()
        .then((response) => {
          if (response === "ok") {
            console.log("Ping response:", response);
          } else {
            setError("Warning: Initializing ping request to backend failed.");
          }
        })
        .catch(() => {
          setError("Warning: Initializing ping request to backend failed.");
        });
    }
  }, [currentSearchSource, dispatch]);

  return (
    <div className={styles.layout}>
      <Header />
      <AlertBanner alertMessage={error} />
      <FaCog
        onClick={() => {
          dispatch({
            type: ActionTypes.ToggleDebugPanel,
          });
          console.log("Toggling Debug Panel visibility");
        }}
        style={{
          cursor: "pointer",
          zIndex: 1001,
          position: "absolute",
          left: "10px",
          marginTop: "10px",
        }}
      />
      {debugPanelIsVisible && <DebugPanel />}
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
        <span>Empowering agency&apos;s users with precision search.</span>
        <span style={{ marginTop: 10 }}>
          Équiper les utilisateurs de l&apos;agence avec la recherche de
          précision.
        </span>
      </div>
      <div className={styles.versionText}>
        {environment.version !== "" ? "v" + environment.version : ""}
      </div>
    </div>
  );
};

export default Home;
