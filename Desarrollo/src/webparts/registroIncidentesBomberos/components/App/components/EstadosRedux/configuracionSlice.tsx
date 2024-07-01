// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UrlAPI: ""
}

export const configuracionSlice = createSlice({
    name: 'Configuracion',
    initialState,
    reducers: {
        CambiarUrlAPI: (state, action) => {
            state.UrlAPI = action.payload
        }
    }
})

export const { CambiarUrlAPI } = configuracionSlice.actions

export default configuracionSlice.reducer