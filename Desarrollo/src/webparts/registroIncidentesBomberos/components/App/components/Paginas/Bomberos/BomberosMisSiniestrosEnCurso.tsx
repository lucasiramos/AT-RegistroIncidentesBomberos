// @ts-nocheck

import * as React from 'react'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import VerSiniestro from '../VerSiniestro'

import { DataMisSiniestrosEnCurso } from '../../EstructuraApp/DatosPrueba/Datos'

import 'primeicons/primeicons.css'
import { App } from './App/App'
import { PrimeReactProvider } from 'primereact/api'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'

import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

import { SpVerde, SpRojo } from '../../EstructuraApp/EstilosGlobales'

export const BomberosMisSiniestrosEnCurso: React.FunctionComponent<{}> = ({children}: any) => {
    // --------------------------------------------------------------------------------------------------
    // useStates

    const [stVerSiniestro, setVerSiniestro] = React.useState({
        Abierto: false,
        Titulo: "",
        Datos: {},
        Accion: () => {}
    })

    // --------------------------------------------------------------------------------------------------
    // Funciones varias

    const ClickVerSiniestro = (pSiniestro) => {
        console.log(pSiniestro)

        setVerSiniestro({
            Abierto: true,
            Titulo: `${pSiniestro.Vehiculo} ${pSiniestro.FechaSiniestro} - ${pSiniestro.Conductor}`,
            Datos: pSiniestro.Detalle,
            Accion: () => {}
        })
    }

    const CerrarVerSiniestro = () => {
        setVerSiniestro({
            ...stVerSiniestro,
            Abierto: false
        })
    }

    // --------------------------------------------------------------------------------------------------
    // Body Templates

    const accionesBodyTemplate = (siniestro) => {
        return <>
            <IconButton aria-label="Ver más" onClick={ () => ClickVerSiniestro(siniestro) }>
                <Search />
            </IconButton>
        </>
    }

    const DaniosTercerosTemplate = (siniestro) => {
        return <>
            <span style={siniestro.DaniosTerceros ? SpRojo : SpVerde}>{siniestro.DaniosTerceros ? "Sí":  "No"}</span>
        </>
    }

    return (
        <>
            <PrimeReactProvider>
                <DataTable value={DataMisSiniestrosEnCurso} size="small" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column header="Acciones" body={accionesBodyTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    <Column header="Fecha siniestro" field="FechaSiniestro"></Column>
                    <Column header="Conductor" field="Conductor"></Column>
                    <Column header="Vehículo" field="Vehiculo"></Column>
                    <Column header="Tipo siniestro" field="TipoSiniestro"></Column>
                    <Column header="Daños a terceros" body={DaniosTercerosTemplate} bodyStyle={{ textAlign: 'center' }}></Column>
                    <Column header="Estado" field="Estado"></Column>
                </DataTable>
            </PrimeReactProvider>

            {
                stVerSiniestro.Abierto &&
                    <VerSiniestro 
                        children={{ stVerSiniestro, CerrarVerSiniestro }}
                    />
            }
        </>
    )
}