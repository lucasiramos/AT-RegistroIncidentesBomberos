// @ts-nocheck

import * as React from 'react';

import { useDispatch, useSelector } from "react-redux"

import { CambiarPaginaActual } from '../EstadosRedux/paginaActual';

import styled, { css } from 'styled-components'

import CarCrashRoundedIcon from '@mui/icons-material/CarCrashRounded'
import NoCrashRoundedIcon from '@mui/icons-material/NoCrashRounded'

export const MenuLateral: React.FunctionComponent<{}> = ({children}: any) => {
    const dispatch = useDispatch()
    const rdxPaginaActual = useSelector((state:any) => state.PaginaActual.pagina)

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Funciones

    const ClickMenuLateral = (pPagina) => {
        dispatch(CambiarPaginaActual(pPagina))
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

    return (
        <StyledMenuLateral>
            <ContenedorLogoAT>
                <ImgLogo src={require(`../../img/Logo.png`)}  alt="Logo AT" />
            </ContenedorLogoAT>
            <StackOpcionesMenu>
                <OpcionMenu opcionElegida={rdxPaginaActual == "Mis casos en curso"} onClick={() => ClickMenuLateral("Mis casos en curso")}>
                    <CarCrashRoundedIcon /> 
                    <TextoBoton>Mis casos en curso</TextoBoton>
                </OpcionMenu>
                <OpcionMenu opcionElegida={rdxPaginaActual == "Mis casos cerrados"} onClick={() => ClickMenuLateral("Mis casos cerrados")}>
                    <NoCrashRoundedIcon /> 
                    <TextoBoton>Mis casos cerrados</TextoBoton>
                </OpcionMenu>
            </StackOpcionesMenu>
        </StyledMenuLateral>
    )
}

const StyledMenuLateral = styled.div`
    color: black;
    padding: 30px 25px;
    font-family: "Segoe UI Semibold";
    font-size: 10px;
    flex: 0 0 250px;
`

const ContenedorLogoAT = styled.div`
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
`

const ImgLogo = styled.img`
    max-width: 120px;
    max-height: 80px;
`

const StackOpcionesMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const OpcionMenu = styled.div`
    color: #333;
    padding: 15px 20px;
    border-radius: 10px;
    &:hover{
        background-color: #E5E5E5;
        cursor: pointer;
    }

    ${({ opcionElegida }) =>
        opcionElegida &&
        css`
            background-color: #E5E5E5;
    `}
`

const TextoBoton = styled.span`
    position: relative;
    top: -6px;
    margin-left: 10px;
    font-size: 17px;
`