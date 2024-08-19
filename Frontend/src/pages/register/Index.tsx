import { Button, Container, Grid } from "@mui/material";
import googlePlay from "../../images/logos/BFthdeAc5KC.png";
import appPlay from "../../images/logos/XUCupIzGmzB.png";
import facebookLogo from "../../images/logos/facebook-logo.png";
import instTextLogo from "../../images/logos/ins-text-logo.png";
import { useTranslation } from "react-i18next";
import Footer from "../login/Footer";
import Form from "./Form";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div>
      <Container className="register-container">
        <Grid className="box" style={{ paddingBottom: 30 }}>
          <img
            className="inst-text-logo"
            src={instTextLogo}
            style={{ margin: 40 }}
          ></img>

          <div className="login">
            <div className="a">
              <a>Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</a>
            </div>
            <Button variant="contained" className="login-button">
              <img className="facebook-logo" src={facebookLogo}></img>
              {t("login.login-with-facebook")}
            </Button>

            <div className="or-line">
              <hr></hr>
            </div>

            <Form />
          </div>
        </Grid>

        <Grid className="box" padding={3}>
          <a>{t("login.havent-account")}</a>
          <a href="register">{t("login.sign-in")}</a>
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
      </Container>
      <Footer />
    </div>
  );
}
