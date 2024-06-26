// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cuerpos: []
}

export const cuerposBomberosDisponiblesSlice = createSlice({
    name: 'CuerposBomberosDisponibles',
    initialState,
    reducers: {
        CambiarCuerposBomberosDisponibles: (state, action) => {
            state.cuerpos = action.payload
        }
    }
})

export const { CambiarCuerposBomberosDisponibles } = cuerposBomberosDisponiblesSlice.actions

export default cuerposBomberosDisponiblesSlice.reducer