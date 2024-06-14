// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { CambiarVehiculoAsegurado } from '../EstadosRedux/datosCargaSlice'
import { CambiarConductorAsegurado } from '../EstadosRedux/datosCargaSlice'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'

import { RotuloFormulario, H2AT } from '../EstructuraApp/EstilosGlobales'

// import styled from 'styled-components'

export const FormularioNuevoSiniestro_1_Asegurados: React.FunctionComponent<{}> = () => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)
    const rdxVehiculosAseguradosDisponibles = useSelector((state:any) => state.VehiculosAseguradosDisponibles)
    const rdxConductoresAseguradosDisponibles = useSelector((state:any) => state.ConductoresAseguradosDisponibles)

    const dispatch = useDispatch()

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h2 style={{...H2AT, marginTop: "0px", marginBottom: "10px"}}>Información de asegurados</h2>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                
                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.VehiculoAsegurado?.Id ? rdxDatosCarga.VehiculoAsegurado : null}
                            fullWidth
                            id="cboVehiculosAsegurados"
                            options={rdxVehiculosAseguradosDisponibles.vehiculos}
                            getOptionLabel={vehiculo => `Patente: ${vehiculo.Patente} - ${vehiculo.Marca} ${vehiculo.Modelo}`}
                            renderInput={(params) => <TextField {...params} label="Seleccione un vehículo" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, VehiculoSeleccionado) => {
                                dispatch(CambiarVehiculoAsegurado({
                                    Id: VehiculoSeleccionado?.Id || null,
                                    IdMarca: VehiculoSeleccionado?.IdMarca || null,
                                    Marca: VehiculoSeleccionado?.Marca || null,
                                    IdModelo: VehiculoSeleccionado?.IdModelo || null,
                                    Modelo: VehiculoSeleccionado?.Modelo || null,
                                    Patente: VehiculoSeleccionado?.Patente || null,
                                }))
                            }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <span style={RotuloFormulario}>Conductor asegurado</span>
                    </Grid>
                    <Grid item xs={8}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.ConductorAsegurado?.Id ? rdxDatosCarga.ConductorAsegurado : null}
                            fullWidth
                            id="cboConductoresAsegurados"
                            options={rdxConductoresAseguradosDisponibles.conductores}
                            getOptionLabel={conductor => `${conductor.Nombre} - RUT ${conductor.RUT}`}
                            renderInput={(params) => <TextField {...params} label="Seleccione un conductor" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, ConductorSeleccionado) => {
                                dispatch(CambiarConductorAsegurado({
                                    Id: ConductorSeleccionado?.Id || null,
                                    Nombre: ConductorSeleccionado?.Nombre || null,
                                    RUT: ConductorSeleccionado?.RUT || null,
                                }))
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}