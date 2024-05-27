import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Email: null,
    IdUsuario: null,
    NombreUsuario: null,
    Administrador: null,
    TipoUsuario: "Bomberos"
}

export const miUsuarioSlice = createSlice({
    name: 'MiUsuario',
    initialState,
    reducers: {
        CambiarMiUsuario: (state, action) => {
            state.Email = action.payload.Email
            state.IdUsuario = action.payload.IdUsuario
            state.NombreUsuario = action.payload.NombreUsuario
            state.Administrador = action.payload.Administrador
            state.TipoUsuario = action.payload.TipoUsuario
        }
    }
})

export const { CambiarMiUsuario } = miUsuarioSlice.actions

export default miUsuarioSlice.reducer