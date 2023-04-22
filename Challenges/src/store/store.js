import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authSlice } from "../slices/AuthSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
})