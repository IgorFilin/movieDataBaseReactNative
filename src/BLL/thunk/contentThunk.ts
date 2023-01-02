import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../DAL/api";


export const contentThunk = createAsyncThunk('content/getContent',async ({title,page}:{title:string,page:number}, thunkAPI)=>{
    const response = await api.getContent(title,page)
    return response.data
})