import {createSlice} from "@reduxjs/toolkit";
import {contentThunk} from "../thunk/contentThunk";
import {SearchFilmByIdType, SearchTitleOneFilmType} from "../types/types";

const initialState = {
    films: [] as Array<SearchTitleOneFilmType>,
    page: 2 as number,
    searchFilmById:{} as SearchFilmByIdType | {},
    searchTitle: '' as string,
    isLoading: false as boolean,
    currentId:'',
}

export const contentSlice = createSlice({
    initialState,
    name: 'content',
    reducers: {
        changePage: (state) => {
            state.page = state.page + 1
        },
        clearState:(state)=>{
            state.films = []
            state.page = 2
            state.searchFilmById = {}
            state.searchTitle = ''
            state.currentId = ''
        }
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
            if(action.payload && Array.isArray(action.payload)){
                state.films = [...state.films,...action.payload]
            }
            if(action.meta.arg.id && typeof action.payload === 'object' &&
                !Array.isArray(action.payload) &&
                action.payload !== null){
                state.currentId = action.meta.arg.id
                state.searchFilmById = action.payload
            }

            if(action.meta.arg.title){
                state.searchTitle = action.meta.arg.title
            }

        })
        builder.addCase(contentThunk.rejected, (state,action) => {
            if(action.meta.arg.page === 1){
                state.isLoading = false
            }
        })
    }
})

export const contentReducer = contentSlice.reducer