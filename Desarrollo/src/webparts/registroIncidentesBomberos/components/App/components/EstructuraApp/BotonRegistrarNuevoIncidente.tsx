// @ts-nocheck

import * as React from 'react'

import { useDispatch } from "react-redux"

import { CambiarPaginaActual } from '../EstadosRedux/paginaActual'

import Button from '@mui/material/Button'
import CarCrashIcon from '@mui/icons-material/CarCrash'

export const BotonRegistrarNuevoIncidente: React.FunctionComponent<{}> = ({children}: any) => {
    const dispatch = useDispatch()

    const ClickNuevoIncidente = () => {
        dispatch(CambiarPaginaActual("Informar nuevo siniestro"))
    }

    return (
        <div style={{marginBottom: "20px"}}>
            <Button variant="contained" startIcon={<CarCrashIcon />} sx={{textTransform: "none"}} size="large" onClick={() => ClickNuevoIncidente()}>
                Informar nuevo siniestro
            </Button>
        </div>
    )
}