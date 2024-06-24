// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regiones: []
}

export const regionesDisponiblesSlice = createSlice({
    name: 'RegionesDisponibles',
    initialState,
    reducers: {
        CambiarRegionesDisponibles: (state, action) => {
            state.regiones = action.payload
        }
    }
})

export const { CambiarRegionesDisponibles } = regionesDisponiblesSlice.actions

export default regionesDisponiblesSlice.reducer