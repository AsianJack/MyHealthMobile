import {createSlice} from "@reduxjs/toolkit";

const initialValues = {
    idvac:null
}

export const idvacSlice = createSlice({
    name:"vacina",
    initialState: initialValues,
    reducers:{
        reducerSetvac: (state, action)=>{
            state.idvac = action.payload.idvac
        }
    }
})

export const {reducerSetvac} = idvacSlice.actions

export default idvacSlice.reducer