import { useEffect } from "react";
import { fetchPostListByUserId } from "../../slice/PostListSlice";
import {Post} from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";

export default function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const postlist = useSelector((state : RootState) => state.postList.data)

  useEffect(() => {
    dispatch(fetchPostListByUserId());
  }, []);

  return (
    <div>
      {postlist.map((post) => (
        <Post data={post} />
      ))}
    </div>
  );
}
