// @ts-nocheck

import * as React from 'react'

import { useDispatch } from "react-redux"

import Button from '@mui/material/Button'
import CarCrashIcon from '@mui/icons-material/CarCrash'

export const BotonRegistrarNuevoIncidente: React.FunctionComponent<{}> = ({children}: any) => {
    return (
        <div style={{marginBottom: "20px"}}>
            <Button variant="contained" startIcon={<CarCrashIcon />} sx={{textTransform: "none"}} size="large">
                Informar nuevo incidente
            </Button>
        </div>
    )
}