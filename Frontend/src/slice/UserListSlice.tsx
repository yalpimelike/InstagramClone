import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserListWitoutBeFriend = createAsyncThunk("fetchUserList" , async () => {
    const response = await axios.get(`http://localhost:8082/user/without/1`)
    return response.data
})

const userListSlice = createSlice({
    name : "userList",
    initialState : {
        data :  [],
        status : "",
        isloading : false
   },
   reducers : {

   },
   extraReducers(builder) {
       builder.addCase(fetchUserListWitoutBeFriend.fulfilled , (state , actions) => {
        state.status = "success"
        state.isloading = false
        state.data = actions.payload
       }) 
       ,
       builder.addCase(fetchUserListWitoutBeFriend.pending , (state) => {
        state.status = "loading"
        state.isloading = true
       }),
       builder.addCase(fetchUserListWitoutBeFriend.rejected , (state) => {
        state.status = "failed"
        state.isloading = false
       })
   },
})

export default userListSlice.reducer;