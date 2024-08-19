import { Button, Grid, List, TextField } from "@mui/material";
import { useState } from "react";
import * as dto from "../../dto/Login";
import googlePlay from "../../images/logos/BFthdeAc5KC.png";
import appPlay from "../../images/logos/XUCupIzGmzB.png";
import facebookLogo from "../../images/logos/facebook-logo.png";
import instTextLogo from "../../images/logos/ins-text-logo.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (dataControl()) {
      const data: dto.LoginDto = {
        email: userInfo,
        password: password,
      };
      authenticate(data);
    }
    // document.cookie = `jwtToken=${token}; path=/`;
  };

  const authenticate = async (data: dto.LoginDto) => {
    await axios
      .post("http://localhost:8082/login/authenticate", data)
      .then((response) => {
        setToken(response.data);
        navigate("/");
        console.log("Başarılı:", response.data);
      })
      .catch((error) => {
        setErrorMessage("login.login-error");
        setIsError(true);
        console.error("Hata:", error);
      });
  };

  const dataControl = (): boolean => {
    if (userInfo.length === 0) {
      setErrorMessage("login.input-emty-error");
      setIsError(true);
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("login.password-error");
      setIsError(true);
      return false;
    }
    return true;
  };

  return (
    <Grid item xs={8} className="login-form">
      <Grid className="box">
        <img
          className="inst-text-logo"
          src={instTextLogo}
          style={{ margin: 40 }}
        ></img>

        <div className="login">
          <TextField
            className="login-input"
            size="small"
            placeholder={t("login.input-id")}
            onChange={(e) => setUserInfo(e.target.value)}
          ></TextField>

          <TextField
            className="login-input"
            size="small"
            placeholder={t("login.input-pass")}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>

          <Button
            variant="contained"
            className="login-button"
            onClick={() => handleLogin()}
          >
            {t("login.login")}
          </Button>
          <div className="or-line">
            <hr></hr>
          </div>
        </div>

        <List className="login-options">
          <a href="#" style={{ fontWeight: " 600" }}>
            <img className="facebook-logo" src={facebookLogo}></img>
            {t("login.login-with-facebook")}
          </a>
          {isError && (
            <div className="error-message">
              <a>{t(errorMessage)}</a>
            </div>
          )}
          <div style={{ margin: 10 }}>
            <a href="#">{t("login.forgot-pass")}</a>
          </div>
        </List>
      </Grid>

      <Grid className="box" padding={3}>
        <a>{t("login.havent-account")}</a>
        <a href="register">{t("login.sign-up")}</a>
      </Grid>

      <Grid>
        <a style={{ fontSize: 14 }}>{t("login.get-app")}</a>
        <br></br>
        <img
          className="app-logo"
          src={googlePlay}
          style={{ marginTop: 13 }}
        ></img>
        <img className="app-logo" src={appPlay}></img>
      </Grid>
    </Grid>
  );
}
