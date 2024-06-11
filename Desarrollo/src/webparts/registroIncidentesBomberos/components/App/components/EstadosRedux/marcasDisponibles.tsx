// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marcas: []
}

export const marcasDisponiblesSlice = createSlice({
    name: 'MarcasDisponibles',
    initialState,
    reducers: {
        CambiarMarcasDisponibles: (state, action) => {
            state.marcas = action.payload
        }
    }
})

export const { CambiarMarcasDisponibles } = marcasDisponibles.actions

export default marcasDisponibles.reducer