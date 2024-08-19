import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { useEffect } from "react";
import * as dto from "../../dto/User";
import { fetchUserListWitoutBeFriend } from "../../slice/UserListSlice";
export default function FriendsBar() {
  const dispatch = useDispatch<AppDispatch>();
  const userlist = useSelector((state: RootState) => state.userList.data);

  useEffect(() => {
    dispatch(fetchUserListWitoutBeFriend());
  }, []);

  return (
    <div className="friends-bar-container">
      <div className="friends-bar-header">
        <div style={{ display: "flex" }}>
          <img
            className="friendbar-photo"
            src="https://picsum.photos/id/237/200/300"
          ></img>
          <div>
            <a>sivrikayamelike</a>
            <br></br>
            <a style={{ color: "gray" }}>Melike Sivrikaya</a>
          </div>
        </div>
        <a className="friends-follow" href="#">
          {" "}
          Geçiş Yap
        </a>
      </div>
      <div className="friends-bar-middle">
        <a style={{ color: "gray" }}>Senin için önerilenler</a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Tümünü gör
        </a>
      </div>
      {userlist.map((user: dto.userBar) => (
        <div className="friends">
          <div style={{ display: "flex" }}>
            <div>
              <img className="friendbar-photo" src={user.profilePhoto}></img>
            </div>
            <div>
              <a>{user.firstname + " " + user.lastname}</a>
              <br></br>
              <a style={{ color: "gray" }}>Senin için öneriliyor</a>
            </div>
          </div>
          <div>
            <a className="friends-follow" href="#">
              Takip Et
            </a>
          </div>
        </div>
      ))}
      <div className="friends-bar-footer">
        <a href="#">Hakkında . </a>
        <a href="#">Yardım . </a>
        <a href="#">Basın . </a>
        <a href="#">API . </a>
        <a href="#">İş Fırsatları . </a>
        <a href="#">Gizlilik . </a>
        <a href="#">Koşullar . </a>
        <a href="#">Konumlar . </a>
        <a href="#">Dil . </a>
        <a href="#">Meta Verified . </a>
        <br></br>
        <div style={{ marginTop: 15 }}>
          <a>© 2023 INSTAGRAM FROM META</a>
        </div>
      </div>
    </div>
  );
}
