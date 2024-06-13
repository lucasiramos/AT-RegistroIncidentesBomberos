// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comunas: []
}

export const comunasDisponiblesSlice = createSlice({
    name: 'ComunasDisponibles',
    initialState,
    reducers: {
        CambiarComunasDisponibles: (state, action) => {
            state.comunas = action.payload
        }
    }
})

export const { CambiarComunasDisponibles } = comunasDisponiblesSlice.actions

export default comunasDisponiblesSlice.reducer