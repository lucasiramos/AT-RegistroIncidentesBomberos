// @ts-nocheck

import * as React from 'react';

import styled from 'styled-components'

import ImgHeader from '../../img/Header.jpg'

export const TituloPrincipal: React.FunctionComponent<{}> = ({children}: any) => {
    return (
        <StyledTitulo>
            <ImgLogo src={require(`../../img/LogoBomberos.png`)} alt="Logo AT" />
            <StyledTextoTitulo>
                Registro de Siniestros de Bomberos
            </StyledTextoTitulo>
        </StyledTitulo>
    )
}

const StyledTitulo = styled.div`
    height: 105px;
    margin-bottom: 20px;
    display: flex;
    background-image: url(${ImgHeader});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px;
    background-position: 50% 50%;
    border-top-right-radius: 20px;
`

const ImgLogo = styled.img`
    max-height: 100px;
`

const StyledTextoTitulo = styled.div`
    color: #333;
    font-family: "Segoe UI Light", Arial;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
`