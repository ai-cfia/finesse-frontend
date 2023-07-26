import { SearchBar } from "../../components/searchbar/SearchBar";
import styles from "../home/Home.module.css";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import { useState, useEffect } from "react";
import { PingBackend, GetEndpoint } from "../../api/useApiUtil"; // Removed the import for GetEndpoint
import { environment } from "../../environments/environment";
import {
  LayoutContainer,
  LogoContainer,
  SearchBarContainer,
  SloganContainer,
  VersionTextContainer,
} from "../../styles/indexElements";

const Home: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState(""); // State variable for the alert message
  const [isError, setIsError] = useState(false); // State to track if the backend URL is missing

  useEffect(() => {
    // Check if the backend URL is missing or empty
    if (
      process.env.REACT_APP_BACKEND_URL === null ||
      process.env.REACT_APP_BACKEND_URL === ""
    ) {
      setIsError(true);
      setAlertMessage(
        "Warning: Backend URL is not set, frontend is misconfigured.",
      );
    } else {
      // Check if response is ok
      PingBackend(GetEndpoint("/search"))
        .then((responseData) => {
          if (Array.isArray(responseData) && responseData.length === 0) {
            // Response data is an empty array
            console.log("Empty array response");
          } else {
            // Response data is not an empty array
            setIsError(true);
            setAlertMessage(
              "Warning: Initializing ping request to backend failed.",
            ); // Set the alert message on error
          }
        })
        .catch(() => {
          setIsError(true);
          setAlertMessage(
            "Warning: Initializing ping request to backend failed.",
          ); // Set the alert message on error
        });
    }
  }, []);

  return (
    <LayoutContainer>
      <Header />
      {isError && <div className={styles.warning}>{alertMessage}</div>}
      <LogoContainer>
        <CFIALogo />
      </LogoContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <SloganContainer>
        <text>Empowering agency&apos;s users with precision search.</text>
        <text style={{ marginTop: 10 }}>
          Équiper les utilisateurs de l&apos;agence avec la recherche de
          précision.
        </text>
      </SloganContainer>
      <VersionTextContainer>
        {environment.version !== "" ? "v" + environment.version : ""}{" "}
      </VersionTextContainer>
    </LayoutContainer>
  );
};

export default Home;
