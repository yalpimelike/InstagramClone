import { Grid } from "@mui/material";
import Storys from "./Storys";
import Posts from "./Posts";
import FriendsBar from "./FriendsBar";
import "../../css/home.css"

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={7}>
        <Storys />
        <Posts />
      </Grid>
      <Grid item xs={5}>
        <FriendsBar/>
      </Grid>
    </Grid>
  );
}
