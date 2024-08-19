import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostListByUserId = createAsyncThunk("fetchPostList" , async () => {
    const response = await axios.get(`http://localhost:8082/post/userid/1`)
    return response.data
})

const postListSlice = createSlice({
    name : "postList",
    initialState : {
        data :  [],
        status : "",
        isloading : false
   },
   reducers : {

   },
   extraReducers(builder) {
       builder.addCase(fetchPostListByUserId.fulfilled , (state , actions) => {
        state.status = "success"
        state.isloading = false
        state.data = actions.payload
       }) 
       ,
       builder.addCase(fetchPostListByUserId.pending , (state) => {
        state.status = "loading"
        state.isloading = true
       }),
       builder.addCase(fetchPostListByUserId.rejected , (state) => {
        state.status = "failed"
        state.isloading = false
       })
   },
})

export default postListSlice.reducer;