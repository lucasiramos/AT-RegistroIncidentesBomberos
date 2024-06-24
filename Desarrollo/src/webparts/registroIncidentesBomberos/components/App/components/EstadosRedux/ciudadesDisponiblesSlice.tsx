// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ciudades: []
}

export const ciudadesDisponiblesSlice = createSlice({
    name: 'CiudadesDisponibles',
    initialState,
    reducers: {
        CambiarCiudadesDisponibles: (state, action) => {
            state.ciudades = action.payload
        }
    }
})

export const { CambiarCiudadesDisponibles } = ciudadesDisponiblesSlice.actions

export default ciudadesDisponiblesSlice.reducer