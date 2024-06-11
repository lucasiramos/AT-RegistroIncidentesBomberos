import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    VehiculoAsegurado: {
        Id: null,
        IdMarca: null,
        Marca: null,
        IdModelo: null,
        Modelo: null,
        Patente: null
    },
    ConductorAsegurado: {
        Id: null,
        Nombre: null,
        RUT: null
    },
    Siniestro: {
        Fecha: null,
        Hora: null,
        Lugar: null,
        Comuna: null,
        IdTipoSiniestro: null,
        TipoSiniestro: null,
        Relato: null,
        DaniosVehiculoAsegurado: null,
        NumeroPartePolicial: null
    },
    Tercero: {
        Nombre: null,
        RUT: null,
        Telefono: null,
        Email: null,
        IdMarca: null,
        Marca: null,
        IdModelo: null,
        Modelo: null,
        Patente: null,
        DaniosVehiculoTercero: null
    }
}

export const miUsuarioSlice = createSlice({
    name: 'MiUsuario',
    initialState,
    reducers: {
        CambiarVehiculoAsegurado: (state, action) => {
            state.VehiculoAsegurado = action.payload
        },
        CambiarConductorAsegurado: (state, action) => {
            state.ConductorAsegurado = action.payload
        },
        CambiarSiniestro: (state, action) => {
            state.Siniestro = action.payload
        },
        CambiarTercero: (state, action) => {
            state.Tercero = action.payload
        }
    }
})

export const { CambiarVehiculoAsegurado, CambiarConductorAsegurado, CambiarSiniestro, CambiarTercero } = miUsuarioSlice.actions

export default miUsuarioSlice.reducer