// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'

import { ContextSharePoint } from '../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../EstructuraApp/Servicio'

import { CambiarRegionesDisponibles } from '../EstadosRedux/regionesDisponiblesSlice'
import { CambiarCiudadesDisponibles } from '../EstadosRedux/ciudadesDisponiblesSlice'
import { CambiarComisariasDisponibles } from '../EstadosRedux/comisariasDisponiblesSlice'

import styled from 'styled-components'

import { FormularioNuevoSiniestro_ControlesFooter } from './FormularioNuevoSiniestro_ControlesFooter'
import { FormularioNuevoSiniestro_Steps } from './FormularioNuevoSiniestro_Steps';
import { FormularioNuevoSiniestro_1_Asegurados } from './FormularioNuevoSiniestro_1_Asegurados'
import { FormularioNuevoSiniestro_2_Siniestro } from './FormularioNuevoSiniestro_2_Siniestro'
import { FormularioNuevoSiniestro_3_Terceros } from './FormularioNuevoSiniestro_3_Terceros'
import { FormularioNuevoSiniestro_4_ResumenCarga } from './FormularioNuevoSiniestro_4_ResumenCarga'

export const FormularioNuevoSiniestro: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxRegionesDisponibles = useSelector((state:any) => state.RegionesDisponibles)
    const rdxCiudadesDisponibles = useSelector((state:any) => state.CiudadesDisponibles)
    const rdxComisariasDisponibles = useSelector((state:any) => state.ComisariasDisponibles)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    const dispatch = useDispatch()

    const RefTituloFormulario = React.useRef<HTMLInputElement>(null)

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario
    useEffect(() =>{
        BuscarDatosParaCargaFormulario(Context, dispatch)
    }, [])

    const BuscarDatosParaCargaFormulario:() => Promise<void> = async(Context, dispatch) =>{
        if(rdxRegionesDisponibles.regiones.length == 0){
            let dataRegiones = await ObtenerDatos("Regiones", `$select=Id, Title&$orderby=Title`, Context)
            dispatch(CambiarRegionesDisponibles(dataRegiones))

            let dataCiudades = await ObtenerDatos("Ciudades", `$select=Id, Title, Region/Id&$expand=Region&$orderby=Title`, Context)
            dispatch(CambiarCiudadesDisponibles(dataCiudades))

            let dataComisarias = await ObtenerDatos("Comisarias", `$select=Id, Title, Region/Id, Region/Title&$expand=Region&$orderby=Region/Title, Title`, Context)
            dispatch(CambiarComisariasDisponibles(dataComisarias))
        }
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
        <div ref={RefTituloFormulario}>
            <FormularioNuevoSiniestro_Steps children={{ stPasoActivo, setPasoActivo }}/>
            {
                DevolverStepCarga()
            }
            <FormularioNuevoSiniestro_ControlesFooter children={{ stPasoActivo, setPasoActivo, RefTituloFormulario }} />
        </div>
    )
}