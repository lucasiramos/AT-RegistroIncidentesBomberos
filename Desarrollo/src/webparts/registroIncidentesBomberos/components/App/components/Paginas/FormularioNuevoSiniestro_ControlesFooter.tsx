// @ts-nocheck

import * as React from 'react'

import { useDispatch } from "react-redux"

import { CambiarVehiculoAsegurado } from '../EstadosRedux/datosCargaSlice'
import { CambiarConductorAsegurado } from '../EstadosRedux/datosCargaSlice'
import { CambiarSiniestro } from '../EstadosRedux/datosCargaSlice'
import { CambiarTercero } from '../EstadosRedux/datosCargaSlice'
import { CambiarPaginaActual } from '../EstadosRedux/paginaActual'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import { BotonAT, ContenedorMensaje, TituloMensaje, CuerpoMensaje } from '../EstructuraApp/EstilosGlobales'

export const FormularioNuevoSiniestro_ControlesFooter: React.FunctionComponent<{}> = ({children}: any) => {
    const {stPasoActivo, setPasoActivo, RefTituloFormulario} = children

    const dispatch = useDispatch()

    // ----------------------------------------------------------------------------------------------------
    // useStates

    const [stMensaje, setMensaje] = React.useState({
        Abierto: false,
        Titulo: "",
        Texto: "",
        Spinner: false,
        BotonesConfirmarGuardar: false,
        BotonesPostGuardado: false,
        BotonesCancelarCarga: false
    })

    // ----------------------------------------------------------------------------------------------------
    // Funciones

    const ClickCancelarCarga = (pTitulo, pTexto) => {
        setMensaje({
            Abierto: true,
            Titulo: pTitulo,
            Texto: pTexto,
            Spinner: false,
            BotonesConfirmarGuardar: false,
            BotonesPostGuardado: false,
            BotonesCancelarCarga: true  
        })
    }

    const CancelarCarga = () => {
        LimpiarPantallaDeCarga()

        dispatch(CambiarPaginaActual("Mis siniestros en curso"))
    }

    const LimpiarPantallaDeCarga = () => {
        dispatch(CambiarVehiculoAsegurado({
            Id: null,
            IdMarca: null,
            Marca: null,
            IdModelo: null,
            Modelo: null,
            Patente: null
        }))

        dispatch(CambiarConductorAsegurado({
            Id: null,
            Nombre: null,
            RUT: null
        }))

        dispatch(CambiarSiniestro({
            Fecha: null,
            Hora: null,
            Lugar: null,
            Comuna: {
                Id: null,
                Nombre: null
            },
            TipoSiniestro: {
                Id: null,
                Nombre: null,
                Tercero: null
            },
            Relato: null,
            DaniosVehiculoAsegurado: null,
            NumeroPartePolicial: null
        }))

        dispatch(CambiarTercero({
            Nombre: null,
            RUT: null,
            RUTDigitoVerificador: null,
            Telefono: null,
            Email: null,
            Marca: {
                Id: null,
                Nombre: null
            },
            Modelo: {
                Id: null,
                Nombre: null
            },
            Patente: null,
            DaniosVehiculoTercero: null
        }))
    }

    const ClickGuardar = () => {
        setMensaje({
            Abierto: true,
            Titulo: "¿Confirma informar el siniestro con los datos ingresados?",
            Texto: '',
            Spinner: false,
            BotonesConfirmarGuardar: true,
            BotonesPostGuardado: false,
            BotonesCancelarCarga: false  
        })
    }

    const CerrarMensaje = () => {
        setMensaje({
            Abierto: false,
            Titulo: "",
            Texto: "",
            Spinner: false,
            BotonesConfirmarGuardar: false,
            BotonesPostGuardado: false,
            BotonesCancelarCarga: false  
        })
    }

    const MostrarSpinner = (pTitulo = "", pTexto = "") => {
        setMensaje({
            Abierto: true,
            Titulo: pTitulo,
            Texto: pTexto,
            Spinner: true,
            BotonesConfirmarGuardar: false,
            BotonesPostGuardado: false,
            BotonesCancelarCarga: false  
        })
    }

    const GuardarNuevoSiniestro:() => Promise<void> = async () => {
        MostrarSpinner("Guardando información del nuevo siniestro...")

        await Esperar(2000)

        MostrarMensajePostGuardado("El siniestro se ha informado correctamente", `¿Desea informar un nuevo siniestro o regresar a la página principal?`)
    }

    function Esperar(pTiempo){
        var pEsperar = new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve()
            }, pTiempo)
        })
        return pEsperar
    }

    const MostrarMensajePostGuardado = (pTitulo, pTexto) => {
        setMensaje({
            Abierto: true,
            Titulo: pTitulo,
            Texto: pTexto,
            Spinner: false,
            BotonesConfirmarGuardar: false,
            BotonesPostGuardado: true,
            BotonesCancelarCarga: false  
        })
    }

    const ReiniciarCargaSiniestro = () => {
        LimpiarPantallaDeCarga()
        
        setPasoActivo(0)
        RefTituloFormulario.current.scrollIntoView({behavior: 'smooth'})

        CerrarMensaje()
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, mt: '60px', paddingBottom: "10px" }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Button onClick={() => {
                            ClickCancelarCarga("Confirmar Cancelar carga", "¿Desea Cancelar la carga e ir a la página principal?")
                        }}>Cancelar carga</Button>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: "right"}}>
                        {
                            stPasoActivo != 0 &&
                            <Button 
                                style={BotonAT} 
                                onClick={() => {
                                    setPasoActivo(stPasoActivo - 1)
                                    RefTituloFormulario.current.scrollIntoView({behavior: 'smooth'})
                                }} 
                                variant="contained" 
                                color="success" 
                                sx={{marginLeft: "20px"}}
                            >
                                Anterior
                            </Button>
                        }
                        {
                            stPasoActivo != 3 &&
                            <Button 
                                style={BotonAT} 
                                onClick={() => {
                                    setPasoActivo(stPasoActivo + 1)
                                    RefTituloFormulario.current.scrollIntoView({behavior: 'smooth'})
                                }} 
                                variant="contained" 
                                color="success" 
                                sx={{marginLeft: "20px"}}
                            >
                                Siguiente
                            </Button>
                        }
                        {
                            stPasoActivo == 3 &&
                                <Button 
                                    sx={{
                                        fontSize: "14px",
                                        marginLeft: "20px",
                                        fontFamily: "Segoe UI Semibold",
                                        "&.Mui-disabled": {
                                        background: "#eaeaea",
                                        color: "#c0c0c0"
                                        }
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => ClickGuardar()} 
                                    endIcon={<SendIcon />}
                                    disabled={false
                                        // (MiUsuario.TipoCertificados.Singular == "Certificado" && !DatosCarga.CompaniaEmisora.Id) || 
                                        // (MiUsuario.TipoCertificados.Singular == "Certificado" && !DatosCarga.Poliza.Id) || 
                                        // !DatosCarga.Contenedor.BL || 
                                        // DatosCarga.Contenedor.Contenedores.length == 0 ||
                                        // (!DatosCarga.Facturante.FacturanteEsConsignatario &&
                                        //     (!DatosCarga.Facturante.Nombre || !DatosCarga.Facturante.Direccion || !DatosCarga.Facturante.Telefono || (!DatosCarga.Facturante.RUT && !DatosCarga.Facturante.FacturanteExtranjero) || !DatosCarga.Facturante.Email) 
                                        // ) ||
                                        // DatosCarga.Contenedor.ContenedoresInvalidos.length > 0 ||
                                        // (
                                        //     MiUsuario.TipoCertificados.Singular == "Certificado" && DatosCarga.CompaniaEmisora.Title == "Chubb" && !DatosCarga.Facturante.FacturanteEsConsignatario && !DatosCarga.Facturante.FacturanteExtranjero && !DatosCarga.Facturante.CiudadChubb?.Title
                                        // ) ||
                                        // (
                                        //     DatosCarga.Consignatario.Nombre && !DatosCarga.Consignatario.RUT && !DatosCarga.Consignatario.ConsignatarioSinRUT.RUT
                                        // ) ||
                                        // DatosCarga.Consignatario.CartaGlobal ||
                                        // (
                                        //     DatosCarga.AgenteDeAduana.CargadoManualmente &&
                                        //     (!DatosCarga.AgenteDeAduana.Title || !DatosCarga.AgenteDeAduana.RUTCargadoAMano || !DatosCarga.AgenteDeAduana.Direccion || !DatosCarga.AgenteDeAduana.Email || !DatosCarga.AgenteDeAduana.Ciudad || !DatosCarga.AgenteDeAduana.Telefono)
                                        // ) ||
                                        // (
                                        //     !DatosCarga.AgenteDeAduana.CargadoManualmente && !DatosCarga.AgenteDeAduana.Id
                                        // )
                                    }
                                >
                                    Informar siniestro
                                </Button>
                        }
                    </Grid>
                </Grid>
            </Box>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Backdrop
                sx={{ color: '#fff', flexDirection: "column", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={stMensaje.Abierto}
            >
                <div style={ContenedorMensaje}>
                    <p style={{...TituloMensaje, fontFamily: "Segoe UI Semibold !important"}}>{stMensaje.Titulo}</p>
                    <p style={CuerpoMensaje}>{stMensaje.Texto}</p>
                    {
                        stMensaje.Spinner &&
                            <CircularProgress style={{'color': 'white'}}/>
                    }
                    {
                        stMensaje.BotonesConfirmarGuardar &&
                            <div>
                                <Button style={{...BotonAT, backgroundColor: "rgb(226 226 226)", color: "#454545"}} onClick={() => CerrarMensaje()} variant="contained">
                                    Cancelar
                                </Button>
                                <Button 
                                    sx={{
                                        fontSize: "14px",
                                        marginLeft: "20px",
                                        fontFamily: "Segoe UI Semibold",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => GuardarNuevoSiniestro()} 
                                    endIcon={<SendIcon />}
                                >
                                    Informar siniestro
                                </Button>
                            </div>
                    }
                    {
                        stMensaje.BotonesPostGuardado &&
                            <div>
                                <Button 
                                    style={{...BotonAT, backgroundColor: "rgb(226 226 226)", color: "#454545"}} 
                                    onClick={() => CancelarCarga()} 
                                    variant="contained"
                                >
                                    Ir a la Página Principal
                                </Button>
                                <Button 
                                    sx={{
                                        fontSize: "14px",
                                        marginLeft: "20px",
                                        fontFamily: "Segoe UI Semibold",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => ReiniciarCargaSiniestro()}
                                >
                                    {`Registrar un nuevo siniestro`}
                                </Button>
                            </div>
                    }
                    {
                        stMensaje.BotonesCancelarCarga &&
                            <div>
                                <Button 
                                    style={{...BotonAT, backgroundColor: "rgb(226 226 226)", color: "#454545"}} 
                                    onClick={() => CerrarMensaje()} 
                                    variant="contained"
                                >
                                    No, prefiero continuar cargando
                                </Button>
                                <Button 
                                    sx={{
                                        fontSize: "14px",
                                        marginLeft: "20px",
                                        fontFamily: "Segoe UI Semibold",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => CancelarCarga()}
                                >
                                    Cancelar carga e ir a la Página principal
                                </Button>
                            </div>
                    }
                </div>
            </Backdrop>
        </>
    )
}