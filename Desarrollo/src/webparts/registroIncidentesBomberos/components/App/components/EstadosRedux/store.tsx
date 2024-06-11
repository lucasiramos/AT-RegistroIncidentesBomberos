import { configureStore } from "@reduxjs/toolkit"

import miUsuario from "./miUsuarioSlice"
import paginaActual from "./paginaActual"
import datosCarga from "./datosCargaSlice"
import vehiculosAseguradosDisponibles from "./vehiculosAseguradosDisponiblesSlice"
import conductoresAseguradosDisponibles from "./conductoresAseguradosDisponiblesSlice"
import tiposSiniestrosDisponibles from "./tiposSiniestrosDisponiblesSlice"

export const store = configureStore({
    reducer: {
        MiUsuario: miUsuario,
        PaginaActual: paginaActual,
        DatosCarga: datosCarga,
        VehiculosAseguradosDisponibles: vehiculosAseguradosDisponibles,
        ConductoresAseguradosDisponibles: conductoresAseguradosDisponibles,
        TiposSiniestrosDisponibles: tiposSiniestrosDisponibles
    }
})