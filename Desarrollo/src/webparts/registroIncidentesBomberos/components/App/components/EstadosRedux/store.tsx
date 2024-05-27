import { configureStore } from "@reduxjs/toolkit"

import miUsuario from "./miUsuarioSlice"
import paginaActual from "./paginaActual"

export const store = configureStore({
    reducer: {
        MiUsuario: miUsuario,
        PaginaActual: paginaActual
    }
})