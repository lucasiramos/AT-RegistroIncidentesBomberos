// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { CambiarSiniestro } from '../EstadosRedux/datosCargaSlice'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { esES } from '@mui/x-date-pickers'
import "dayjs/locale/es"
import { TimeField } from '@mui/x-date-pickers/TimeField'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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

export const FormularioNuevoSiniestro_2_Siniestro: React.FunctionComponent<{}> = () => {
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)
    const rdxComunasDisponibles = useSelector((state:any) => state.ComunasDisponibles)
    const rdxTiposSiniestrosDisponibles = useSelector((state:any) => state.TiposSiniestrosDisponibles)
    const rdxComisariasDisponibles = useSelector((state:any) => state.ComisariasDisponibles)

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

    const ChangeOpt = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            [event.target.name]: (event.target as HTMLInputElement).value,
        }))
    }

    // ------------------------------------------------------------------------------------------------------------
    // Render

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={7}>
                        <h2 style={{...H2AT, marginTop: "0px", marginBottom: "10px"}}>Información del siniestro</h2>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Fecha del siniestro</span>
                    </Grid>
                    <Grid item xs={7}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es' localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker 
                                    label="Seleccione fecha siniestro"
                                    slotProps={{ 
                                        textField: { size: 'small', fullWidth: true },
                                        field: { clearable: true, onClear: () => {} }
                                    }}
                                    value={rdxDatosCarga.Siniestro.Fecha}
                                    onChange={(FechaElegida) => {
                                        dispatch(CambiarSiniestro({
                                            ...rdxDatosCarga.Siniestro,
                                            Fecha: FechaElegida,
                                        }))
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Hora del siniestro</span>
                    </Grid>
                    <Grid item xs={7}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimeField']}>
                            <TimeField
                                label="Ingrese hora"
                                slotProps={{ 
                                    textField: { size: 'small', fullWidth: true },
                                }}
                                value={rdxDatosCarga.Siniestro.Hora}
                                format="HH:mm"
                                onChange={(HoraIngresada) => {
                                    dispatch(CambiarSiniestro({
                                        ...rdxDatosCarga.Siniestro,
                                        Hora: HoraIngresada,
                                    }))
                                }}
                            />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>

                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Lugar</span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Siniestro.Lugar || null} 
                            defaultValue={rdxDatosCarga.Siniestro.Lugar || null}
                            fullWidth 
                            name="Lugar"
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
                        <span style={RotuloFormulario}>Comuna</span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Siniestro.Comuna.Id ? rdxDatosCarga.Siniestro.Comuna : null}
                            fullWidth
                            id="cboComuna"
                            options={rdxComunasDisponibles.comunas}
                            getOptionLabel={comuna => comuna.Nombre}
                            renderInput={(params) => <TextField {...params} label="Seleccione una comuna" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, ComunaSeleccionada) => {
                                console.log(ComunaSeleccionada)

                                dispatch(CambiarSiniestro({
                                    ...rdxDatosCarga.Siniestro,
                                    Comuna: {
                                        Id: ComunaSeleccionada?.Id || null,
                                        Nombre: ComunaSeleccionada?.cNombre || null
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
                        <span style={RotuloFormulario}>Siniestro</span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Siniestro.TipoSiniestro.Id ? rdxDatosCarga.Siniestro.TipoSiniestro : null}
                            fullWidth
                            id="cboTipoSiniestro"
                            options={rdxTiposSiniestrosDisponibles.siniestros}
                            getOptionLabel={siniestro => siniestro.Nombre}
                            renderInput={(params) => <TextField {...params} label="Seleccione un siniestro" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, SiniestroSeleccionado) => {
                                console.log(SiniestroSeleccionado)

                                dispatch(CambiarSiniestro({
                                    ...rdxDatosCarga.Siniestro,
                                    TipoSiniestro: {
                                        Id: SiniestroSeleccionado?.Id || null,
                                        Nombre: SiniestroSeleccionado?.Nombre || null,
                                        Tercero: SiniestroSeleccionado?.Terceros || null
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
                        <span style={RotuloFormulario}>Relato</span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextareaAutosize
                            value={rdxDatosCarga.Siniestro.Relato || ""}
                            name="Relato"
                            minRows={4}
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
                        <span style={RotuloFormulario}>Daños del vehículo asegurado</span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextareaAutosize
                            value={rdxDatosCarga.Siniestro.DaniosVehiculoAsegurado || ""}
                            name="DaniosVehiculoAsegurado"
                            minRows={4}
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
                        <span style={RotuloFormulario}>Comisaria</span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Siniestro.Comisaria.Id ? rdxDatosCarga.Siniestro.Comisaria : null}
                            fullWidth
                            id="cboComisaria"
                            options={rdxComisariasDisponibles.comisarias}
                            getOptionLabel={comisaria => comisaria.Nombre}
                            renderInput={(params) => <TextField {...params} label="Seleccione una comisaria" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, ComisariaSeleccionada) => {
                                console.log(ComisariaSeleccionada)

                                dispatch(CambiarSiniestro({
                                    ...rdxDatosCarga.Siniestro,
                                    Comisaria: {
                                        Id: ComisariaSeleccionada?.Id || null,
                                        Nombre: ComisariaSeleccionada?.Nombre || null
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
                        <span style={RotuloFormulario}>N° Parte policial</span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={rdxDatosCarga.Siniestro.NumeroPartePolicial || null} 
                            defaultValue={rdxDatosCarga.Siniestro.NumeroPartePolicial || null}
                            fullWidth 
                            name="NumeroPartePolicial"
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
                        <span style={RotuloFormulario}>¿Hubo terceros involucrados?</span>
                    </Grid>
                    <Grid item xs={7}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="TercerosInvolucrados"
                            value={rdxDatosCarga.Siniestro.TercerosInvolucrados}
                            onChange={ChangeOpt}
                        >
                            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
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
                                    <span style={RotuloFormulario}>Responsable del siniestro</span>
                                </Grid>
                                <Grid item xs={7}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="ResponsableSiniestro"
                                        value={rdxDatosCarga.Siniestro.ResponsableSiniestro}
                                        onChange={ChangeOpt}
                                    >
                                        <FormControlLabel value="Tercero" control={<Radio />} label="Tercero" />
                                        <FormControlLabel value="Bomberos" control={<Radio />} label="Bomberos" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={1}>
                                    &nbsp;
                                </Grid>
                            </>
                    }
                </Grid>
            </Box>
        </>
    )
}