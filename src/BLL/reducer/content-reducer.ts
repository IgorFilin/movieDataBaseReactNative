import {createSlice} from "@reduxjs/toolkit";
import {contentThunk} from "../thunk/contentThunk";
import {SearchTitleOneFilmType} from "../types/types";

const initialState = {
    films: [] as Array<SearchTitleOneFilmType>,
    page: 1 as number,
    searchTitle: '' as string,
    isLoading: false as boolean
}

export const contentSlice = createSlice({
    initialState,
    name: 'content',
    reducers: {
        changePage: (state) => {
            state.page = state.page++
        },
        saveSearchTitle: (state, action) => {
            state.searchTitle = action.payload.title
        }
    },
    extraReducers: (builder) => {
        builder.addCase(contentThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(contentThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.films = action.payload.Search
        })
        builder.addCase(contentThunk.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const contentReducer = contentSlice.reducer