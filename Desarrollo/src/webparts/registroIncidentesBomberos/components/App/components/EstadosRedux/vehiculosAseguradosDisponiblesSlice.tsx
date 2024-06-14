// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehiculos: [
        {
            Id: 2,
            IdMarca: 2,
            Marca: "Freightliner",
            IdModelo: 2,
            Modelo: "Business Class",
            Patente: "JPYG79"
        },{
            Id: 3,
            IdMarca: 3,
            Marca: "Mercedez Benz",
            IdModelo: 3,
            Modelo: "Actros 1846",
            Patente: "KVYP20"
        },
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Mitsubishi",
            IdModelo: 1,
            Modelo: "Montero Sport 2.4",
            Patente: "LVVP79"
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