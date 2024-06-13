// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    siniestros: [
        {
            Id: 1,
            Nombre: "Choque",
            Terceros: true
        },{
            Id: 2,
            Nombre: "Incendio",
            Terceros: false
        },{
            Id: 3,
            Nombre: "Vuelco",
            Terceros: false
        }
    ]
}

export const tiposSiniestrosDisponiblesSlice = createSlice({
    name: 'tiposSiniestrosDisponibles',
    initialState,
    reducers: {
        CambiarTiposSiniestrosDisponibles: (state, action) => {
            state.siniestros = action.payload
        }
    }
})

export const { CambiarTiposSiniestrosDisponibles } = tiposSiniestrosDisponiblesSlice.actions

export default tiposSiniestrosDisponiblesSlice.reducer