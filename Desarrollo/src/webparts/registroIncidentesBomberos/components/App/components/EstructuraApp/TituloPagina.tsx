// @ts-nocheck

import * as React from 'react'

import { useSelector } from "react-redux"

import styled from 'styled-components'

export const TituloPagina: React.FunctionComponent<{}> = ({children}: any) => {
    const rdxPaginaActual = useSelector((state:any) => state.PaginaActual.pagina)

    return (
        <StyledTitulo>
            {rdxPaginaActual}
        </StyledTitulo>
    )
}

const StyledTitulo = styled.p`
    color: #333;
    font-family: "Segoe UI Semibold"
    font-size: 25px;
    margin-top: 0;
    margin-bottom: 20px;
    line-height: 1;
`