// @ts-nocheck

import * as React from 'react';

import { useSelector } from "react-redux"

import styled from 'styled-components'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import { StepLabel } from '@mui/material'
import StepIcon from '@mui/material'
import { Html } from '@mui/icons-material';

import { FontSegoe } from '../EstructuraApp/EstilosGlobales'

export const FormularioNuevoSiniestro_Steps: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)

    const {stPasoActivo, setPasoActivo} = children

    const steps = [
        'Información de Asegurados', 'Información del Siniestro', 'Información de Terceros', 'Resumen y confirmación'
    ];

    const ClickBotonPaso = (step: number) => () => {
        setPasoActivo(step)
    };

    return (
        <div style={{marginBottom: "20px", marginTop: "40px", maxWidth: "95%"}}>
            <Stepper nonLinear alternativeLabel activeStep={stPasoActivo}>
                {steps.map((label, index) => (
                    <Step key={label} completed={false} style={{...FontSegoe, display: (index != 2 || rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí") ? "block" : "none"}}>
                        <StepButton 
                            color="inherit" 
                            onClick={ClickBotonPaso(index)}
                            icon={index != 3 ? (index+1) : (rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? 4 : 3)}
                        >
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>                    
                ))}
            </Stepper>
        </div>
    )
}