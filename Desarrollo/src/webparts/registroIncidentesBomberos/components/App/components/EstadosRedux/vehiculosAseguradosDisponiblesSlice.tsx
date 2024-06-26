// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehiculos: []
}

export const vehiculosAseguradosDisponiblesSlice = createSlice({
    name: 'VehiculosAseguradosDisponibles',
    initialState,
    reducers: {
        CambiarVehiculosAseguradosDisponibles: (state, action) => {
            state.vehiculos = action.payload
        }
    }
})

export const { CambiarVehiculosAseguradosDisponibles } = vehiculosAseguradosDisponiblesSlice.actions

export default vehiculosAseguradosDisponiblesSlice.reducer