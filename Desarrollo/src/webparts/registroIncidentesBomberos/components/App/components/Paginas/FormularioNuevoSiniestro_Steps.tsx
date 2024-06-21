// @ts-nocheck

import * as React from 'react';

import { useSelector } from "react-redux"

import { DevolverColorIcono } from './FormularioNuevoSiniestro_DatosValidos'
import { InformacionAseguradosValido } from './FormularioNuevoSiniestro_DatosValidos'
import { InformacionSiniestroValido } from './FormularioNuevoSiniestro_DatosValidos'
import { InformacionTercerosValido } from './FormularioNuevoSiniestro_DatosValidos'

import styled from 'styled-components'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import { StepLabel } from '@mui/material'
import StepIcon from '@mui/material'
import { Html, FireTruck, MinorCrash, PeopleAlt, ChecklistRtl, Check } from '@mui/icons-material'

import { FontSegoe } from '../EstructuraApp/EstilosGlobales'

const EstilosIconoStep = {
    padding: "8px 9px",
    borderRadius: "20px",
    position: "relative",
    top: "-8px",
    zIndex: "100"
}

const sxIcono = {
    color: "white"
}

export const FormularioNuevoSiniestro_Steps: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)

    const {stPasoActivo, setPasoActivo} = children

    const steps = [
        {
            Texto: 'Información de Asegurados'
        },
        {
            Texto: 'Información del Siniestro'
        },
        {
            Texto: 'Información de Terceros'
        },
        {
            Texto: 'Resumen y confirmación'
        }
    ]

    // -------------------------------------------------------------------------------------------------------
    // Funciones varias

    const ClickBotonPaso = (step: number) => () => {
        setPasoActivo(step)
    }

    const ObtenerIconoStep = (props: StepIconProps) => {
        const { active, completed, className } = props

        const icons: { [index: string]: React.ReactElement } = {
          1: InformacionAseguradosValido(rdxDatosCarga) ? <Check sx={sxIcono} /> : <FireTruck sx={sxIcono} />,
          2: InformacionSiniestroValido(rdxDatosCarga) ? <Check sx={sxIcono} /> : <MinorCrash sx={sxIcono} />,
          3: rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? 
                InformacionTercerosValido(rdxDatosCarga) ?
                    <Check sx={sxIcono} />
                :
                    <PeopleAlt sx={sxIcono} /> 
             : 
                <ChecklistRtl sx={sxIcono} />,
          4: <ChecklistRtl sx={sxIcono} />,
        };

        return (
            <div style={{...EstilosIconoStep, backgroundColor: DevolverColorIcono(props.icon, rdxDatosCarga)}} ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </div>
        )
    }

    return (
        <div style={{marginBottom: "20px", marginTop: "40px", maxWidth: "95%"}}>
            <Stepper nonLinear alternativeLabel activeStep={stPasoActivo}>
                {steps.map((step, index) => (
                    <Step key={step.Texto} completed={false} style={{...FontSegoe, display: (index != 2 || rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí") ? "block" : "none"}}>
                        <StepButton 
                            color="inherit" 
                            onClick={ClickBotonPaso(index)}
                            icon={index != 3 ? (index+1) : (rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? 4 : 3)}
                        >
                            <StepLabel StepIconComponent={ObtenerIconoStep}>
                                {step.Texto}
                            </StepLabel>
                        </StepButton>
                    </Step>                    
                ))}
            </Stepper>
        </div>
    )
}