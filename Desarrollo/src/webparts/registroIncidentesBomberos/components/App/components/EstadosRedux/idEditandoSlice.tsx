import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: ""
}

export const idEditandoSlice = createSlice({
    name: 'IdEditando',
    initialState,
    reducers: {
        CambiarIdEditando: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { CambiarIdEditando } = idEditandoSlice.actions

export default idEditandoSlice.reducer