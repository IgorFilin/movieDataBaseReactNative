import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../DAL/api";
import {contentSlice} from "../reducer/content-reducer";


export const contentThunk = createAsyncThunk('content/getContent',async ({title,page}:{title:string,page:number}, thunkAPI)=>{

        thunkAPI.dispatch(contentSlice.actions.saveSearchTitle(title))
        const response = await api.getContent(title,page)
        return response.data


})