// @ts-nocheck

const RGBIconoVerde = "rgb(11, 122, 18)"
const RGBIconoAzul = "rgb(0, 38, 99)"

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
        DatosCarga.Siniestro.Fecha && DatosCarga.Siniestro.Hora && DatosCarga.Siniestro.Lugar && DatosCarga.Siniestro.Comuna.Id && DatosCarga.Siniestro.Region.Id && DatosCarga.Siniestro.TipoSiniestro.Id && DatosCarga.Siniestro.Relato && DatosCarga.Siniestro.DaniosVehiculoAsegurado && DatosCarga.Siniestro.NumeroPartePolicial && DatosCarga.Siniestro.Comisaria.Id && DatosCarga.Siniestro.TercerosInvolucrados && ((DatosCarga.Siniestro.TercerosInvolucrados == "Sí" && DatosCarga.Siniestro.ResponsableSiniestro) || DatosCarga.Siniestro.TercerosInvolucrados == "No")
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
    console.log("DatosCarga.AceptoDeclaracionJurada:")
    console.log(DatosCarga)
    console.log(DatosCarga.AceptoDeclaracionJurada)

    //  && DatosCarga.AceptoDeclaracionJurada == true

	if(
        InformacionAseguradosValido(DatosCarga) && InformacionSiniestroValido(DatosCarga) && (DatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? InformacionTercerosValido(DatosCarga) : true) && DatosCarga.AceptoDeclaracionJurada == true
    ){
        console.log("1 ---")

        console.log(DatosCarga.AceptoDeclaracionJurada)

        return true
    }else{
        console.log("2 ---")

        console.log(DatosCarga.AceptoDeclaracionJurada)

        return false
    }
}