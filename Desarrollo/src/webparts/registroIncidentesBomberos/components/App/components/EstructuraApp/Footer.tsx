// @ts-nocheck

import * as React from 'react';

import styled from 'styled-components';

import { Icon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const StyledFooter = styled.div`
    padding: 20px;
    background: #141D26;
    display: flex;
    justify-content: space-around;
    height: 150px;
    box-sizing: border-box;
`;

const ImgLogo = styled.img`
    max-width: 170px;
`

const StyledTexto = styled.p`
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 15px;
    color: white;
`;

const StyledSubtitulo = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Segoe UI Semibold';
    font-size: 18px;
    color: white;
`;

const StyledSeparador = styled.div`
    height: 10px;
    width: 50px;
    border-bottom: 2px solid #00a2fc;
`;

export const Footer: React.FunctionComponent<{}> = () => {
    return (
        <>
            <StyledFooter>
                <div>
                    <ImgLogo src={require(`../../img/LogoHorizontal.png`)} alt="Logo AT" />
                    <StyledTexto>Málaga 85 Oficina 208, Las Condes</StyledTexto>
                    <div className="LinkedIn-container">
                        <a href="https://www.linkedin.com/company/andes-tool/" target='_blank'>
                            <LinkedInIcon sx={{ fontSize: 30 }} />
                        </a>
                    </div>
                </div>
                <div>
                    <StyledSubtitulo>
                        WhatsApp
                    </StyledSubtitulo>
                    <StyledSeparador/>
                    <StyledTexto>
                        <a className='lnkAT' href="https://wa.me/56994321714" target='_blank'>
                            Chile: +56 9 9432-1714
                        </a>
                    </StyledTexto>
                </div>
                <div>
                    <StyledSubtitulo>
                        Contacto
                    </StyledSubtitulo>
                    <StyledSeparador/>
                    <StyledTexto>
                        <a className='lnkAT' href="https://andestool.com/contacto/" target='_blank'>
                            Para enviar un correo haz click aquí
                        </a>
                    </StyledTexto>
                </div>
            </StyledFooter>
        </>
    )
}