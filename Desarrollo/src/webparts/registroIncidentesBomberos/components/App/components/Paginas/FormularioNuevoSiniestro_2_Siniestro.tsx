// @ts-nocheck

import * as React from 'react'

import { useSelector, useDispatch } from "react-redux"

import { CambiarSiniestro } from '../EstadosRedux/datosCargaSlice'

import { CapitalizarNombre } from '../EstructuraApp/Servicio'

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
import * as dayjs from 'dayjs'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Close } from '@mui/icons-material'
import {IconButton} from '@mui/material'
import {Typography} from '@mui/material'
import { ReportProblem } from '@mui/icons-material'

import { RotuloFormulario, H2AT, BotonAT } from '../EstructuraApp/EstilosGlobales'

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
    const rdxRegionesDisponibles = useSelector((state:any) => state.RegionesDisponibles)
    const rdxTiposSiniestrosDisponibles = useSelector((state:any) => state.TiposSiniestrosDisponibles)
    const rdxComisariasDisponibles = useSelector((state:any) => state.ComisariasDisponibles)

    const dispatch = useDispatch()

    console.log(rdxDatosCarga)

    // ------------------------------------------------------------------------------------------------------------
    // useStates

    
    const [stModalGrabarAbierto, setModalGrabarAbierto] = React.useState(false)
    /*
    const [stSpeechRecognizer, setSpeechRecognizer] = React.useState(new webkitSpeechRecognition())
    const [stGrabacion, setGrabacion] = React.useState({
        Relato: 'INICIAL',
        RelatoHTML: '',
        TranscripcionTemporal: '',
        TranscripcionFinal: ''
    })
    const [stAcumulado, setAcumulado] = React.useState('1) ')


    console.log(stAcumulado)
    */ 
    // console.log(stSpeechRecognizer)

    // console.log("----------------------------------------------")
    // console.log(rdxDatosCarga.Siniestro.Fecha)
    // console.log(rdxDatosCarga.Siniestro.Hora)
    // console.log(rdxDatosCarga.Siniestro.Fecha ? rdxDatosCarga.Siniestro.Fecha.format("DD/MM/YYYY") == dayjs().format("DD/MM/YYYY") : "-")
    // console.log(rdxDatosCarga.Siniestro.Hora ? rdxDatosCarga.Siniestro.Hora.isAfter(dayjs()) : "-")
    // console.log("----------------------------------------------")

    /*
    rdxDatosCarga.Siniestro.Fecha && rdxDatosCarga.Siniestro.Hora &&
    rdxDatosCarga.Siniestro.Fecha.isSame(dayjs()) && rdxDatosCarga.Siniestro.Hora.isAfter(dayjs())
    
    */

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

    /* 
    const AbrirGrabarRelato = () => {
        setModalGrabarAbierto(true)

        // Verifico si tiene encendido el micrófono

        try {
            navigator.getUserMedia({ audio: true }, TieneMicrofonoPrendido, TieneMicrofonoApagado);
        }
        catch(err) {
            // document.getElementById("demo").innerHTML = err.message;
            console.log("Errorrrr catch: " + err.message)
        }
    }

    const TieneMicrofonoPrendido = () => {
        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            Grabacion: {
                ...rdxDatosCarga.Siniestro.Grabacion,
                MicrofonoPrendido: true
            },
        }))
    }

    const TieneMicrofonoApagado = () => {
        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            Grabacion: {
                ...rdxDatosCarga.Siniestro.Grabacion,
                MicrofonoPrendido: false
            },
        }))
    }

    const CerrarGrabarRelato = () => {
        setModalGrabarAbierto(false)
    }

    const ComenzarAGrabar = () => {
        console.log("1")

        stSpeechRecognizer.continuous = true
        stSpeechRecognizer.interimResults = true
        stSpeechRecognizer.lang = "es-AR"

        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            Grabacion: {
                PuedeGrabar: true,
                MicrofonoPrendido: true,
                Grabando: true,
                Relato: '',
                RelatoHTML: '',
                TranscripcionTemporal: '',
                TranscripcionFinal: ''
            }
        }))

        stSpeechRecognizer.start()

        stSpeechRecognizer.onresult = function(event){
            var interimTranscripts = ""
            var finalTranscripts = ""

            // console.log("Durante (fuera del bucle): " + stGrabacion.Relato)

            for(var i=event.resultIndex; i<event.results.length; i++){
                var transcript = event.results[i][0].transcript
                // transcript.replace("\n", "<br>")

                if(event.results[i].isFinal){
                    console.log("----------------------")
                    // console.log("FINAL:")
                    // console.log(rdxDatosCarga)
                    // console.log(rdxDatosCarga.Siniestro)
                    // console.log(rdxDatosCarga.Siniestro.Grabacion)
                    // console.log(rdxDatosCarga.Siniestro.Grabacion.Relato)
                    

                    // finalTranscripts += (rdxDatosCarga.Siniestro.Grabacion.Relato || '') + PrimeraLetraMayuscula(transcript.trim()) + ". "
                    finalTranscripts += PrimeraLetraMayuscula(transcript.trim()) + ". "

                    // console.log("FINAL: " + stGrabacion.Relato)
                    // console.log(stGrabacion)
                    // (stGrabacion.Relato || '') + finalTranscripts + interimTranscripts

                    TranscribirAEstado(finalTranscripts, interimTranscripts)

                    // setGrabacion({
                    //     Relato: "Coso 2....",
                    //     RelatoHTML: (stGrabacion.Relato || '') + finalTranscripts + '<span style="color: #999;">' + interimTranscripts + '</span>',
                    //     TranscripcionTemporal: interimTranscripts,
                    //     TranscripcionFinal: finalTranscripts
                    // })

                    console.log("----------------------")
                }else{
                    interimTranscripts += transcript
                }


                // const [stGrabacion, setGrabacion] = React.useState({
                //     Relato: '',
                //     RelatoHTML: '',
                //     TranscripcionTemporal: '',
                //     TranscripcionFinal: ''
                // })
                
               

                // dispatch(CambiarSiniestro({
                //     ...rdxDatosCarga.Siniestro,
                //     Grabacion: {
                //         PuedeGrabar: true,
                //         MicrofonoPrendido: true,
                //         Grabando: true,
                //         Relato: (rdxDatosCarga.Siniestro.Grabacion.Relato || '') + finalTranscripts + interimTranscripts,
                //         RelatoHTML:(rdxDatosCarga.Siniestro.Grabacion.Relato || '') + finalTranscripts + '<span style="color: #999;">' + interimTranscripts + '</span>',
                //         TranscripcionTemporal: interimTranscripts,
                //         TranscripcionFinal: finalTranscripts
                //     }
                // }))

                // r.innerHTML = finalTranscripts + '<span style="color: #999;">' + interimTranscripts + '</span>'
            }
        }

        console.log("2")
    }

    const PrimeraLetraMayuscula = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const TranscribirAEstado = (finalTranscripts, interimTranscripts) => {
        console.log("______________________________________")
        // console.log("@" + stGrabacion.Relato + "@")
        console.log(finalTranscripts, interimTranscripts)
        // setGrabacion({
        //     Relato: (stGrabacion.Relato || '') + finalTranscripts + interimTranscripts,
        //     RelatoHTML: (stGrabacion.Relato || '') + finalTranscripts + '<span style="color: #999;">' + interimTranscripts + '</span>',
        //     TranscripcionTemporal: interimTranscripts,
        //     TranscripcionFinal: finalTranscripts
        // })

        console.log("Acumulado: " + stAcumulado)

        setAcumulado(`${stAcumulado}${finalTranscripts}${interimTranscripts}`)

        console.log("______________________________________")

    }
    */ 

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
                                            Hora: null
                                        }))
                                    }}
                                    maxDate={dayjs()}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        {
                            rdxDatosCarga.Siniestro.Fecha && rdxDatosCarga.Siniestro.Fecha.isAfter(dayjs()) &&
                                <div style={{display: "flex", marginTop: "10px", gap: "10px"}}>
                                    <div>
                                        <ReportProblem sx={{color: "#CC0000"}} />
                                    </div>
                                    <div style={{fontWeight: "bold", position: "relative", top: "2px"}}>
                                        La fecha debe ser menor o igual al día actual
                                    </div>
                                </div>
                        }
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
                                maxTime={
                                    rdxDatosCarga.Siniestro.Fecha ?
                                        rdxDatosCarga.Siniestro.Fecha.format("DD/MM/YYYY") == dayjs().format("DD/MM/YYYY") ? 
                                            dayjs().set('hour', dayjs().hour()).set('minute', dayjs().minute())
                                        :
                                            dayjs().set('hour', 23).set('minute', 59)
                                    :
                                        dayjs().set('hour', 23).set('minute', 59)
                                }
                            />
                            </DemoContainer>
                        </LocalizationProvider>
                        {
                            rdxDatosCarga.Siniestro.Fecha && rdxDatosCarga.Siniestro.Hora &&
                            rdxDatosCarga.Siniestro.Fecha.format("DD/MM/YYYY") == dayjs().format("DD/MM/YYYY") && rdxDatosCarga.Siniestro.Hora.isAfter(dayjs()) &&
                                <div style={{display: "flex", marginTop: "10px", gap: "10px"}}>
                                    <div>
                                        <ReportProblem sx={{color: "#CC0000"}} />
                                    </div>
                                    <div style={{fontWeight: "bold", position: "relative", top: "2px"}}>
                                        La fecha y hora del incidente debe ser menor al momento actual
                                    </div>
                                </div>
                        }
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
                        <span style={RotuloFormulario}>Región</span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={rdxDatosCarga.Siniestro.Region.Id ? rdxDatosCarga.Siniestro.Region : null}
                            fullWidth
                            id="cboComuna"
                            options={rdxRegionesDisponibles.regiones}
                            getOptionLabel={region => CapitalizarNombre(region.Nombre)}
                            renderInput={(params) => <TextField {...params} label="Seleccione una región" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, RegionSeleccionada) => {
                                dispatch(CambiarSiniestro({
                                    ...rdxDatosCarga.Siniestro,
                                    Region: {
                                        Id: RegionSeleccionada?.Id || null,
                                        Nombre: RegionSeleccionada?.Nombre ? CapitalizarNombre(RegionSeleccionada.Nombre) : null
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
                        {
                            rdxDatosCarga.Siniestro.Grabacion.PuedeGrabar && false &&
                                <>
                                    <Button startIcon={<MicIcon sx={{color: "#cc0e28"}}/>} size='small' style={{...BotonAT, backgroundColor: "rgb(226 226 226)", color: "#454545"}} onClick={() => AbrirGrabarRelato()} variant="contained">
                                        Grabar relato
                                    </Button>
                                </>
                        }
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

            {/* *********************************************************************************************** */}
            {/* Modal grabación relato */}

            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={stModalGrabarAbierto}
                fullWidth={true}
                maxWidth={"lg"}
                scroll={"paper"}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontFamily: "Segoe UI Semibold" }} id="customized-dialog-title">
                    Grabación de Relato
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    onClick={() => CerrarGrabarRelato()}
                >
                    <Close />
                </IconButton>

                <DialogContent dividers>
                    <Typography gutterBottom sx={{fontFamily: "Segoe UI"}}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {
                                        rdxDatosCarga.Siniestro.Grabacion.MicrofonoPrendido == false ?
                                            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                <div style={{display: "flex", width: "75%", flexDirection: "column", alignItems: "center"}}>
                                                    <MicOffIcon 
                                                        fontSize='100px'
                                                        sx={{color: "#CCC", fontSize: "100px"}}
                                                    />
                                                    <p style={{color: "#333", fontSize: "20px", textAlign: "center"}}>No se ha detectado un micrófono activo. Por favor verifique que exista un dispositivo conectado y que esté encendido para realizar la grabación.</p>
                                                </div>
                                            </div>
                                        :
                                            rdxDatosCarga.Siniestro.Grabacion.MicrofonoPrendido == true ?
                                                !rdxDatosCarga.Siniestro.Grabacion.Grabando ?
                                                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                        <div style={{display: "flex", width: "75%", flexDirection: "column", alignItems: "center"}}>
                                                            <MicIcon 
                                                                fontSize='100px'
                                                                sx={{color: "#1976D2", fontSize: "100px"}}
                                                            />
                                                            <p style={{color: "#333", fontSize: "20px", textAlign: "center"}}>
                                                                A continuación podrá grabar el relato del siniestro para poder informar los detalles del hecho. Para comenzar presione el siguiente botón <span style={{fontFamily: "Segoe UI Semibold"}}>Comenzar a grabar relato</span>
                                                            </p>
                                                            <Button variant="contained" startIcon={<MicIcon />} size="large" onClick={() => ComenzarAGrabar()}>
                                                                Comenzar a grabar relato
                                                            </Button>
                                                        </div>
                                                    </div>
                                                :
                                                    <div>GRABANDOOOO....</div>
                                            :
                                                ""
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus variant='contained' onClick={() => CerrarGrabarRelato()}>
                        Cerrar
                    </Button>
                </DialogActions>
            </BootstrapDialog>
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