// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'

import { ContextSharePoint } from '../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../EstructuraApp/Servicio'

import { CambiarComunasDisponibles } from '../EstadosRedux/comunasDisponiblesSlice'
import { CambiarRegionesDisponibles } from '../EstadosRedux/regionesDisponiblesSlice'

import styled from 'styled-components'

import { FormularioNuevoSiniestro_ControlesFooter } from './FormularioNuevoSiniestro_ControlesFooter'
import { FormularioNuevoSiniestro_Steps } from './FormularioNuevoSiniestro_Steps';
import { FormularioNuevoSiniestro_1_Asegurados } from './FormularioNuevoSiniestro_1_Asegurados'
import { FormularioNuevoSiniestro_2_Siniestro } from './FormularioNuevoSiniestro_2_Siniestro'
import { FormularioNuevoSiniestro_3_Terceros } from './FormularioNuevoSiniestro_3_Terceros'
import { FormularioNuevoSiniestro_4_ResumenCarga } from './FormularioNuevoSiniestro_4_ResumenCarga'

export const FormularioNuevoSiniestro: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxComunasDisponibles = useSelector((state:any) => state.ComunasDisponibles)
    const rdxRegionesDisponibles = useSelector((state:any) => state.RegionesDisponibles)

    console.log(rdxRegionesDisponibles)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    const dispatch = useDispatch()

    const RefTituloFormulario = React.useRef<HTMLInputElement>(null)

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario
    useEffect(() =>{
        BuscarDatosParaCargaFormulario(Context, dispatch)
    }, [])

    const BuscarDatosParaCargaFormulario:() => Promise<void> = async(Context, dispatch) =>{
        if(rdxComunasDisponibles.comunas.length == 0){    
            let dataComunas = await ObtenerDatos("Comunas", `$select=Id, cNombre&$orderby=cNombre`, Context, "SolucionContenedoresProd")

            dataComunas.map(x => x.Nombre = x.cNombre)

            dispatch(CambiarComunasDisponibles(dataComunas))
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