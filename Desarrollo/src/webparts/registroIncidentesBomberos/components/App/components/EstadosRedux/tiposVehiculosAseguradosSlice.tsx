// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tipos: []
}

export const tiposVehiculosAseguradosDisponiblesSlice = createSlice({
    name: 'TiposVehiculosAseguradosDisponibles',
    initialState,
    reducers: {
        CambiarTiposVehiculosAseguradosDisponibles: (state, action) => {
            state.tipos = action.payload
        }
    }
})

export const { CambiarTiposVehiculosAseguradosDisponibles } = tiposVehiculosAseguradosDisponiblesSlice.actions

export default tiposVehiculosAseguradosDisponiblesSlice.reducer