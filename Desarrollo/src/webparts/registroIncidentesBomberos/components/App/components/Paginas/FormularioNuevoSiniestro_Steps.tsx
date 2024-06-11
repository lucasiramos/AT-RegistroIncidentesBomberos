// @ts-nocheck

import * as React from 'react';

import styled from 'styled-components'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'

import { FontSegoe } from '../EstructuraApp/EstilosGlobales'

export const FormularioNuevoSiniestro_Steps: React.FunctionComponent<{}> = ({children}: any) => {
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
                    <Step key={label} completed={false} style={FontSegoe}>
                        <StepButton color="inherit" onClick={ClickBotonPaso(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

