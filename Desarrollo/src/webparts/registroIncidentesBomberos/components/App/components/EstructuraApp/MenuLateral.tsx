// @ts-nocheck

import * as React from 'react';

import { useDispatch, useSelector } from "react-redux"

import { CambiarPaginaActual } from '../EstadosRedux/paginaActual'

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
                <OpcionMenu opcionElegida={rdxPaginaActual == "Mis siniestros en curso"} onClick={() => ClickMenuLateral("Mis siniestros en curso")}>
                    <CarCrashRoundedIcon /> 
                    <TextoBoton>Mis siniestros en curso</TextoBoton>
                </OpcionMenu>
                <OpcionMenu opcionElegida={rdxPaginaActual == "Mis siniestros cerrados"} onClick={() => ClickMenuLateral("Mis siniestros cerrados")}>
                    <NoCrashRoundedIcon /> 
                    <TextoBoton>Mis siniestros cerrados</TextoBoton>
                </OpcionMenu>
            </StackOpcionesMenu>
        </StyledMenuLateral>
    )
}

const StyledMenuLateral = styled.div`
    color: black;
    padding: 20px 25px;
    font-family: "Segoe UI Semibold";
    font-size: 10px;
    flex: 0 0 280px;
`

const ContenedorLogoAT = styled.div`
    padding: 0px 20px;
    text-align: center;
    margin-bottom: 20px;
`

const ImgLogo = styled.img`
    max-height: 75px;
`

const StackOpcionesMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const OpcionMenu = styled.div`
    color: #333;
    padding: 10px 15px;
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
    font-size: 15px;
`