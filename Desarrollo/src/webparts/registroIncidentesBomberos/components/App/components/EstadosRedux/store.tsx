import { configureStore } from "@reduxjs/toolkit"

import miUsuario from "./miUsuarioSlice"
import paginaActual from "./paginaActual"
import datosCarga from "./datosCargaSlice"
import vehiculosAseguradosDisponibles from "./vehiculosAseguradosDisponiblesSlice"
import conductoresAseguradosDisponibles from "./conductoresAseguradosDisponiblesSlice"
import tiposSiniestrosDisponibles from "./tiposSiniestrosDisponiblesSlice"
import comunasDisponibles from "./comunasDisponiblesSlice"
import marcasDisponibles from "./marcasDisponiblesSlice"
import modelosDisponibles from "./modelosDisponiblesSlice"
import comisariasDisponibles from "./comisariasDisponiblesSlice"
import regionesDisponibles from "./regionesDisponiblesSlice"
import ciudadesDisponibles from "./ciudadesDisponiblesSlice"

export const store = configureStore({
    reducer: {
        MiUsuario: miUsuario,
        PaginaActual: paginaActual,
        DatosCarga: datosCarga,
        VehiculosAseguradosDisponibles: vehiculosAseguradosDisponibles,
        ConductoresAseguradosDisponibles: conductoresAseguradosDisponibles,
        TiposSiniestrosDisponibles: tiposSiniestrosDisponibles,
        ComunasDisponibles: comunasDisponibles,
        MarcasDisponibles: marcasDisponibles,
        ModelosDisponibles: modelosDisponibles,
        ComisariasDisponibles: comisariasDisponibles,
        RegionesDisponibles: regionesDisponibles,
        CiudadesDisponibles: ciudadesDisponibles
    }
})