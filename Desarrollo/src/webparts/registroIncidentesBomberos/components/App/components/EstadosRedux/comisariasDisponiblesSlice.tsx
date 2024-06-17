// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comisarias: [
        {
            Id: 1,
            Nombre: "1° Comisaría Santiago"
        },{
            Id: 2,
            Nombre: "2° Comisaría Santiago"
        },{
            Id: 3,
            Nombre: "3° Comisaría Santiago"
        },{
            Id: 4,
            Nombre: "4° Comisaría Santiago"
        },{
            Id: 5,
            Nombre: "21° Comisaría Estación Central"
        },{
            Id: 6,
            Nombre: "58° Comisaría Población Alessandri"
        },
    ]
}

export const comisariasDisponiblesSlice = createSlice({
    name: 'ComisariasDisponibles',
    initialState,
    reducers: {
        CambiarComisariasDisponibles: (state, action) => {
            state.comunas = action.payload
        }
    }
})

export const { CambiarComisariasDisponibles } = comisariasDisponiblesSlice.actions

export default comisariasDisponiblesSlice.reducer