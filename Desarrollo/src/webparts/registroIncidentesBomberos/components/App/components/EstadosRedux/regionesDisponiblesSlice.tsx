// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regiones: [
        {
            Id: 1,
            Nombre: "ANTOFAGASTA"
        },{
            Id: 2,
            Nombre: "ARAUCANÍA"
        },{
            Id: 2,
            Nombre: "ARICA Y PARINACOTA"
        },{
            Id: 2,
            Nombre: "ATACAMA"
        },{
            Id: 2,
            Nombre: "AYSÉN DEL GENERAL CARLOS IBÁÑEZ DEL CAMPO"
        },{
            Id: 2,
            Nombre: "BIOBÍO"
        },{
            Id: 2,
            Nombre: "COQUIMBO"
        },{
            Id: 2,
            Nombre: "LIBERTADOR GENERAL BERNARDO OHIGGINS"
        },{
            Id: 2,
            Nombre: "LOS LAGOS"
        },{
            Id: 1,
            Nombre: "LOS RÍOS"
        },{
            Id: 1,
            Nombre: "MAGALLANES Y ANTÁRTICA CHILENA"
        },{
            Id: 1,
            Nombre: "MAULE"
        },{
            Id: 1,
            Nombre: "ÑUBLE"
        },{
            Id: 1,
            Nombre: "OTRO"
        },{
            Id: 1,
            Nombre: "REGIÓN METROPOLITANA DE SANTIAGO"
        },{
            Id: 1,
            Nombre: "TARAPACÁ"
        },{
            Id: 1,
            Nombre: "VALPARAÍSO"
        }
    ]
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