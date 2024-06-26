// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'

import { ContextSharePoint } from '../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../EstructuraApp/Servicio'

import { CambiarRegionesDisponibles } from '../EstadosRedux/regionesDisponiblesSlice'
import { CambiarCiudadesDisponibles } from '../EstadosRedux/ciudadesDisponiblesSlice'
import { CambiarComisariasDisponibles } from '../EstadosRedux/comisariasDisponiblesSlice'
import { CambiarVehiculosAseguradosDisponibles } from '../EstadosRedux/vehiculosAseguradosDisponiblesSlice'

import styled from 'styled-components'

import { FormularioNuevoSiniestro_ControlesFooter } from './FormularioNuevoSiniestro_ControlesFooter'
import { FormularioNuevoSiniestro_Steps } from './FormularioNuevoSiniestro_Steps';
import { FormularioNuevoSiniestro_1_Asegurados } from './FormularioNuevoSiniestro_1_Asegurados'
import { FormularioNuevoSiniestro_2_Siniestro } from './FormularioNuevoSiniestro_2_Siniestro'
import { FormularioNuevoSiniestro_3_Terceros } from './FormularioNuevoSiniestro_3_Terceros'
import { FormularioNuevoSiniestro_4_ResumenCarga } from './FormularioNuevoSiniestro_4_ResumenCarga'

import { Backdrop, CircularProgress, LinearProgress } from '@mui/material'

import { ContenedorMensaje, TituloMensaje, CuerpoMensaje } from '../EstructuraApp/EstilosGlobales'

export const FormularioNuevoSiniestro: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxRegionesDisponibles = useSelector((state:any) => state.RegionesDisponibles)
    const rdxCiudadesDisponibles = useSelector((state:any) => state.CiudadesDisponibles)
    const rdxComisariasDisponibles = useSelector((state:any) => state.ComisariasDisponibles)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    const dispatch = useDispatch()

    const RefTituloFormulario = React.useRef<HTMLInputElement>(null)

    // ---------------------------------------------------------------------------------------------
    // useStates

    const [stCargando, setCargando] = React.useState({
        Abierto: true,
        Porcentaje: 0
    })

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario

    useEffect(() =>{
        BuscarDatosParaCargaFormulario(Context, dispatch)
    }, [])

    const BuscarDatosParaCargaFormulario:() => Promise<void> = async(Context, dispatch) =>{
        setCargando({
            Abierto: true,
            Porcentaje: 0
        })

        if(rdxRegionesDisponibles.regiones.length == 0){
            let dataRegiones = await ObtenerDatos("Regiones", `$select=Id, Title&$orderby=Title`, Context)
            dispatch(CambiarRegionesDisponibles(dataRegiones))

            setCargando({
                Abierto: true,
                Porcentaje: 25
            })

            let dataCiudades = await ObtenerDatos("Ciudades", `$select=Id, Title, Region/Id&$expand=Region&$orderby=Title`, Context)
            dispatch(CambiarCiudadesDisponibles(dataCiudades))

            setCargando({
                Abierto: true,
                Porcentaje: 50
            })

            let dataComisarias = await ObtenerDatos("Comisarias", `$select=Id, Title, Region/Id, Region/Title&$expand=Region&$orderby=Region/Title, Title`, Context)
            dispatch(CambiarComisariasDisponibles(dataComisarias))

            setCargando({
                Abierto: true,
                Porcentaje: 75
            })
        }

        setCargando({
            Abierto: true,
            Porcentaje: 75
        })

        let dataVehiculos = await ObtenerDatos("VehiculosBomberos", `$select=Id, Patente, Marca/Id, Marca/Title, Modelo/Id, Modelo/Title&$expand=Marca, Modelo&$orderby=Patente, Title`, Context)

        setCargando({
            Abierto: true,
            Porcentaje: 100
        })

        let ArrVehiculos = dataVehiculos.map(x => {
            return {
                Id: x.Id,
                IdMarca: x.Marca.Id,
                Marca: x.Marca.Title,
                IdModelo: x.Modelo?.Id || null,
                Modelo: x.Modelo?.Title || "",
                Patente: x.Patente
            }
        })

        dispatch(CambiarVehiculosAseguradosDisponibles(ArrVehiculos))

        setCargando({
            Porcentaje: 100,
            Abierto: false
        })
    }

    // ------------------------------------------------------------------------------------------------------------------------
    // useStates

    const [stPasoActivo, setPasoActivo] = React.useState(0)

    // ------------------------------------------------------------------------------------------------------------------------
    // Funciones varias 

    const DevolverStepCarga = () => {
        switch (stPasoActivo) {
            case 0:
                return <FormularioNuevoSiniestro_1_Asegurados/>
        
            case 1:
                return <FormularioNuevoSiniestro_2_Siniestro/>

            case 2:
                return <FormularioNuevoSiniestro_3_Terceros/>

            case 3:
                return <FormularioNuevoSiniestro_4_ResumenCarga/>    
        }
    }

    // ------------------------------------------------------------------------------------------------------------------------
    // Render

    return (
        <>
            <div ref={RefTituloFormulario}>
                <FormularioNuevoSiniestro_Steps children={{ stPasoActivo, setPasoActivo }}/>
                {
                    DevolverStepCarga()
                }
                <FormularioNuevoSiniestro_ControlesFooter children={{ stPasoActivo, setPasoActivo, RefTituloFormulario }} />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Backdrop
                sx={{ color: '#fff', flexDirection: "column", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={stCargando.Abierto}
            >
                <div style={ContenedorMensaje}>
                    <p style={{...TituloMensaje, fontFamily: "Segoe UI Semibold !important"}}>Inicializando carga del formulario...</p>
                    {
                        true &&
                            <CircularProgress style={{'color': 'white'}}/>
                    }
                    {
                        true &&
                            <div style={{width: "100%", marginTop: "50px"}}>
                                <LinearProgress variant="determinate" value={stCargando.Porcentaje} />
                            </div>
                    }
                </div>
            </Backdrop>
        </>
        
    )
}