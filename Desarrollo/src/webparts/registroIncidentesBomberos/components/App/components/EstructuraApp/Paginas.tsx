// @ts-nocheck

import * as React from 'react'

import { useSelector } from "react-redux"

import { BomberosMisCasosCerrados } from '../Paginas/Bomberos/BomberosMisCasosCerrados'
import { BomberosMisSiniestrosEnCurso } from '../Paginas/Bomberos/BomberosMisSiniestrosEnCurso'
import { FormularioNuevoSiniestro } from '../Paginas/FormularioNuevoSiniestro'
import { BomberosAdmin_CargaVehiculos } from '../Paginas/BomberosAdmin/BomberosAdmin_CargaVehiculos'
import { BomberosAdmin_CargaVehiculos_Formulario } from '../Paginas/BomberosAdmin/BomberosAdmin_CargaVehiculos_Formulario'

import { BotonRegistrarNuevoIncidente } from './BotonRegistrarNuevoIncidente'
import { TituloPagina } from './TituloPagina'

import styled from 'styled-components'

const StyledContenedorPagina = styled.div`
    background: white;
    margin: 25px;
    padding: 25px;
    border-radius: 20px;
`

export const Paginas: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxPaginaActual = useSelector((state:any) => state.PaginaActual.pagina)
    const rdxMiUsuario = useSelector((state:any) => state.MiUsuario)

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Funciones

    const BuscarPagina = () => {
        switch (rdxPaginaActual) {
            case "Mis siniestros en curso":
                return <>
                        <BotonRegistrarNuevoIncidente/>
                        <TituloPagina/>
                        <BomberosMisSiniestrosEnCurso/>
                    </>
        
            case "Mis siniestros cerrados":
                return <>
                    <BotonRegistrarNuevoIncidente/>
                    <TituloPagina/>
                    <BomberosMisCasosCerrados/>
                </>

            case "Informar nuevo siniestro":
                return <>
                    <TituloPagina/>
                    <FormularioNuevoSiniestro/>
                </>

            case "Carga de Vehículos":
                return <>
                    <TituloPagina/>
                    <BomberosAdmin_CargaVehiculos/>
                </>

            case "Carga de nuevo vehículo":
            case "Modificar información de vehículo":
                return <>
                    <TituloPagina/>
                    <BomberosAdmin_CargaVehiculos_Formulario/>
                </>
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

    return (
        <StyledContenedorPagina>
            {BuscarPagina()}
        </StyledContenedorPagina>
    )
}