// @ts-nocheck

import * as React from 'react';

import styled from 'styled-components'

export const TituloPrincipal: React.FunctionComponent<{}> = ({children}: any) => {
    return (
        <StyledTitulo>
            Registro de Siniestros de Bomberos
        </StyledTitulo>
    )
}

const StyledTitulo = styled.p`
    color: #333;
    font-family: "Segoe UI Light", Arial;
    font-size: 30px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 40px
`