// @ts-nocheck

import * as React from 'react'

import { useSelector } from "react-redux"

import { BomberosMisCasosCerrados } from '../Paginas/Bomberos/BomberosMisCasosCerrados'
import { BomberosMisCasosEnCurso } from '../Paginas/Bomberos/BomberosMisCasosEnCurso'

import { BotonRegistrarNuevoIncidente } from './BotonRegistrarNuevoIncidente'
import { TituloPagina } from './TituloPagina'

import styled from 'styled-components'

export const Paginas: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxPaginaActual = useSelector((state:any) => state.PaginaActual.pagina)
    const rdxMiUsuario = useSelector((state:any) => state.MiUsuario)

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Funciones

    const BuscarPagina = () => {
        switch (rdxPaginaActual) {
            case "Mis casos en curso":
                return <>
                        <BotonRegistrarNuevoIncidente/>
                        <TituloPagina/>
                        <BomberosMisCasosEnCurso/>
                    </>
        
            case "Mis casos cerrados":
                return <>
                    <TituloPagina/>
                    <BomberosMisCasosCerrados/>
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

const StyledContenedorPagina = styled.div`
    background: white;
    padding: 30px;
    border-radius: 20px;
`