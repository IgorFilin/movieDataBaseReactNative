import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    initialState:{
        films:[]
    },
    name:'content',
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase('',()=>{

        })
    }
})

export const contentReducer = slice.reducer