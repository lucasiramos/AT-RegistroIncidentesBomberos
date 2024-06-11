// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelos: []
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

export const { CambiarModelosDisponibles } = modelosDisponibles.actions

export default modelosDisponibles.reducer