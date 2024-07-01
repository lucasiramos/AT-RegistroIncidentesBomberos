import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Email: null,
    UsuariosId: null,
    Nombre: null,
    Apellido: null,
    Telefono: null,
    RolId: null,
    Habilitado: null
}

export const miUsuarioSlice = createSlice({
    name: 'MiUsuario',
    initialState,
    reducers: {
        CambiarMiUsuario: (state, action) => {
            state.Email = action.payload.Email
            state.UsuariosId = action.payload.UsuariosId
            state.Nombre = action.payload.Nombre
            state.Apellido = action.payload.Apellido
            state.Telefono = action.payload.Telefono
            state.RolId = action.payload.RolId
            state.Habilitado = action.payload.Habilitado
        }
    }
})

export const { CambiarMiUsuario } = miUsuarioSlice.actions

export default miUsuarioSlice.reducer