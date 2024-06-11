import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagina: "Mis siniestros en curso"
}

export const paginaActualSlice = createSlice({
    name: 'PaginaActual',
    initialState,
    reducers: {
        CambiarPaginaActual: (state, action) => {
            state.pagina = action.payload
        }
    }
})

export const { CambiarPaginaActual } = paginaActualSlice.actions

export default paginaActualSlice.reducer