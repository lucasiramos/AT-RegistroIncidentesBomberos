// @ts-nocheck

import * as React from 'react'

import { useEffect } from 'react'
import { useDispatch } from "react-redux"

import { CambiarPaginaActual } from '../../EstadosRedux/paginaActual'
import { CambiarIdEditando } from '../../EstadosRedux/idEditandoSlice'

import { ContextSharePoint } from '../../../../RegistroIncidentesBomberos'

import { ObtenerDatos } from '../../EstructuraApp/Servicio'

import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { Backdrop, CircularProgress, IconButton, Skeleton, Stack, Button } from '@mui/material'
import { Search, AddCircle } from '@mui/icons-material'

import { ContenedorMensaje, TituloMensaje } from '../../EstructuraApp/EstilosGlobales'

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

    console.log(stVehiculos)

    // ---------------------------------------------------------------------------------------------
    // Inicializar formulario

    useEffect(() =>{
        BuscarVehiculos(Context)
    }, [])

    const BuscarVehiculos:() => Promise<void> = async(Context) =>{
        let dataVehiculos = await ObtenerDatos("VehiculosBomberos", `$select=Id, Patente, Marca/Id, Marca/Title, Modelo/Id, Modelo/Title, TipoVehiculo/Title, CuerpoBomberos/Title, Compania&$expand=Marca, Modelo, TipoVehiculo, CuerpoBomberos&$orderby=Patente, Title`, Context)

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

    // ---------------------------------------------------------------------------------------------
    // Render

    const accionesBodyTemplate = (siniestro) => {
        return <>
            <IconButton aria-label="Ver más" onClick={ () => {alert("Muestro vehículo")} }>
                <Search />
            </IconButton>
        </>
    }

    const Estilos = {
        Skeleton: {
            width: "100%"
        }
    }

    return (
        <>
            <Button variant="contained" startIcon={<AddCircle />} sx={{textTransform: "none", marginBottom: "20px"}} size="large" onClick={() => ClickNuevoVehiculo()}>
                Cargar nuevo vehículo
            </Button>

            {
                stVehiculos.length > 0 ? 
                    <>
                        <PrimeReactProvider>
                            <DataTable value={stVehiculos} size="small" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]} tableStyle={{ minWidth: '50rem' }} sortMode="multiple">
                                <Column header="Acciones" body={accionesBodyTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                                <Column header="Patente" field="Patente" sortable></Column>
                                <Column header="Marca" field="Marca.Title" sortable></Column>
                                <Column header="Modelo" field="Modelo.Title" sortable></Column>
                                <Column header="Tipo vehículo" field="TipoVehiculo.Title" sortable></Column>
                                <Column header="Cuerpo Bomberos" field="CuerpoBomberos.Title" sortable></Column>
                                <Column header="Compañía" field="Compania" sortable></Column>
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
        </>
    )
}