// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { CambiarSiniestro } from '../EstadosRedux/datosCargaSlice'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'

import { RotuloFormulario, H2AT } from '../EstructuraApp/EstilosGlobales'

// import styled from 'styled-components'

export const FormularioNuevoSiniestro_2_Siniestro: React.FunctionComponent<{}> = () => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)
    const rdxTiposSiniestrosDisponibles = useSelector((state:any) => state.tiposSiniestrosDisponibles)

    console.log(rdxDatosCarga)

    const dispatch = useDispatch()

    // ------------------------------------------------------------------------------------------------------------
    // Funciones varias

    const ChangeTxt = (pTxt) => {
        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            [pTxt.name]: pTxt.value,
        }))
    }

    // ------------------------------------------------------------------------------------------------------------
    // Render

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid item xs={4}>
                    &nbsp;
                </Grid>
                <Grid item xs={7}>
                    <h2 style={{...H2AT, marginTop: "0px", marginBottom: "10px"}}>Información del siniestro</h2>
                </Grid>
                <Grid item xs={1}>
                    &nbsp;
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            value={rdxDatosCarga.Fecha || null} 
                            defaultValue={rdxDatosCarga.Fecha || null}
                            fullWidth 
                            id="txtFechaSiniestro" 
                            name="Fecha"
                            type="text"
                            size="small" 
                            variant="outlined" 
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}