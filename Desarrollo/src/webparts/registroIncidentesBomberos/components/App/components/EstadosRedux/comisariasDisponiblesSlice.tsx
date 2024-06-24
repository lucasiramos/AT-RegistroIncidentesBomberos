// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comisarias: []
}

export const comisariasDisponiblesSlice = createSlice({
    name: 'ComisariasDisponibles',
    initialState,
    reducers: {
        CambiarComisariasDisponibles: (state, action) => {
            state.comisarias = action.payload
        }
    }
})

export const { CambiarComisariasDisponibles } = comisariasDisponiblesSlice.actions

export default comisariasDisponiblesSlice.reducer