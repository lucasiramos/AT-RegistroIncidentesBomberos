// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { AsteriscoCargaObligatoria } from '../EstructuraApp/AsteriscoCargaObligatoria'

import { CambiarAceptoDeclaracionJurada } from '../EstadosRedux/datosCargaSlice'

import { CapitalizarNombre } from '../EstructuraApp/Servicio'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import {IconButton} from '@mui/material'
import { Close } from '@mui/icons-material'
import {Typography} from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { RotuloFormulario, H2AT, H3AT, ResumenFormulario, SpAmarillo, SpRojo, SpVerde } from '../EstructuraApp/EstilosGlobales'

import styled from 'styled-components'

export const FormularioNuevoSiniestro_4_ResumenCarga: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)

    const [stVerMasRelato, setVerMasRelato] = React.useState(false)

    const dispatch = useDispatch()

    const ClickVerMasRelato = () => {
        setVerMasRelato(true)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {/* --------------------------------------------------------------------------------------------------- */}
                    {/* Resumen de Carga */}

                    {/* /////////////////////////////////////////////// */}
                    {/* Datos de Asegurados */}

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={8}>
                        <h3 style={{...H3AT, marginTop: "0px", marginBottom: "10px", textDecoration: "underline"}}>Información de Asegurados</h3>
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Marca vehículo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.VehiculoAsegurado.Marca ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.VehiculoAsegurado.Marca || "-Sin dato-"}</span>
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
                        <span style={rdxDatosCarga.VehiculoAsegurado.Modelo ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.VehiculoAsegurado.Modelo || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Patente vehículo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.VehiculoAsegurado.Patente ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.VehiculoAsegurado.Patente || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Nombre conductor<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.ConductorAsegurado.Nombre ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.ConductorAsegurado.Nombre || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>RUT conductor<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.ConductorAsegurado.RUT ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.ConductorAsegurado.RUT || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    {/* /////////////////////////////////////////////// */}
                    {/* Datos del Siniestro */}

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h3 style={{...H3AT, marginTop: "40px", marginBottom: "10px", textDecoration: "underline"}}>Información del Siniestro</h3>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Fecha y hora<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={(rdxDatosCarga.Siniestro.Fecha && rdxDatosCarga.Siniestro.Hora && rdxDatosCarga.Siniestro.Hora.isValid()) ? ResumenFormulario : SpAmarillo}>
                            {(rdxDatosCarga.Siniestro.Fecha && rdxDatosCarga.Siniestro.Hora && rdxDatosCarga.Siniestro.Hora.isValid()) ? 
                                `${rdxDatosCarga.Siniestro.Fecha.format('DD/MM/YYYY')}
                                ${rdxDatosCarga.Siniestro.Hora ? 
                                    ` ${rdxDatosCarga.Siniestro.Hora.format('HH:mm')}`
                                :
                                    ""
                                }` 
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Lugar<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.Lugar ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Siniestro.Lugar || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Región<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.Region.Title ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Siniestro.Region.Title || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Ciudad<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.Ciudad.Title ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Siniestro.Ciudad.Title || "-Sin dato-"}</span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Siniestro<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.TipoSiniestro.Nombre ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.TipoSiniestro.Nombre ? 
                                rdxDatosCarga.Siniestro.TipoSiniestro.Nombre
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Relato<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.Relato ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.Relato ? 
                                rdxDatosCarga.Siniestro.Relato.length > 200 ? 
                                    <span>{rdxDatosCarga.Siniestro.Relato.substring(0, 200)}... <a href="#" style={{color: "rgb(0, 0, 238)"}} onClick={ () => ClickVerMasRelato()}>Ver mas...</a></span>
                                     
                                : 
                                    rdxDatosCarga.Siniestro.Relato
                            :
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Daños del vehículo asegurado<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado ? 
                                rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>¿Hubo terceros involucrados?<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span 
                            style={
                                rdxDatosCarga.Siniestro.TercerosInvolucrados ? 
                                    rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí" ? SpRojo : SpVerde
                                : 
                                    SpAmarillo
                            }
                        >
                            {rdxDatosCarga.Siniestro.TercerosInvolucrados ? 
                                rdxDatosCarga.Siniestro.TercerosInvolucrados
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    {
                        rdxDatosCarga.Siniestro.TercerosInvolucrados == "Sí" &&
                            <>
                                <Grid item xs={1}>
                                    &nbsp;
                                </Grid>
                                <Grid item xs={3}>
                                    <span style={RotuloFormulario}>Responsable del siniestro<AsteriscoCargaObligatoria/></span>
                                </Grid>
                                <Grid item xs={7}>
                                    <span style={rdxDatosCarga.Siniestro.ResponsableSiniestro ? ResumenFormulario : SpAmarillo}>
                                        {rdxDatosCarga.Siniestro.ResponsableSiniestro ? 
                                            rdxDatosCarga.Siniestro.ResponsableSiniestro
                                        : 
                                            "-Sin dato-"
                                        }
                                    </span>
                                </Grid>
                                <Grid item xs={1}>
                                    &nbsp;
                                </Grid>

                                {/* /////////////////////////////////////////////// */}
                                {/* Datos del Terceros */}

                                <Grid item xs={1}>
                                    &nbsp;
                                </Grid>
                                <Grid item xs={3}>
                                    &nbsp;
                                </Grid>
                                <Grid item xs={7}>
                                    <h3 style={{...H3AT, marginTop: "40px", marginBottom: "10px", textDecoration: "underline"}}>Información de Terceros</h3>
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
                                    <span style={rdxDatosCarga.Tercero.Nombre ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.Nombre || "-Sin dato-"}</span>
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
                                    <span style={rdxDatosCarga.Tercero.RUT ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.RUT ? `${rdxDatosCarga.Tercero.RUT}-${rdxDatosCarga.Tercero.RUTDigitoVerificador}` : "-Sin dato-"}</span>
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
                                    <span style={rdxDatosCarga.Tercero.Telefono ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.Telefono || "-Sin dato-"}</span>
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
                                    <span style={rdxDatosCarga.Tercero.Email ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.Email || "-Sin dato-"}</span>
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
                                    <span style={rdxDatosCarga.Tercero.Marca.Nombre ? ResumenFormulario : SpAmarillo}>
                                        {rdxDatosCarga.Tercero.Marca.Nombre || "-Sin dato-"}
                                    </span>
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
                                    <span style={rdxDatosCarga.Tercero.Modelo.Nombre ? ResumenFormulario : SpAmarillo}>
                                        {rdxDatosCarga.Tercero.Modelo.Nombre || "-Sin dato-"}
                                    </span>
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
                                    <span style={rdxDatosCarga.Tercero.Patente ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.Patente || "-Sin dato-"}</span>
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
                                    <span style={rdxDatosCarga.Tercero.DaniosVehiculoTercero ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Tercero.DaniosVehiculoTercero || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={1}>
                                    &nbsp;
                                </Grid>
                            </>
                    }
                    
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Comisaria<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.Comisaria.Title ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.Comisaria.Title ? 
                                `${CapitalizarNombre(rdxDatosCarga.Siniestro.Comisaria.Region.Title)} - ${rdxDatosCarga.Siniestro.Comisaria.Title}`
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>N° Parte policial<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <span style={rdxDatosCarga.Siniestro.NumeroPartePolicial ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.NumeroPartePolicial ? 
                                rdxDatosCarga.Siniestro.NumeroPartePolicial
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    {/* /////////////////////////////////////////////// */}
                    {/* Acepta DDJJ */}

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h3 style={{...H3AT, marginTop: "40px", marginBottom: "10px", textDecoration: "underline"}}>Declaración Jurada de información</h3>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Aceptar información ingresada<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <FormGroup>
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        checked={rdxDatosCarga.AceptoDeclaracionJurada}
                                        sx={{fontFamily: "Segoe UI !important", fontSize: "18px"}}
                                        onChange={() => {
                                            dispatch(CambiarAceptoDeclaracionJurada(
                                                !rdxDatosCarga.AceptoDeclaracionJurada
                                            ))
                                        }}
                                    />
                                } 
                                label={<span style={{ fontSize: '16px', fontFamily: "Segoe UI", position: "relative", top: "7px" }}>{"Declaro bajo juramento la veracidad de los antecedentes y circunstancias entregadas en la presente denuncia de siniestro."}</span>}
                                sx={{fontFamily: "Segoe UI !important", fontSize: "18px", alignItems: "flex-start"}}
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                </Grid>
            </Box>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* Modal ver relato */}

            <Dialog
                aria-labelledby="customized-dialog-title"
                open={stVerMasRelato}
                fullWidth={true}
                maxWidth={"lg"}
                scroll={"paper"}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontFamily: "Segoe UI Semibold" }} id="customized-dialog-title">
                    Relato
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setVerMasRelato(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>

                <DialogContent dividers>
                    <Typography gutterBottom sx={{fontFamily: "Segoe UI"}}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                                {rdxDatosCarga.Siniestro.Relato}
                            </Grid>
                        </Box>
                    </Typography>
                </DialogContent>
            </Dialog>

        </>
    )
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))