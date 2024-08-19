import { createBrowserRouter } from "react-router-dom";
import SideBar from "../pages/home/SideBar";
import Explore from "../pages/explore/Index";
import Login from "../pages/login/Index";
import Register from "../pages/register/Index";
import HomePage from "../pages/home/HomePage";
import Profile from "../pages/profile/Profile";
import Posts from "../pages/profile/Posts";
import Saved from "../pages/profile/Saved";
import Tagged from "../pages/profile/Tagged";
import PostDetail from "../pages/profile/PostDetail";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "post",
            element: <Posts />,
            children: [
              {
                path: ":postId",
                element: <PostDetail />,
              },
            ],
          },

          {
            path: "saved",
            element: <Saved />,
          },
          {
            path: "tagged",
            element: <Tagged />,
          },
        ],
      },
    ],
  },
]);
