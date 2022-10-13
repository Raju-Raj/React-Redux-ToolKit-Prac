import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading:false,
    user:[],
    error:''
}


export const postUserData = createAsyncThunk('user/postUser',(user)=>{
    return axios.post('https://jsonplaceholder.typicode.com/posts',user)
    .then(res=>res.data)
})

const postUserReducer = createSlice({
    name:'user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(postUserData.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(postUserData.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
            state.error=''
        })
        builder.addCase(postUserData.rejected,(state,action)=>{
            state.loading=false
            state.user=[]
            state.error=action.error.message
        })
    }
})

export default postUserReducer.reducer

