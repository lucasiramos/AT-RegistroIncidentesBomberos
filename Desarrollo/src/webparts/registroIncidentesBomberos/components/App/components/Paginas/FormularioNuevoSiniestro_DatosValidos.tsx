// @ts-nocheck

import * as dayjs from 'dayjs'

const RGBIconoVerde = "rgb(11, 122, 18)"
const RGBIconoAzul = "rgb(0, 38, 99)"
const RGBIconoRojo = "rgb(204, 33, 33)"

export const DevolverColorIcono = (NumeroIcono, DatosCarga) => {
    let ColorDevuelvo = ""

    switch (NumeroIcono) {
        case 1:
            InformacionAseguradosValido(DatosCarga) ? 
                ColorDevuelvo = RGBIconoVerde
            :
                ColorDevuelvo = RGBIconoAzul

            break
        case 2:
            InformacionSiniestroValido(DatosCarga) ? 
                ColorDevuelvo = RGBIconoVerde
            :
                (
                    DatosCarga.Siniestro.Fecha && DatosCarga.Siniestro.Fecha.isAfter(dayjs()) ||
                    DatosCarga.Siniestro.Hora && DatosCarga.Siniestro.Hora.isAfter(dayjs())
                ) ? 
                    ColorDevuelvo = RGBIconoRojo
                :
                    ColorDevuelvo = RGBIconoAzul

            break
        
        case 3:
            if(DatosCarga.Siniestro.TercerosInvolucrados == "Sí"){
                // Hay terceros involucrados, valido terceros

                InformacionTercerosValido(DatosCarga) ? 
                    ColorDevuelvo = RGBIconoVerde
                :
                    ColorDevuelvo = RGBIconoAzul
            }else{
                // No hay terceros involucrados, el ícono 3 sería el resumen. Si esta ok 1 y 2 devuelvo verde, sino azul

                PuedeGuardarFormulario(DatosCarga) ?
                    ColorDevuelvo = RGBIconoVerde
                :
                    ColorDevuelvo = RGBIconoAzul
            }

            break

        case 4:
            PuedeGuardarFormulario(DatosCarga) ?
                ColorDevuelvo = RGBIconoVerde
            :
                ColorDevuelvo = RGBIconoAzul

            break
        default:
            return RGBIconoAzul

    }

	return ColorDevuelvo
}

export const InformacionAseguradosValido = (DatosCarga) => {
	if(DatosCarga.ConductorAsegurado.Id && DatosCarga.VehiculoAsegurado.Id){
        return true
    }else{
        return false
    }
}

export const InformacionSiniestroValido = (DatosCarga) => {
	if(
        DatosCarga.Siniestro.Fecha && DatosCarga.Siniestro.Hora && DatosCarga.Siniestro.Lugar && DatosCarga.Siniestro.Ciudad.Id && DatosCarga.Siniestro.Region.Id && DatosCarga.Siniestro.TipoSiniestro.Id && DatosCarga.Siniestro.Relato && DatosCarga.Siniestro.DaniosVehiculoAsegurado && DatosCarga.Siniestro.NumeroPartePolicial && DatosCarga.Siniestro.Comisaria.Id && DatosCarga.Siniestro.TercerosInvolucrados && ((DatosCarga.Siniestro.TercerosInvolucrados == "Sí" && DatosCarga.Siniestro.ResponsableSiniestro) || DatosCarga.Siniestro.TercerosInvolucrados == "No") &&
        (
            DatosCarga.Siniestro.Fecha ? (DatosCarga.Siniestro.Fecha.isAfter(dayjs()) ? false : true) : false
        ) &&
        (
            DatosCarga.Siniestro.Hora ? (DatosCarga.Siniestro.Hora.isAfter(dayjs()) || !DatosCarga.Siniestro.Hora.isValid() ? false : true) : false
        )
    ){
        return true
    }else{
        return false
    }
}

export const InformacionTercerosValido = (DatosCarga) => {
	if(
        DatosCarga.Tercero.Nombre && DatosCarga.Tercero.RUT && DatosCarga.Tercero.RUTDigitoVerificador && DatosCarga.Tercero.Telefono && DatosCarga.Tercero.Email && DatosCarga.Tercero.Marca.Id && DatosCarga.Tercero.Modelo.Id && DatosCarga.Tercero.Patente && DatosCarga.Tercero.DaniosVehiculoTercero
    ){
        return true
    }else{
        return false
    }
}

export const PuedeGuardarFormulario = (DatosCarga) => {
	if(
        InformacionAseguradosValido(DatosCarga) && InformacionSiniestroValido(DatosCarga) && (DatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? InformacionTercerosValido(DatosCarga) : true) && DatosCarga.AceptoDeclaracionJurada == true
    ){
        return true
    }else{
        return false
    }
}