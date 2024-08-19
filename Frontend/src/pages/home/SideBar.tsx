import { Grid } from "@mui/material";
import "../../css/sidebar.css";
import * as item from "../../datas/sidebarItem";
import { Outlet } from "react-router-dom";
export default function SideBar() {
  return (
    <Grid container className="home-container">
      <Grid item xs={2} className="sidebar-container">
        <div className="sidebar">
          <item.instagramLogo />
          <div>
            <item.homepage />
            <item.search />
            <item.explore />
            <item.reels />
            <item.message />
            <item.notifications />
            <item.create />
            <item.profile />
          </div>
          <div className="sidebar-footer">
            <item.threads />
            <item.more />
          </div>
        </div>
      </Grid>
      <Grid item xs={10} >
        <div  className="homepage-container">
          <Outlet />
        </div>
      </Grid>
    </Grid>
  );
}
