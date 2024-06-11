// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehiculos: [
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Seagrave",
            IdModelo: 1,
            Modelo: "H1",
            Patente: "AA-1111"
        },{
            Id: 2,
            IdMarca: 2,
            Marca: "Scania",
            IdModelo: 2,
            Modelo: "F03",
            Patente: "BB-2222"
        },{
            Id: 3,
            IdMarca: 2,
            Marca: "Scania",
            IdModelo: 3,
            Modelo: "B04",
            Patente: "CC-3333"
        }
    ]
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