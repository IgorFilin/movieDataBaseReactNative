import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {contentReducer} from "../reducer/content-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
   contentReducer,
})

export type AppStoreType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<AppStoreType> = useSelector;

export const useAppDispatch = (): any => useDispatch<AppDispatch>();

export const store = configureStore({
    reducer:rootReducer,
})
// @ts-ignore
window.store = store