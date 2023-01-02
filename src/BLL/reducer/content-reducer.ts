import {createSlice} from "@reduxjs/toolkit";
import {contentThunk} from "../thunk/contentThunk";
import {SearchTitleOneFilmType} from "../types/types";

const initialState =  {
    films: [] as Array<SearchTitleOneFilmType> ,
    isLoading: false as boolean
}

const slice = createSlice({
    initialState,
    name: 'content',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(contentThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(contentThunk.fulfilled, (state,action) => {
            state.isLoading = false
            state.films = action.payload.Search
        })
        builder.addCase(contentThunk.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const contentReducer = slice.reducer