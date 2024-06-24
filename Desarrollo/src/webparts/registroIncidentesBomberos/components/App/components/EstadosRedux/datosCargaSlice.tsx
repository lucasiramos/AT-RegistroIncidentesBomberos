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
        Region: {
            Id: null,
            Nombre: null
        },
        Ciudad: {
            Id: null,
            Nombre: null
        },
        TipoSiniestro: {
            Id: null,
            Nombre: null,
            Tercero: null
        },
        Relato: null,
        Grabacion: {
            PuedeGrabar: null,
            MicrofonoPrendido: null,
            Grabando: null,
            Relato: null,
            RelatoHTML: null,
            TranscripcionTemporal: null,
            TranscripcionFinal: null
        },
        DaniosVehiculoAsegurado: null,
        NumeroPartePolicial: null,
        Comisaria: {
            Id: null,
            Nombre: null
        },
        TercerosInvolucrados: null,
        ResponsableSiniestro: null
    },
    Tercero: {
        Nombre: null,
        RUT: null,
        RUTDigitoVerificador: null,
        Telefono: null,
        Email: null,
        Marca: {
            Id: null,
            Nombre: null
        },
        Modelo: {
            Id: null,
            Nombre: null
        },
        Patente: null,
        DaniosVehiculoTercero: null
    },
    AceptoDeclaracionJurada: false
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
        },
        CambiarAceptoDeclaracionJurada: (state, action) => {
            state.AceptoDeclaracionJurada = action.payload
        }
    }
})

export const { CambiarVehiculoAsegurado, CambiarConductorAsegurado, CambiarSiniestro, CambiarTercero, CambiarAceptoDeclaracionJurada } = miUsuarioSlice.actions

export default miUsuarioSlice.reducer