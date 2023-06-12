import { configureStore } from "@reduxjs/toolkit";
import geralSlice from "./geralSlice";
import idvacSlice from "./idvacSlice";

export const store = configureStore({
    reducer:{
        auth: geralSlice,
        idvac:idvacSlice
    }
})