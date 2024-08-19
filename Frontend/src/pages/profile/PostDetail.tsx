import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import * as item from "../../datas/postItem";
import * as dto from "../../dto/Post";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const { postId } = useParams();
  const posts = useSelector((state: RootState) => state.postList.data);
  const [post, setPost] = useState();

  useEffect(() => {
    //  const post =  posts.find((post : dto.post) => post.data.id === 1);
  }, []);

  return (
    <Container className="post-details-container">
      <Grid container>
        <div className="post-details-grid">
          <Grid item xs={6}>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus totam tempore aliquid debitis, suscipit sint at
              cupiditate fugiat, veniam quam corporis iusto expedita quod
              accusantium. Repellat autem natus at sed!
            </h1>
          </Grid>
          <Grid item xs={6}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <img
                  className="story-image-xs"
                  src="https://picsum.photos/id/74/30/30"
                ></img>
                <h3>Username</h3>
              </div>
              <item.more />
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="story-image-xs"
                src="https://picsum.photos/id/74/30/30"
              ></img>
              <div>
                <h3>Username</h3>
                <p>36h</p>
              </div>
            </div>
            <div>Commentsss</div>
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <div>
                <item.like />
                <item.comment />
              </div>
              <item.save />
            </div>
            <div>
              <a>Kişi bunu beğendi</a>
            </div>
            <div>Yorum Ekle</div>
          </Grid>

          <div style={{ top: 0, right: 0, position: "fixed", margin: 30 }}>
            <item.exit />
          </div>
        </div>
      </Grid>
    </Container>
  );
}
