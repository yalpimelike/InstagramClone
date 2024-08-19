import * as dto from "../../dto/Post";
import * as item from "../../datas/postItem";
import { Link } from "react-router-dom";

export const Post: React.FC<dto.post> = ({ data }) => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <div>
            <img className="story-image" src={`${data.photourl}`}></img>
            <a>meliejldkf</a>
          </div>
          <item.more />
        </div>
        <div className="post-image">
          <img src={`${data.photourl}`}></img>
        </div>
        <div className="post-options">
          <div>
            <item.like />
            <item.comment />
            <item.share />
          </div>
          <item.save />
        </div>
        <div style={{ marginBottom: 20 }}>
          <a>{JSON.stringify(data.likes)}</a>
          <br></br>
          <div>
            <a>{data.description}</a>
          </div>
          <div>
            {data.comments.length > 0 ? (
              <Link className="comments" to={"#"}>
                {data.comments.length + " yorumun tümünü gör"}
              </Link>
            ) : (
              <div></div>
            )}
          </div>
          <a>Yorum Ekle</a>
        </div>
      </div>
    </div>
  );
};
