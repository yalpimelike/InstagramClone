import { configureStore } from "@reduxjs/toolkit";
import postListReducer from "../slice/PostListSlice"
import userListReducer from "../slice/UserListSlice"
export const Store = configureStore({
    reducer : {
        postList : postListReducer,
        userList : userListReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch