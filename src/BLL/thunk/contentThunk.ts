import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../DAL/api";
import {SearchFilmByIdType, SearchTitleOneFilmType} from "../types/types";


export const contentThunk = createAsyncThunk('content/getContent', async ({
                                                                              id,
                                                                              page,
                                                                              title,
                                                                          }: { title?: string, page?: number, id?: string }, thunkAPI) => {
    try {
        let responseArr = [] as Array<SearchTitleOneFilmType>
        let responseObj = {} as SearchFilmByIdType
        if (page || title) {
            const response = await api.getContent(title, page)
            responseArr = response.data.Search
            return responseArr
        } else if (id) {
            const response = await api.getContent('',null,id,'full')
            responseObj = response.data
            return  responseObj
        } else return responseArr


    } catch (err) {

        return thunkAPI.rejectWithValue(err)
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

