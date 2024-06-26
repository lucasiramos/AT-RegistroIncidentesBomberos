// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marcas: []
}

export const marcasVehiculosAseguradosDisponiblesSlice = createSlice({
    name: 'MarcasVehiculosAseguradosDisponibles',
    initialState,
    reducers: {
        CambiarMarcasVehiculosAseguradosDisponibles: (state, action) => {
            state.marcas = action.payload
        }
    }
})

export const { CambiarMarcasVehiculosAseguradosDisponibles } = marcasVehiculosAseguradosDisponiblesSlice.actions

export default marcasVehiculosAseguradosDisponiblesSlice.reducer