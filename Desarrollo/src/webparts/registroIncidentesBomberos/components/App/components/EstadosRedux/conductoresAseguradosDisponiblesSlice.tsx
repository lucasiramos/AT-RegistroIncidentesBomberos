// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conductores: [
        {
            Id: 1,
            Nombre: "Andres Gimenez",
            RUT: "11111111-1"
        },{
            Id: 2,
            Nombre: "Diego Maira",
            RUT: "22222222-2"
        },{
            Id: 1,
            Nombre: "Pablo Sans",
            RUT: "33333333-3"
        }
    ]
}

export const conductoresAseguradosDisponiblesSlice = createSlice({
    name: 'ConductoresAseguradosDisponibles',
    initialState,
    reducers: {
        CambiarConductoresAseguradosDisponibles: (state, action) => {
            state.conductores = action.payload
        }
    }
})

export const { CambiarConductoresAseguradosDisponibles } = conductoresAseguradosDisponiblesSlice.actions

export default conductoresAseguradosDisponiblesSlice.reducer