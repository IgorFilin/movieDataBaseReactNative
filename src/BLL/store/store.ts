import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {contentReducer} from "../reducer/content-reducer";


const rootReducer = combineReducers({
   contentReducer,
})

export const store = configureStore({
    reducer:rootReducer,
})
// @ts-ignore
window.store = store