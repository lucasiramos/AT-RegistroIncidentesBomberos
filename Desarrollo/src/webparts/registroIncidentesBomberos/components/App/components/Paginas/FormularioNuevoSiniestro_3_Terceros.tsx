// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { CambiarTercero } from '../EstadosRedux/datosCargaSlice'

import { AsteriscoCargaObligatoria } from '../EstructuraApp/AsteriscoCargaObligatoria'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'

import { CalcularDigitoVerificador } from '../EstructuraApp/Servicio'

import styled from 'styled-components'

import { RotuloFormulario, H2AT } from '../EstructuraApp/EstilosGlobales'

import styled from 'styled-components'

const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        width: calc(100%);
        font-family: 'Segoe UI', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 5px;
    
        // firefox
        &:focus-visible {
            outline: 0;
        }
    `,
)

export const FormularioNuevoSiniestro_3_Terceros: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)
    const rdxMarcasDisponibles = useSelector((state:any) => state.MarcasDisponibles)
    const rdxModelosDisponibles = useSelector((state:any) => state.ModelosDisponibles)

    console.log(rdxDatosCarga)

    const dispatch = useDispatch()

    // ------------------------------------------------------------------------------------------------------------
    // Funciones varias

    const ChangeTxt = (pTxt) => {
        dispatch(CambiarTercero({
            ...rdxDatosCarga.Tercero,
            [pTxt.name]: pTxt.value,
        }))
    }

    const OnBlurTxtRUTTercero = () => {
        let NuevoDigitoVerificador = ''

        if(rdxDatosCarga.Tercero.RUT){
            NuevoDigitoVerificador = CalcularDigitoVerificador(rdxDatosCarga.Tercero.RUT)
        }

        dispatch(CambiarTercero({
            ...rdxDatosCarga.Tercero,
            RUTDigitoVerificador: NuevoDigitoVerificador
        }))
    }

    // ------------------------------------------------------------------------------------------------------------
    // Render

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h2 style={{...H2AT, marginTop: "0px", marginBottom: "10px"}}>Información de Terceros</h2>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Nombre<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Tercero.Nombre || null} 
                            defaultValue={rdxDatosCarga.Tercero.Nombre || null}
                            fullWidth 
                            name="Nombre"
                            size="small" 
                            variant="outlined" 
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>RUT<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <div>
                            <TextField 
                                fullWidth 
                                name="RUT"
                                type="number"
                                value={rdxDatosCarga.Tercero.RUT || ""} 
                                InputProps={{ inputProps: { maxLength: 12, max: 99999999, min: 0, onBlur: () => {
                                    OnBlurTxtRUTTercero()
                                }}}}
                                size="small" 
                                variant="outlined" 
                                sx={{ fontFamily: "Segoe UI !important", backgroundColor: "#FFF", color: "rgba(0, 0, 0, 0.87)", width: "130px" }} 
                                onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                                onKeyDown={(event) => {
                                    if(event.key == "." || event.key == "," || event.key == "-" || event.key == "+" || event.key == "e"){
                                        event.preventDefault()
                                    }
                                    if(event.target.value.length == 8 && !isNaN(event.key)){
                                        event.preventDefault()
                                    }
                                }}
                            />
                            <TextField 
                                fullWidth 
                                disabled
                                value={rdxDatosCarga.Tercero.RUTDigitoVerificador || ""} 
                                id="txtRUTDigitoVerificador"
                                size="small" 
                                variant="outlined" 
                                sx={{ fontFamily: "Segoe UI !important", width: "42px", marginLeft: "15px" }} 
                            />
                        </div>
                        <div>Ingrese RUT sin puntos ni guiones</div>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Teléfono<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Tercero.Telefono || null} 
                            defaultValue={rdxDatosCarga.Tercero.Telefono || null}
                            fullWidth 
                            name="Telefono"
                            size="small" 
                            variant="outlined" 
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Email<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Tercero.Email || null} 
                            defaultValue={rdxDatosCarga.Tercero.Email || null}
                            fullWidth 
                            name="Email"
                            size="small" 
                            variant="outlined" 
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Marca vehículo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Tercero.Marca.Id ? rdxDatosCarga.Tercero.Marca : null}
                            fullWidth
                            id="cboMarca"
                            options={rdxMarcasDisponibles.marcas}
                            getOptionLabel={marca => marca.Nombre}
                            renderInput={(params) => <TextField {...params} label="Seleccione una marca" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, MarcaSeleccionada) => {
                                console.log(MarcaSeleccionada)

                                dispatch(CambiarTercero({
                                    ...rdxDatosCarga.Tercero,
                                    Marca: {
                                        Id: MarcaSeleccionada?.Id || null,
                                        Nombre: MarcaSeleccionada?.Nombre || null
                                    },
                                    Modelo: {
                                        Id: null,
                                        Nombre: null
                                    }
                                }))
                            }}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Modelo vehículo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Tercero.Modelo.Id ? rdxDatosCarga.Tercero.Modelo : null}
                            fullWidth
                            id="cboModelo"
                            disabled={rdxModelosDisponibles.modelos.filter(x => x.IdMarca == rdxDatosCarga.Tercero.Marca.Id).length == 0}
                            options={rdxModelosDisponibles.modelos.filter(x => x.IdMarca == rdxDatosCarga.Tercero.Marca.Id)}
                            getOptionLabel={modelo => modelo.Nombre}
                            renderInput={(params) => <TextField {...params} label={
                                rdxModelosDisponibles.modelos.filter(x => x.IdMarca == rdxDatosCarga.Tercero.Marca.Id).length == 0 ?
                                    "Seleccione una marca para ver sus modelos"
                                :
                                    "Seleccione un modelo"
                            } />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, ModeloSeleccionado) => {
                                dispatch(CambiarTercero({
                                    ...rdxDatosCarga.Tercero,
                                    Modelo: {
                                        Id: ModeloSeleccionado?.Id || null,
                                        Nombre: ModeloSeleccionado?.Nombre || null
                                    }
                                }))
                            }}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Patente<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Tercero.Patente || null} 
                            defaultValue={rdxDatosCarga.Tercero.Patente || null}
                            fullWidth 
                            name="Patente"
                            size="small" 
                            variant="outlined" 
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Daños vehículo tercero<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextareaAutosize
                            value={rdxDatosCarga.Tercero.DaniosVehiculoTercero || ""}
                            name="DaniosVehiculoTercero"
                            minRows={4}
                            onChange={(event: React.FocusEvent<HTMLInputElement>) => ChangeTxt(event.target)}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}