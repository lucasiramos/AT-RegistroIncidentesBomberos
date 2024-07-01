// @ts-nocheck

import * as React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { ContextSharePoint } from '../../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../../EstructuraApp/Servicio'
import { AgregarDatos } from '../../EstructuraApp/Servicio'
import { ModificarDatos } from '../../EstructuraApp/Servicio'

import { CambiarRegionesDisponibles } from '../../EstadosRedux/regionesDisponiblesSlice'
import { CambiarMarcasVehiculosAseguradosDisponibles } from '../../EstadosRedux/marcasVehiculosAseguradosSlice'
import { CambiarModelosVehiculosAseguradosDisponibles } from '../../EstadosRedux/modelosVehiculosAseguradosSlice'
import { CambiarTiposVehiculosAseguradosDisponibles } from '../../EstadosRedux/tiposVehiculosAseguradosSlice'
import { CambiarCuerposBomberosDisponibles } from '../../EstadosRedux/cuerposBomberosDisponiblesSlice'
import { CambiarPaginaActual } from '../../EstadosRedux/paginaActual'

import { Box, Grid, TextField, Autocomplete, TextField, Backdrop, CircularProgress, LinearProgress, Button } from '@mui/material'
import { Send } from '@mui/icons-material'

import { AsteriscoCargaObligatoria } from '../../EstructuraApp/AsteriscoCargaObligatoria'

import { RotuloFormulario, ContenedorMensaje, TituloMensaje, CuerpoMensaje } from '../../EstructuraApp/EstilosGlobales'

export const BomberosAdmin_CargaVehiculos_Formulario: React.FunctionComponent<{}> = () => {
    const rdxRegionesDisponibles = useSelector((state:any) => state.RegionesDisponibles)
    const rdxMarcasVehiculosAseguradosDisponibles = useSelector((state:any) => state.MarcasVehiculosAseguradosDisponibles)
    const rdxModelosVehiculosAseguradosDisponibles = useSelector((state:any) => state.ModelosVehiculosAseguradosDisponibles)
    const rdxTiposVehiculosAseguradosDisponibles = useSelector((state:any) => state.TiposVehiculosAseguradosDisponibles)
    const rdxCuerposBomberosDisponibles = useSelector((state:any) => state.CuerposBomberosDisponibles)
    const rdxIdEditando = useSelector((state:any) => state.IdEditando.id)
    
    const { Context }: any = React.useContext<any>(ContextSharePoint)

    const dispatch = useDispatch()

    // ---------------------------------------------------------------------------------------------
    // useStates

    const [stCarga, setCarga] = React.useState({
        Patente: "",
        Chasis: "",
        Motor: "",
        Marca: {
            Id: null,
            Title: null
        },
        Modelo: {
            Id: null,
            Title: null
        },
        TipoVehiculo: {
            Id: null,
            Title: null
        },
        Anio: null,
        Region: {
            Id: null,
            Title: null
        },
        CuerpoBomberos: {
            Id: null,
            Title: null
        },
        Propietarios: null,
        Compania: ""
    })

    const [stMensaje, setMensaje] = React.useState({
        Abierto: false,
        Titulo: "",
        Texto: "",
        Spinner: true,
        MuestroPorcentaje: false,
        Porcentaje: 0,
        BotonEntendido: false,
        BotonesCancelarCarga: false,
        BotonesConfirmarGuardado: false,
        BotonesPostgrabacion: false
    })

    console.log(stCarga)

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario

    useEffect(() =>{
        BuscarDatosParaCargaFormulario(Context, dispatch)
    }, [])

    const BuscarDatosParaCargaFormulario:() => Promise<void> = async(Context, dispatch) =>{
        setMensaje({
            ...stMensaje,
            Abierto: true,
            Titulo: "Iniciando carga del formulario...",
            MuestroPorcentaje: true,
            Porcentaje: 0
        })

        if(rdxRegionesDisponibles.regiones.length == 0){
            let dataRegiones = await ObtenerDatos("Regiones", `$select=Id, Title&$orderby=Title`, Context)
            dispatch(CambiarRegionesDisponibles(dataRegiones))

            setMensaje({
                ...stMensaje,
                Abierto: true,
                Titulo: "Iniciando carga del formulario...",
                MuestroPorcentaje: true,
                Porcentaje: 15
            })
        }

        let dataMarcas = await ObtenerDatos("MarcasVehiculosBomberos", `$select=Id, Title&$orderby=Title`, Context)
        dispatch(CambiarMarcasVehiculosAseguradosDisponibles(dataMarcas))

        setMensaje({
            ...stMensaje,
            Abierto: true,
            Titulo: "Iniciando carga del formulario...",
            MuestroPorcentaje: true,
            Porcentaje: 33
        })

        let dataTiposVehiculos = await ObtenerDatos("TiposVehiculosBomberos", `$select=Id, Title&$orderby=Title`, Context)
        dispatch(CambiarTiposVehiculosAseguradosDisponibles(dataTiposVehiculos))

        setMensaje({
            ...stMensaje,
            Abierto: true,
            Titulo: "Iniciando carga del formulario...",
            MuestroPorcentaje: true,
            Porcentaje: 66
        })

        let dataCuerposBomberos = await ObtenerDatos("CuerposBomberos", `$select=Id, Title&$orderby=Title`, Context)
        dispatch(CambiarCuerposBomberosDisponibles(dataCuerposBomberos))

        if(rdxIdEditando != 0){
            let dataVehiculoEditando = await ObtenerDatos("VehiculosBomberos", `$select=Id, Patente, Chasis, Motor, Anio, TipoVehiculo/Id, TipoVehiculo/Title, Marca/Id, Marca/Title, Modelo/Id, Modelo/Title, Region/Id, Region/Title, CuerpoBomberos/Id, CuerpoBomberos/Title, Propietarios, Compania&$expand=TipoVehiculo, Marca, Modelo, Region, CuerpoBomberos&$filter=Id eq ${rdxIdEditando}`, Context)

            setCarga({
                Patente: dataVehiculoEditando[0].Patente || "",
                Chasis: dataVehiculoEditando[0].Chasis || "",
                Motor: dataVehiculoEditando[0].Motor || "",
                Marca: {
                    Id: dataVehiculoEditando[0].Marca?.Id || null,
                    Title: dataVehiculoEditando[0].Marca?.Title || null
                },
                Modelo: {
                    Id: dataVehiculoEditando[0].Modelo?.Id || null,
                    Title: dataVehiculoEditando[0].Modelo?.Title || null
                },
                TipoVehiculo: {
                    Id: dataVehiculoEditando[0].TipoVehiculo?.Id || null,
                    Title: dataVehiculoEditando[0].TipoVehiculo?.Title || null
                },
                Anio: dataVehiculoEditando[0].Anio || null,
                Region: {
                    Id: dataVehiculoEditando[0].Region?.Id || null,
                    Title: dataVehiculoEditando[0].Region?.Title || null
                },
                CuerpoBomberos: {
                    Id: dataVehiculoEditando[0].CuerpoBomberos?.Id || null,
                    Title: dataVehiculoEditando[0].CuerpoBomberos?.Title || null
                },
                Propietarios: dataVehiculoEditando[0].Propietarios || null,
                Compania: dataVehiculoEditando[0].Compania || ""
            })
        }

        setMensaje({
            ...stMensaje,
            Abierto: false,
            Porcentaje: 100,
            MuestroPorcentaje: false
        })
    }

    // ---------------------------------------------------------------------------------------------
    // Funciones varias

    const ChangeTxt = (pTxt) => {
        setCarga({
            ...stCarga,
            [pTxt.name]: pTxt.value,
        })
    }

    const ChangeCboMarcas:() => Promise<void> = async(MarcaSeleccionada) =>{
        setCarga({
            ...stCarga,
            Marca: {
                Id: MarcaSeleccionada?.Id || null,
                Title: MarcaSeleccionada?.Title || null
            },
            Modelo: {
                Id: null,
                Title: null
            }
        })

        if(MarcaSeleccionada?.Id){
            setMensaje({
                Abierto: true,
                Titulo: "Buscando modelos de la marca elegida...",
                Texto: "",
                Spinner: true,
                MuestroPorcentaje: false,
                Porcentaje: 0,
                BotonEntendido: false,
                BotonesCancelarCarga: false,
                BotonesConfirmarGuardado: false,
                BotonesPostgrabacion: false
            })
    
            let dataModelos = await ObtenerDatos("ModelosVehiculosBomberos", `$select=Id, Title, Marca/Id, Marca/Title&$expand=Marca&$filter=Marca/Id eq ${MarcaSeleccionada.Id}&$orderby=Title`, Context)
            dispatch(CambiarModelosVehiculosAseguradosDisponibles(dataModelos))
    
            setMensaje({
                Abierto: false,
                Titulo: "Buscando modelos de la marca elegida...",
                Texto: "",
                Spinner: true,
                MuestroPorcentaje: false,
                Porcentaje: 0,
                BotonEntendido: false,
                BotonesCancelarCarga: false,
                BotonesConfirmarGuardado: false,
                BotonesPostgrabacion: false
            })
        }
    }

    const CerrarMensaje = () => {
        setMensaje({
            ...stMensaje,
            Abierto: false
        })
    }

    const ClickCancelarCarga = (pTitulo, pTexto) => {
        setMensaje({
            Abierto: true,
            Titulo: pTitulo,
            Texto: pTexto,
            Spinner: false,
            MuestroPorcentaje: false,
            Porcentaje: 0,
            BotonEntendido: false,
            BotonesCancelarCarga: true,
            BotonesConfirmarGuardado: false,
            BotonesPostgrabacion: false
        })
    }

    const CancelarCarga = () => {
        dispatch(CambiarPaginaActual("Mantenimiento de Vehículos"))
    }

    const ClickGuardarCarga = () => {
        setMensaje({
            Abierto: true,
            Titulo: "Confirmar guardado de vehículo",
            Texto: `¿Confirma la información ingresada para ${rdxIdEditando == 0 ? "agregar" : "modificar"} el vehículo?`,
            Spinner: false,
            MuestroPorcentaje: false,
            Porcentaje: 0,
            BotonEntendido: false,
            BotonesCancelarCarga: false,
            BotonesConfirmarGuardado: true,
            BotonesPostgrabacion: false
        })
    } 

    const GuardarCarga:() => Promise<void> = async () => {
        setMensaje({
            Abierto: true,
            Titulo: `${rdxIdEditando == 0 ? "Agregando nuevo vehículo..." : "Modificando información del vehículo..." }`,
            Texto: "",
            Spinner: true,
            MuestroPorcentaje: false,
            Porcentaje: 0,
            BotonEntendido: false,
            BotonesCancelarCarga: false,
            BotonesConfirmarGuardado: false,
            BotonesPostgrabacion: false
        })

        let DatosCarga = {
            Patente: stCarga.Patente,
            MarcaId: stCarga.Marca.Id,
            ModeloId: stCarga.Modelo.Id,
            TipoVehiculoId: stCarga.TipoVehiculo.Id,
            Anio: stCarga.Anio,
            RegionId: stCarga.Region.Id,
            CuerpoBomberosId: stCarga.CuerpoBomberos.Id,
            Propietarios: stCarga.Propietarios,
            Compania: stCarga.Compania,
            Chasis: stCarga.Chasis,
            Motor: stCarga.Motor,
        }

        if(rdxIdEditando == 0){
            await AgregarDatos("VehiculosBomberos", DatosCarga, Context)
        }else{
            await ModificarDatos("VehiculosBomberos", rdxIdEditando, DatosCarga, Context)
        }

        setMensaje({
            Abierto: true,
            Titulo: `Vehículo ${rdxIdEditando == 0 ? "agregado" : "modificado"}`,
            Texto: `El vehículo fue ${rdxIdEditando == 0 ? "agregado" : "modificado"} correctamente.`,
            Spinner: false,
            MuestroPorcentaje: false,
            Porcentaje: 0,
            BotonEntendido: false,
            BotonesCancelarCarga: false,
            BotonesConfirmarGuardado: false,
            BotonesPostgrabacion: true
        })
    } 

    const ClickCargarNuevoVehiculo = () => {
        setCarga({
            Patente: "",
            Chasis: "",
            Motor: "",
            Marca: {
                Id: null,
                Title: null
            },
            Modelo: {
                Id: null,
                Title: null
            },
            TipoVehiculo: {
                Id: null,
                Title: null
            },
            Anio: null,
            Region: {
                Id: null,
                Title: null
            },
            CuerpoBomberos: {
                Id: null,
                Title: null
            },
            Propietarios: null,
            Compania: ""
        })

        CerrarMensaje()
    }

    // ---------------------------------------------------------------------------------------------
    // Render

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>               
                    <Grid item xs={1}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={3}>
                        <span style={RotuloFormulario}>Patente<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Patente || ""} 
                            defaultValuevalue={stCarga.Patente || ""} 
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
                        <span style={RotuloFormulario}>Marca<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={stCarga.Marca?.Id ? stCarga.Marca : null}
                            fullWidth
                            id="cboMarca"
                            options={rdxMarcasVehiculosAseguradosDisponibles.marcas}
                            getOptionLabel={x => x.Title}
                            renderInput={(params) => <TextField {...params} label="Seleccione una marca" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, MarcaSeleccionada) => {
                                ChangeCboMarcas(MarcaSeleccionada)
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
                        <span style={RotuloFormulario}>Modelo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={stCarga.Modelo?.Id ? stCarga.Modelo : null}
                            fullWidth
                            id="cboModelo"
                            options={rdxModelosVehiculosAseguradosDisponibles.modelos}
                            getOptionLabel={x => x.Title}
                            renderInput={(params) => <TextField {...params} label={stCarga.Marca?.Id ? "Seleccione un modelo" : "Seleccione una marca para listar sus modelos"} />}
                            disabled={!stCarga.Marca?.Id}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event, ModeloSeleccionado) => {
                                setCarga({
                                    ...stCarga,
                                    Modelo: {
                                        Id: ModeloSeleccionado?.Id || null,
                                        Title: ModeloSeleccionado?.Title || null
                                    }
                                })
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
                        <span style={RotuloFormulario}>Tipo de vehículo<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={stCarga.TipoVehiculo?.Id ? stCarga.TipoVehiculo : null}
                            fullWidth
                            id="cboTipoVehiculo"
                            name="TipoVehiculo"
                            options={rdxTiposVehiculosAseguradosDisponibles.tipos}
                            getOptionLabel={x => x.Title}
                            renderInput={(params) => <TextField {...params} label="Seleccione un tipo de vehículo" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLSelectElement>, TipoSeleccionado) => {
                                setCarga({
                                    ...stCarga,
                                    TipoVehiculo: {
                                        Id: TipoSeleccionado?.Id || null,
                                        Title: TipoSeleccionado?.Title || null
                                    }
                                })
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
                        <span style={RotuloFormulario}>Año<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Anio || ""} 
                            defaultValuevalue={stCarga.Anio || ""} 
                            fullWidth 
                            name="Anio"
                            size="small"
                            type="number"
                            InputProps={{ inputProps: { min: 0 } }} 
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
                        <span style={RotuloFormulario}>Chasis<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Chasis || ""} 
                            defaultValuevalue={stCarga.Chasis || ""} 
                            fullWidth 
                            name="Chasis"
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
                        <span style={RotuloFormulario}>Motor<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Motor || ""} 
                            defaultValuevalue={stCarga.Motor || ""} 
                            fullWidth 
                            name="Motor"
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
                        <span style={RotuloFormulario}>Región<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={stCarga.Region?.Id ? stCarga.Region : null}
                            fullWidth
                            id="cboCuerpoBomberos"
                            name="Region"
                            options={rdxRegionesDisponibles.regiones}
                            getOptionLabel={x => x.Title}
                            renderInput={(params) => <TextField {...params} label="Seleccione una región" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLSelectElement>, RegionSeleccionada) => {
                                setCarga({
                                    ...stCarga,
                                    Region: {
                                        Id: RegionSeleccionada?.Id || null,
                                        Title: RegionSeleccionada?.Title || null
                                    }
                                })
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
                        <span style={RotuloFormulario}>Cuerpo Bomberos<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            value={stCarga.CuerpoBomberos?.Id ? stCarga.CuerpoBomberos : null}
                            fullWidth
                            id="cboCuerpoBomberos"
                            name="CuerpoBomberos"
                            options={rdxCuerposBomberosDisponibles.cuerpos}
                            getOptionLabel={x => x.Title}
                            renderInput={(params) => <TextField {...params} label="Seleccione un cuerpo bomberos" />}
                            size="small"
                            sx={{ fontFamily: "Segoe UI !important", backgroundColor: '#ffffff' }}
                            onChange={(event: React.FocusEvent<HTMLSelectElement>, CuerpoSeleccionado) => {
                                setCarga({
                                    ...stCarga,
                                    CuerpoBomberos: {
                                        Id: CuerpoSeleccionado?.Id || null,
                                        Title: CuerpoSeleccionado?.Title || null
                                    }
                                })
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
                        <span style={RotuloFormulario}>Propietarios<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Propietarios || ""} 
                            defaultValuevalue={stCarga.Propietarios || ""} 
                            fullWidth 
                            name="Propietarios"
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
                        <span style={RotuloFormulario}>Compañía<AsteriscoCargaObligatoria/></span>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            value={stCarga.Compania || ""} 
                            defaultValue={stCarga.Compania || ""} 
                            fullWidth 
                            name="Compania"
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
                        <Button onClick={() => {
                            ClickCancelarCarga("Confirmar Cancelar carga", "¿Desea Cancelar la carga actual y regresar al listado de vehículos?")
                        }}>Cancelar carga</Button>
                    </Grid>
                    <Grid item xs={7} sx={{textAlign: "right"}}>
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
                            onClick={() => ClickGuardarCarga()} 
                            endIcon={<Send />}
                            disabled={
                                !stCarga.Patente || !stCarga.Marca.Id || !stCarga.Modelo.Id || !stCarga.TipoVehiculo.Id || !stCarga.CuerpoBomberos.Id || !stCarga.Region.Id || !stCarga.Propietarios || !stCarga.Compania || !stCarga.Anio || !stCarga.Chasis || !stCarga.Motor
                            }
                        >
                            Guardar vehículo
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        &nbsp;
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
                        stMensaje.MuestroPorcentaje &&
                            <div style={{width: "100%", marginTop: "50px"}}>
                                <LinearProgress variant="determinate" value={stMensaje.Porcentaje} />
                            </div>
                    }

                    {/* --------------------------------------------------------------------- */}
                    {/* Botones Cancelar carga */}
                    {
                        stMensaje.BotonesCancelarCarga &&
                            <div>
                                <Button 
                                    style={{backgroundColor: "rgb(226 226 226)", color: "#454545"}} 
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
                                    Cancelar carga
                                </Button>
                            </div>
                    }

                    {/* --------------------------------------------------------------------- */}
                    {/* Botones Guardar carga */}
                    {
                        stMensaje.BotonesConfirmarGuardado &&
                            <div>
                                <Button style={{backgroundColor: "rgb(226 226 226)", color: "#454545"}} onClick={() => CerrarMensaje()} variant="contained">
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
                                    onClick={() => GuardarCarga()} 
                                    endIcon={<Send />}
                                >
                                    Guardar
                                </Button>
                            </div>
                    }

                    {/* --------------------------------------------------------------------- */}
                    {/* Botones Postgrabacion */}
                    {
                        stMensaje.BotonesPostgrabacion &&
                            (rdxIdEditando == 0 ?
                                <div>
                                    <Button 
                                        style={{backgroundColor: "rgb(226 226 226)", color: "#454545"}}
                                        variant="contained"
                                        onClick={() => {
                                            dispatch(CambiarPaginaActual("Carga de Vehículos"))
                                        }}
                                    >
                                        Volver a listado de vehículos
                                    </Button>
                                    <Button 
                                        sx={{
                                            fontSize: "14px",
                                            marginLeft: "20px",
                                            fontFamily: "Segoe UI Semibold",
                                        }}
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            ClickCargarNuevoVehiculo()
                                        }}
                                    >
                                        Cargar un nuevo vehículo
                                    </Button>
                                </div>
                            :
                                <Button 
                                    sx={{
                                        fontSize: "14px",
                                        marginLeft: "20px",
                                        fontFamily: "Segoe UI Semibold",
                                    }}
                                    variant="contained"
                                    color="success"
                                    onClick={() => {
                                        dispatch(CambiarPaginaActual("Carga de Vehículos"))
                                    }}
                                >
                                    Aceptar
                                </Button>)
                    }
                </div>
            </Backdrop>
        </>
    )
}