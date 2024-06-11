import * as React from 'react'

import styled from 'styled-components'

import { MenuLateral } from './MenuLateral'
import { TituloPrincipal } from './TituloPrincipal'
import { Paginas } from './Paginas'

const StyledContenedorCuerpo = styled.div`
    height: calc(- 150px + 100vh );
`

const StyledMarcoGrisContenedor = styled.div`
    padding: 20px;
    background: rgb(38,48,61);
    background: linear-gradient(180deg, rgba(38,48,61,1) 0%, rgba(27,40,54,1) 100%);
    min-height: calc(-150px + 100vh);
`

const StyledCuerpo = styled.div`
    display: flex;
    background: white;
    border-radius: 20px;
    min-height: calc(-190px + 100vh);
`

const StyledContenidoDinamico = styled.div`
    padding: 20px 25px;
    background-color: #F6F6F6;
    flex: 1 1 0%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const Cuerpo: React.FunctionComponent<{}> = () => {
    return (
        <StyledContenedorCuerpo>
            <StyledMarcoGrisContenedor>
                <StyledCuerpo>
                    <MenuLateral/>
                    <StyledContenidoDinamico>
                        <TituloPrincipal/>
                        <Paginas/>
                    </StyledContenidoDinamico>
                </StyledCuerpo>
            </StyledMarcoGrisContenedor>
        </StyledContenedorCuerpo>
    )
}