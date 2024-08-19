import { Link } from "react-router-dom";
import * as dto from "../../dto/Post";
export const Post: React.FC<dto.post> = ({ data }) => {
  return (
    <Link to={`${data.id}`}>
      <div style={{ width: 280, height: 280, marginRight: 20 }}>
        <img style={{ width: 280, height: 280 }} src={data.photourl}></img>
      </div>
    </Link>
  );
};
