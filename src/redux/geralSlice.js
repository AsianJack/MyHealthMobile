import {createSlice} from "@reduxjs/toolkit";

const initialValues = {
    uid:null,
    email:null,
    id:null
}

export const geralSlice = createSlice({
    name:"UID",
    initialState: initialValues,
    reducers:{
        reducerSetUID: (state, action)=>{
            state.uid = action.payload.uid
            state.email = action.payload.email
        }
    }
})

export const {reducerSetUID} = geralSlice.actions

export default geralSlice.reducer