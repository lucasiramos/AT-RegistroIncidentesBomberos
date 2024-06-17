// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vehiculos: [
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Toyota",
            IdModelo: 1,
            Modelo: "4Runner Limited 4X4",
            Patente: "GKKW43"
        },{
            Id: 2,
            IdMarca: 2,
            Marca: "Freightliner",
            IdModelo: 2,
            Modelo: "Business Class",
            Patente: "JPYG79"
        },{
            Id: 2,
            IdMarca: 2,
            Marca: "Hyundai",
            IdModelo: 2,
            Modelo: "H1 CRDI GLS 2.5",
            Patente: "JWRK82"
        },{
            Id: 2,
            IdMarca: 2,
            Marca: "Ford Ranger",
            IdModelo: 2,
            Modelo: "Business Class",
            Patente: "JXBK74"
        },
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Fiat",
            IdModelo: 1,
            Modelo: "Doblo Cargo (1,6 cc)",
            Patente: "KJHB55"
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
            Marca: "Maxus",
            IdModelo: 1,
            Modelo: "V80 Cargo Van",
            Patente: "LDST69"
        },
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Mitsubishi",
            IdModelo: 1,
            Modelo: "Montero Sport 2.4",
            Patente: "LVVP79"
        },
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Finning 420",
            IdModelo: 1,
            Modelo: "Sportage Ex",
            Patente: "RJXT99"
        },
        {
            Id: 1,
            IdMarca: 1,
            Marca: "Kia",
            IdModelo: 1,
            Modelo: "Sportage Ex",
            Patente: "TGYL10"
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