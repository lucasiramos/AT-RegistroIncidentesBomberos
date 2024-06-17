// @ts-nocheck

import * as React from 'react'

import Button from '@mui/material/Button'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Close } from '@mui/icons-material'
import {IconButton} from '@mui/material'
import {Typography} from '@mui/material'
import {Tab} from '@mui/material'
import {Tabs} from '@mui/material'

import { H3AT, RotuloVerCertificado, ResumenFormulario, SpRojo, SpVerde } from '../EstructuraApp/EstilosGlobales'

export default function VerSiniestro({children}: any) {
    const {stVerSiniestro, CerrarVerSiniestro} = children

    const [stTabSeleccionado, setTabSeleccionado] = React.useState(0)

    const ClickTab = (event: React.SyntheticEvent, newValue: number) => {
        setTabSeleccionado(newValue);
    }

    console.log(stVerSiniestro)

    return (
        <BootstrapDialog
            onClose={CerrarVerSiniestro}
            aria-labelledby="customized-dialog-title"
            open={stVerSiniestro.Abierto}
            fullWidth={true}
            maxWidth={"lg"}
            scroll={"paper"}
        >
            <DialogTitle sx={{ m: 0, p: 2, fontFamily: "Segoe UI Semibold" }} id="customized-dialog-title">
                {stVerSiniestro.Titulo}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={CerrarVerSiniestro}
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
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={stTabSeleccionado} onChange={ClickTab} aria-label="basic tabs example">
                                        <Tab label="Información de Asegurados" {...a11yProps(0)} />
                                        <Tab label="Información del Siniestro" {...a11yProps(1)}/>
                                        <Tab label="Información de Terceros" {...a11yProps(2)} sx={{visibility: stVerSiniestro.Datos.Siniestro.TipoSiniestro.Tercero ? "visible" : "hidden"}} />
                                    </Tabs>
                                </Box>
                                
                                <CustomTabPanel value={stTabSeleccionado} index={0}>
                                    {/* Información de Asegurados */}
                                
                                    <Grid container spacing={1}>
                                        {/* --------------------------------------------------------------------------------------------------- */}
                                        {/* Datos del vehículo */}

                                        <Grid item xs={12}>
                                            <h3 style={{...H3AT, marginTop: "0px", marginBottom: "0px", textDecoration: "underline"}}>Datos de vehículo asegurado</h3>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <div style={RotuloVerCertificado}>Marca</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.VehiculoAsegurado.Marca}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div style={RotuloVerCertificado}>Modelo</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.VehiculoAsegurado.Modelo}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div style={RotuloVerCertificado}>Patente</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.VehiculoAsegurado.Patente}</span>
                                        </Grid>

                                        {/* --------------------------------------------------------------------------------------------------- */}
                                        {/* Datos del Conductor */}

                                        <Grid item xs={12}>
                                            <h3 style={{...H3AT, marginTop: "30px" , marginBottom: "0px", textDecoration: "underline"}}>Datos del conductor</h3>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <div style={RotuloVerCertificado}>Nombre</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.ConductorAsegurado.Nombre}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div style={RotuloVerCertificado}>RUT</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.ConductorAsegurado.RUT}</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                            &nbsp;
                                        </Grid>
                                    </Grid>
                                </CustomTabPanel>

                                <CustomTabPanel value={stTabSeleccionado} index={1}>
                                    {/* Información del siniestro */}

                                    <Grid container spacing={1}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Fecha y hora</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.Fecha} {stVerSiniestro.Datos.Siniestro.Hora}</span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Comuna</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.Comuna.Nombre}</span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Lugar</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.Lugar}</span>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={1} sx={{marginTop: "20px"}}>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Tipo siniestro</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.TipoSiniestro.Nombre}
                                                </span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Daño del vehículo asegurado</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.DaniosVehiculoAsegurado}</span>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>Comisaría y N° de Parte policial</div>
                                                <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.Comisaria}, n° parte: {stVerSiniestro.Datos.Siniestro.NumeroPartePolicial}</span>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={1} sx={{marginTop: "20px"}}>
                                            <Grid item xs={4}>
                                                <div style={RotuloVerCertificado}>¿Hubo terceros involucrados?</div>
                                                <span style={stVerSiniestro.Datos.Siniestro.TercerosInvolucrados ? SpRojo : SpVerde}>{stVerSiniestro.Datos.Siniestro.TercerosInvolucrados ? "Sí" : "No"}</span>
                                            </Grid>

                                            {
                                                stVerSiniestro.Datos.Siniestro.TercerosInvolucrados && 
                                                    <>
                                                        <Grid item xs={4}>
                                                            <div style={RotuloVerCertificado}>Responsable del siniestro</div>
                                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Siniestro.ResponsableSiniestro}</span>
                                                        </Grid>
                                                    </>
                                            }
                                        </Grid>

                                        <Grid container spacing={1} sx={{marginTop: "20px"}}>
                                            <Grid item xs={12}>
                                                <div style={RotuloVerCertificado}>Relato</div>
                                                <span style={ResumenFormulario}>
                                                    {stVerSiniestro.Datos.Siniestro.Relato}
                                                </span>
                                            </Grid>                                 
                                        </Grid>
                                    </Grid>
                                </CustomTabPanel>

                                <CustomTabPanel value={stTabSeleccionado} index={2}>
                                    {/* Información de Terceros */}

                                    <Grid container spacing={1}>
                                        {/* --------------------------------------------------------------------------------------------------- */}
                                        {/* Datos personales */}

                                        <Grid item xs={12}>
                                            <h3 style={{...H3AT, marginTop: "0px", marginBottom: "0px", textDecoration: "underline"}}>Datos personales</h3>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Nombre</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Nombre}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>RUT</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.RUT}-{stVerSiniestro.Datos.Tercero.RUTDigitoVerificador}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Teléfono</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Telefono}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Email</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Email}</span>
                                        </Grid>

                                        {/* --------------------------------------------------------------------------------------------------- */}
                                        {/* Datos del vehículo */}

                                        <Grid item xs={12} sx={{marginTop: "20px"}}>
                                            <h3 style={{...H3AT, marginTop: "0px", marginBottom: "0px", textDecoration: "underline"}}>Datos del vehículo</h3>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Marca</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Marca.Nombre}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Modelo</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Modelo.Nombre}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div style={RotuloVerCertificado}>Patente</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.Patente}</span>
                                        </Grid>
                                        <Grid item xs={3}>
                                            &nbsp;
                                        </Grid>

                                        <Grid item xs={12}>
                                            <div style={RotuloVerCertificado}>Daños al vehículo</div>
                                            <span style={ResumenFormulario}>{stVerSiniestro.Datos.Tercero.DaniosVehiculoTercero}</span>
                                        </Grid>
                                    </Grid>

                                    
                                </CustomTabPanel>
                            </Box>
                        </Grid>
                    </Box>
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button autoFocus variant='contained' onClick={CerrarVerSiniestro}>
                    Cerrar
                </Button>
            </DialogActions>
        </BootstrapDialog>
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

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}