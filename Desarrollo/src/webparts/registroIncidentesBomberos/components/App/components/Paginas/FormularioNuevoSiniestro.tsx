// @ts-nocheck

import * as React from 'react'

import { useSelector } from "react-redux"

import styled from 'styled-components'

import { FormularioNuevoSiniestro_Steps } from './FormularioNuevoSiniestro_Steps';
import { FormularioNuevoSiniestro_1_Asegurados } from './FormularioNuevoSiniestro_1_Asegurados'
import { FormularioNuevoSiniestro_2_Siniestro } from './FormularioNuevoSiniestro_2_Siniestro'
import { FormularioNuevoSiniestro_3_Terceros } from './FormularioNuevoSiniestro_3_Terceros'
import { FormularioNuevoSiniestro_4_ResumenCarga } from './FormularioNuevoSiniestro_4_ResumenCarga'

export const FormularioNuevoSiniestro: React.FunctionComponent<{}> = ({children}: any) => {
    const DatosCarga = useSelector((state:any) => state.DatosCarga)

    console.log(DatosCarga)

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
            <FormularioNuevoSiniestro_Steps children={{ stPasoActivo, setPasoActivo }}/>
            {
                DevolverStepCarga()
            }
        </>
    )
}