// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelos: [
        {
            Id: 1,
            IdMarca: 1,
            Nombre: "Argo"
        },
        {
            Id: 2,
            IdMarca: 1,
            Nombre: "Cronos"
        },
        {
            Id: 3,
            IdMarca: 2,
            Nombre: "Fiesta"
        },
        {
            Id: 4,
            IdMarca: 2,
            Nombre: "Focus"
        },
        {
            Id: 5,
            IdMarca: 3,
            Nombre: "Etios"
        },
        {
            Id: 6,
            IdMarca: 3,
            Nombre: "Yaris"
        }
    ]
}

export const modelosDisponiblesSlice = createSlice({
    name: 'ModelosDisponibles',
    initialState,
    reducers: {
        CambiarModelosDisponibles: (state, action) => {
            state.modelos = action.payload
        }
    }
})

export const { CambiarModelosDisponibles } = modelosDisponiblesSlice.actions

export default modelosDisponiblesSlice.reducer