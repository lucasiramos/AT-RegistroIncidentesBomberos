// @ts-nocheck

import * as React from 'react'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { DataMisSiniestrosEnCurso } from '../../EstructuraApp/DatosPrueba/Datos'

import 'primeicons/primeicons.css';
import { App } from './App/App';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export const BomberosMisSiniestrosEnCurso: React.FunctionComponent<{}> = ({children}: any) => {
    return (
        <>
            <PrimeReactProvider>
                <DataTable value={DataMisSiniestrosEnCurso} size="small" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="FechaSiniestro" header="Fecha siniestro"></Column>
                    <Column field="Conductor" header="Conductor"></Column>
                    <Column field="Vehiculo" header="Vehículo"></Column>
                    <Column field="TipoSiniestro" header="Tipo siniestro"></Column>
                    <Column field="DaniosTerceros" header="Daños a terceros"></Column>
                    <Column field="Estado" header="Estado"></Column>
                </DataTable>
            </PrimeReactProvider>
        </>
    )
}