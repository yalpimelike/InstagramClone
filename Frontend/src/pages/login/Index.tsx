import "../login/../../css/login.css";
import image4 from "../../images/screenshot4.png";
import { Container, Grid } from "@mui/material";
import Footer from "./Footer";
import Form from "./Form";

export default function Index() {
  return (
    <div>
      <Container className="login-container">
        <Grid container className="login-container-grid">
          <Grid item xs={8} className="login-fotos">
            <img className="image1" src={image4}></img>
            <img className="image2" src={image4}></img>
          </Grid>
          <Form />
        </Grid>
      </Container>

      <Grid>
        <Footer />
      </Grid>
    </div>
  );
}
