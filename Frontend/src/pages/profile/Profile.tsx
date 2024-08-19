import { Button, Container, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import * as item from "../../datas/iconitem";
import { useState } from "react";

export default function Profile() {
  const border = "profile-opcions-border-top";
  const [tabPosts, setTabPosts] = useState(border);
  const [tabSaved, setTabSaved] = useState("");
  const [tabTagged, setTabTagged] = useState("");

  return (
    <Container style={{ maxWidth: 1000, marginTop: 30 }}>
      <Grid>
        {/* HEADER */}
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              xs={5}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                className="profile-image"
                src="https://picsum.photos/id/237/150/150"
              ></img>
            </Grid>
            <Grid item xs={7}>
              <div style={{ display: "flex" }}>
                <h3>Kullanıcı Adı</h3>
                <Button>Profili düzenle</Button>
                <Button>Arşivi Gör</Button>
                <item.setting />
              </div>
              <div style={{ display: "flex" }}>
                <h3>2 Gönderi </h3>
                <h3>2 Takipçi </h3>
                <h3>2 Takip</h3>
              </div>
              <div>
                <p>Full Name</p>
                <Link to={"#"}>Thread Link</Link>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* STORYs */}
        <div style={{ margin: 50, display: "flex" }}>
          {" "}
          <img
            style={{ borderRadius: 80, marginLeft: 50 }}
            src="https://picsum.photos/id/237/80/80"
          ></img>{" "}
          <img
            style={{ borderRadius: 80, marginLeft: 50 }}
            src="https://picsum.photos/id/237/80/80"
          ></img>{" "}
          <img
            style={{ borderRadius: 80, marginLeft: 50 }}
            src="https://picsum.photos/id/237/80/80"
          ></img>{" "}
          <img
            style={{ borderRadius: 80, marginLeft: 50 }}
            src="https://picsum.photos/id/237/80/80"
          ></img>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
              backgroundColor: "white",
              marginLeft: 50,
            }}
          ></div>
        </div>
        {/* ACTİONS BAR*/}
        <div className="profile-opcions-container">
          <Link
            className={`profile-opcions  ${tabPosts}`}
            to={"post"}
            onClick={() => {
              setTabTagged(""), setTabPosts(border), setTabSaved("");
            }}
          >
            <item.posts />
            <a style={{ marginLeft: 5 }}>GÖNDERİLER</a>
          </Link>
          <Link
            className={`profile-opcions ${tabSaved}`}
            to={"saved"}
            onClick={() => {
              setTabTagged(""), setTabPosts(""), setTabSaved(border);
            }}
          >
            <item.saved />
            <a style={{ marginLeft: 5 }}>KAYDEDİLENLER</a>
          </Link>
          <Link
            className={`profile-opcions ${tabTagged}`}
            to={"tagged"}
            onClick={() => {
              setTabTagged(border), setTabPosts(""), setTabSaved("");
            }}
          >
            <item.tagged />
            <a style={{ marginLeft: 5 }}>ETİKETLENENLER</a>
          </Link>
        </div>
      </Grid>
      <Grid item >
        <div id="detail">
          <Outlet />
        </div>
      </Grid>
    </Container>
  );
}
