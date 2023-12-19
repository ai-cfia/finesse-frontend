import { useEffect } from "react";
import { PingBackend } from "../../api/useApiUtil";
import Header from "../../components/header/Header";
import CFIALogo from "../../components/logo/CFIALogo";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { useAlert } from "../../contexts/AlertContext";
import { useData } from "../../contexts/DataContext";
import { environment } from "../../environments/environment";
import { EDirection } from "../../types";
import {
  LayoutContainer,
  LogoContainer,
  SearchBarContainer,
  SloganContainer,
  VersionTextContainer,
} from "../../styles/indexElements";

const Home: React.FC = () => {
  const { currentSearchSource } = useData();
  const { setAlertMessage } = useAlert();

  useEffect(() => {
    console.log("currentSearchSource:", currentSearchSource);
    console.log("testing enums", EDirection["Up" as keyof typeof EDirection]);

    if (
      process.env.REACT_APP_BACKEND_URL === null ||
      process.env.REACT_APP_BACKEND_URL === ""
    ) {
      setAlertMessage(
        "Warning: Backend URL is not set, frontend is misconfigured.",
      );
    } else {
      PingBackend()
        .then((response) => {
          if (response === "ok") {
            console.log("Ping response:", response);
          } else {
            setAlertMessage(
              "Warning: Initializing ping request to backend failed.",
            );
          }
        })
        .catch(() => {
          setAlertMessage(
            "Warning: Initializing ping request to backend failed.",
          );
        });
    }
  }, [currentSearchSource, setAlertMessage]);

  return (
    <LayoutContainer>
      <Header />
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
        {environment.version !== "" ? "v" + environment.version : ""}
      </VersionTextContainer>
    </LayoutContainer>
  );
};

export default Home;
