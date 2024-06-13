// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marcas: [
        {
            Id: 1,
            Nombre: "Fiat"
        },
        {
            Id: 2,
            Nombre: "Ford"
        },
        {
            Id: 3,
            Nombre: "Toyota"
        }
    ]
}

export const marcasDisponiblesSlice = createSlice({
    name: 'MarcasDisponibles',
    initialState,
    reducers: {
        CambiarMarcasDisponibles: (state, action) => {
            state.marcas = action.payload
        }
    }
})

export const { CambiarMarcasDisponibles } = marcasDisponiblesSlice.actions

export default marcasDisponiblesSlice.reducer