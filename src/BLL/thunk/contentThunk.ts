import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../DAL/api";
import {SearchTitleOneFilmType} from "../types/types";


export const contentThunk = createAsyncThunk('content/getContent', async ({
                                                                              title,
                                                                              page,
                                                                               id
                                                                          }: { title?: string, page?: number, id?:string}, thunkAPI) => {
    try {
        let responseArr = [] as Array<SearchTitleOneFilmType>
        if(page || id || title){
            const response = await api.getContent(title, page)
            responseArr = response.data.Search
            return responseArr
        } else  return  responseArr


    } catch (err) {

     return  thunkAPI.rejectWithValue(err)
    }

})

// export const getFilmByIdThunk = createAsyncThunk('content/getContent', async ({
//
//                                                                           }: { }, thunkAPI) => {
//     try {
//         const response = await api.getContent()
//         return response.data
//     } catch (err) {
//
//         return  thunkAPI.rejectWithValue(err)
//     }
//
// })

