// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { RotuloFormulario, H2AT, H3AT, ResumenFormulario, SpAmarillo } from '../EstructuraApp/EstilosGlobales'

import styled from 'styled-components'

export const FormularioNuevoSiniestro_4_ResumenCarga: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    {/* --------------------------------------------------------------------------------------------------- */}
                    {/* Resumen de Carga */}

                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h2 style={{...H2AT, marginTop: "0px", marginBottom: "10px"}}>Resumen de Carga y confirmación</h2>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    {/* /////////////////////////////////////////////// */}
                    {/* Datos de Asegurados */}

                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={8}>
                        <h3 style={{...H3AT, marginTop: "0px", marginBottom: "10px", textDecoration: "underline"}}>Datos de Asegurados</h3>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Marca vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.VehiculoAsegurado.Marca ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.VehiculoAsegurado.Marca || "-Sin dato-"}</span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Modelo vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.VehiculoAsegurado.Modelo ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.VehiculoAsegurado.Modelo || "-Sin dato-"}</span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Nombre conductor asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.ConductorAsegurado.Nombre ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.ConductorAsegurado.Nombre || "-Sin dato-"}</span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>RUT conductor asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.ConductorAsegurado.RUT ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.ConductorAsegurado.RUT || "-Sin dato-"}</span>
                    </Grid>

                    {/* /////////////////////////////////////////////// */}
                    {/* Datos del Siniestro */}

                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={8}>
                        <h3 style={{...H3AT, marginTop: "40px", marginBottom: "10px", textDecoration: "underline"}}>Datos del Siniestro</h3>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Fecha y hora</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.Fecha ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.Fecha ? 
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

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Lugar</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.Lugar ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Siniestro.Lugar || "-Sin dato-"}</span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Comuna</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.Comuna.Nombre ? ResumenFormulario : SpAmarillo}>{rdxDatosCarga.Siniestro.Comuna.Nombre || "-Sin dato-"}</span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Siniestro</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.TipoSiniestro.Nombre ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.TipoSiniestro.Nombre ? 
                                `${rdxDatosCarga.Siniestro.TipoSiniestro.Nombre} ${rdxDatosCarga.Siniestro.TipoSiniestro.Tercero ? " (daño a terceros)" : ""}` 
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Relato</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.Relato ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.Relato ? 
                                rdxDatosCarga.Siniestro.Relato.length > 200 ? 
                                    <span>{rdxDatosCarga.Siniestro.Relato.substring(0, 200)}... <a href="#">Ver mas...</a></span>
                                     
                                : 
                                    rdxDatosCarga.Siniestro.Relato
                            :
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Daños del vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado ? 
                                rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>N° Parte policial, Comisaría, Juzgado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <span style={rdxDatosCarga.Siniestro.NumeroPartePolicial ? ResumenFormulario : SpAmarillo}>
                            {rdxDatosCarga.Siniestro.NumeroPartePolicial ? 
                                rdxDatosCarga.Siniestro.NumeroPartePolicial
                            : 
                                "-Sin dato-"
                            }
                        </span>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}