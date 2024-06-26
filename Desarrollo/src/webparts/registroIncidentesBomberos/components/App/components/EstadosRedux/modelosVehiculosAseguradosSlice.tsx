// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelos: []
}

export const modelosVehiculosAseguradosDisponiblesSlice = createSlice({
    name: 'ModelosVehiculosAseguradosDisponibles',
    initialState,
    reducers: {
        CambiarModelosVehiculosAseguradosDisponibles: (state, action) => {
            state.modelos = action.payload
        }
    }
})

export const { CambiarModelosVehiculosAseguradosDisponibles } = modelosVehiculosAseguradosDisponiblesSlice.actions

export default modelosVehiculosAseguradosDisponiblesSlice.reducer