import * as React from 'react'

import styled from 'styled-components';

import { MenuLateral } from './MenuLateral'
import { TituloPrincipal } from './TituloPrincipal';
import { Paginas } from './Paginas';

const StyledMarcoGrisContenedor = styled.div`
    padding: 20px 40px 0px 40px;
    background: #D3D3D3;
`

const StyledCuerpo = styled.div`
    display: flex;
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

const StyledContenidoDinamico = styled.div`
    padding: 40px;
    background-color: #F6F6F6;
    flex: 1;
    border-top-right-radius: 20px;
`

export const Cuerpo: React.FunctionComponent<{}> = () => {
    return (
        <StyledMarcoGrisContenedor>
            <StyledCuerpo>
                <MenuLateral/>
                <StyledContenidoDinamico>
                    <TituloPrincipal/>
                    <Paginas/>
                </StyledContenidoDinamico>
            </StyledCuerpo>
        </StyledMarcoGrisContenedor>
    )
}