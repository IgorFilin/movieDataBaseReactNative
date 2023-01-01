import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../DAL/api";


export const contentThunk = createAsyncThunk('content/getContent',async ({title}:{title:string}, thunkAPI)=>{
    const response = await api.getContent(title)
    return response.data
})