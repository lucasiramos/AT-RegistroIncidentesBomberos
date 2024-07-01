// @ts-nocheck

import * as React from 'react'

import { useEffect } from 'react'
import { useDispatch } from "react-redux"

import { CambiarPaginaActual } from '../../EstadosRedux/paginaActual'
import { CambiarIdEditando } from '../../EstadosRedux/idEditandoSlice'

import { ContextSharePoint } from '../../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../../EstructuraApp/Servicio'

import 'primeicons/primeicons.css'
import { PrimeReactProvider, FilterMatchMode, FilterOperator, locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { Backdrop, CircularProgress, IconButton, Skeleton, Stack, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Box, Grid } from '@mui/material'
import { Search, AddCircle, Close, Edit } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

import { ContenedorMensaje, TituloMensaje, H3AT, SpAmarillo, RotuloVerDatosPopup, ResumenFormulario } from '../../EstructuraApp/EstilosGlobales'

export const BomberosAdmin_CargaVehiculos: React.FunctionComponent<{}> = () => {
    const dispatch = useDispatch()
    const { Context }: any = React.useContext<any>(ContextSharePoint)

    // ---------------------------------------------------------------------------------------------
    // useStates

    const [stCargando, setCargando] = React.useState({
        Abierto: true,
        Mensaje: "Buscando vehículos..."
    })

    const [stVehiculos, setVehiculos] = React.useState([])

    const [stFiltrosTabla, setFiltrosTabla] = React.useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        Patente: { value: null, matchMode: FilterMatchMode.CONTAINS },
        'Marca.Title': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'Modelo.Title': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'TipoVehiculo.Title': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'CuerpoBomberos.Title': { value: null, matchMode: FilterMatchMode.CONTAINS },
        Compania: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    const [stMostrarDatosVehiculo, setMostrarDatosVehiculo] = React.useState({
        Abierto: false,
        Vehiculo: {}
    })

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario

    useEffect(() =>{
        BuscarVehiculos(Context)
    }, [])

    const BuscarVehiculos:() => Promise<void> = async(Context) =>{
        let dataVehiculos = await ObtenerDatos("VehiculosBomberos", `$select=Id, Patente, Marca/Id, Marca/Title, Modelo/Id, Modelo/Title, TipoVehiculo/Title, CuerpoBomberos/Title, Compania, Chasis, Motor, Anio, Region/Title, Propietarios&$expand=Marca, Modelo, TipoVehiculo, CuerpoBomberos, Region&$orderby=Patente, Title`, Context)

        setVehiculos(dataVehiculos)

        setCargando({
            Abierto: false,
            Mensaje: "Buscando vehículos..."
        })
    }

    // ---------------------------------------------------------------------------------------------
    // Funciones varias

    const ClickNuevoVehiculo = () => {
        dispatch(CambiarIdEditando(0))
        dispatch(CambiarPaginaActual("Carga de nuevo vehículo"))
    }
    
    const MostrarDatosVehiculo = (pVehiculo) => {
        let dataVehiculoMuestro = stVehiculos.find(x => x.Id == pVehiculo.Id)

        setMostrarDatosVehiculo({
            Abierto: true,
            Vehiculo: dataVehiculoMuestro
        })
    }

    const CerrarMostrarDatosVehiculo = () => {
        setMostrarDatosVehiculo({
            ...stMostrarDatosVehiculo,
            Abierto: false,
        })
    }

    const ClickEditarVehiculo = (pVehiculo) => {
        dispatch(CambiarIdEditando(pVehiculo.Id))
        dispatch(CambiarPaginaActual("Modificar información de vehículo"))
    }

    // ---------------------------------------------------------------------------------------------
    // Render

    const accionesBodyTemplate = (pVehiculo) => {
        return <>
            <IconButton aria-label="Ver más" onClick={ () => MostrarDatosVehiculo(pVehiculo) }>
                <Search />
            </IconButton>
            <IconButton aria-label="Ver más" onClick={ () => ClickEditarVehiculo(pVehiculo) }>
                <Edit />
            </IconButton>
        </>
    }

    const Estilos = {
        Skeleton: {
            width: "100%"
        }
    }

    /*
    const ArmarHeaderTabla = () => {
        return (
            <div className="flex justify-content-end">
                <span>Aca iria el buscadorcin...</span>
            </div>
        );
    };

    const HeaderTabla = ArmarHeaderTabla()
    */ 

    return (
        <>
            <Button variant="contained" startIcon={<AddCircle />} sx={{textTransform: "none", marginBottom: "20px"}} size="large" onClick={() => ClickNuevoVehiculo()}>
                Cargar nuevo vehículo
            </Button>

            {
                stVehiculos.length > 0 ? 
                    <>
                        <PrimeReactProvider>
                            <DataTable value={stVehiculos} size="small" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]} tableStyle={{ minWidth: '50rem' }} sortMode="multiple" filters={stFiltrosTabla} filterDisplay="row" globalFilterFields={['Patente', 'Marca.Title', 'Modelo.Title', 'TipoVehiculo.Title', 'CuerpoBomberos.Title', 'Compania']} emptyMessage="No se encontraron vehículos...">
                                <Column header="Acciones" body={accionesBodyTemplate} bodyStyle={{ textAlign: 'center', width: "125px" }}></Column>
                                <Column header="Patente" field="Patente" sortable filter filterPlaceholder="Buscar"></Column>
                                <Column header="Marca" field="Marca.Title" sortable filter filterPlaceholder="Buscar"></Column>
                                <Column header="Modelo" field="Modelo.Title" sortable filter filterPlaceholder="Buscar"></Column>
                                <Column header="Tipo vehículo" field="TipoVehiculo.Title" sortable filter filterPlaceholder="Buscar"></Column>
                                <Column header="Cuerpo Bomberos" field="CuerpoBomberos.Title" sortable filter filterPlaceholder="Buscar"></Column>
                                <Column header="Compañía" field="Compania" sortable filter filterPlaceholder="Buscar"></Column>
                            </DataTable>
                        </PrimeReactProvider>
                    </>
                :
                    <>
                        <Stack spacing={2}>
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                            <Skeleton variant="rounded" className={Estilos.Skeleton} height={45} />
                        </Stack>
                    </>
            }
            

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <Backdrop
                sx={{ color: '#fff', flexDirection: "column", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={stCargando.Abierto}
            >
                <div style={ContenedorMensaje}>
                    <p style={{...TituloMensaje, fontFamily: "Segoe UI Semibold !important"}}>{stCargando.Mensaje}</p>
                    {
                        true &&
                            <CircularProgress style={{'color': 'white'}}/>
                    }
                </div>
            </Backdrop>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <BootstrapDialog
                onClose={CerrarMostrarDatosVehiculo}
                aria-labelledby="customized-dialog-title"
                open={stMostrarDatosVehiculo.Abierto}
                fullWidth={true}
                maxWidth={"lg"}
                scroll={"paper"}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontFamily: "Segoe UI Semibold" }} id="customized-dialog-title">
                    {`${stMostrarDatosVehiculo.Vehiculo.Marca?.Title || ""} ${stMostrarDatosVehiculo.Vehiculo.Modelo?.Title || ""} - Patente ${stMostrarDatosVehiculo.Vehiculo.Patente || "-"}`}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={CerrarMostrarDatosVehiculo}
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
                                {/* --------------------------------------------------------------------------------------------------- */}
                                {/* Información del vehículo */}

                                <Grid item xs={12}>
                                    <h3 style={{...H3AT, marginTop: "0px", marginBottom: "0px", textDecoration: "underline"}}>Información del vehículo</h3>
                                </Grid>

                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Marca</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Marca?.Title ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Marca?.Title || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Modelo</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Modelo?.Title ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Modelo?.Title || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Tipo</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.TipoVehiculo?.Title ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.TipoVehiculo?.Title || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Año</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Anio ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Anio || "-Sin dato-"}</span>
                                </Grid>

                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Patente</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Patente ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Patente || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>N° Chasis</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Chasis ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Chasis || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>N° Motor</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Motor ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Motor || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    &nbsp;
                                </Grid>

                                {/* --------------------------------------------------------------------------------------------------- */}
                                {/* Pertenece a */}

                                <Grid item xs={12}>
                                    <h3 style={{...H3AT, marginTop: "30px" , marginBottom: "0px", textDecoration: "underline"}}>Pertenece a</h3>
                                </Grid>

                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Región</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Region?.Title ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Region?.Title || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Cuerpo de Bomberos</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.CuerpoBomberos?.Title ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.CuerpoBomberos?.Title || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Propietarios</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Propietarios ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Propietarios || "-Sin dato-"}</span>
                                </Grid>
                                <Grid item xs={3}>
                                    <div style={RotuloVerDatosPopup}>Compañía</div>
                                    <span style={stMostrarDatosVehiculo.Vehiculo.Compania ? ResumenFormulario : SpAmarillo}>{stMostrarDatosVehiculo.Vehiculo.Compania || "-Sin dato-"}</span>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus variant='contained' onClick={CerrarMostrarDatosVehiculo}>
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