import {createSlice} from "@reduxjs/toolkit";
import {contentThunk} from "../thunk/contentThunk";
import {SearchTitleOneFilmType} from "../types/types";

const initialState = {
    films: [] as Array<SearchTitleOneFilmType>,
    page: 2 as number,
    searchTitle: '' as string,
    isLoading: false as boolean
}

export const contentSlice = createSlice({
    initialState,
    name: 'content',
    reducers: {
        changePage: (state) => {
            state.page = state.page + 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(contentThunk.pending, (state,action) => {
            if(action.meta.arg.page === 1){
                state.isLoading = true
            }
        })
        builder.addCase(contentThunk.fulfilled, (state, action) => {
            if(action.meta.arg.page === 1){
                state.isLoading = false
            }
            state.films = [...state.films,...action.payload.Search]
            state.searchTitle = action.meta.arg.title
        })
        builder.addCase(contentThunk.rejected, (state,action) => {
            if(action.meta.arg.page === 1){
                state.isLoading = false
            }
        })
    }
})

export const contentReducer = contentSlice.reducer