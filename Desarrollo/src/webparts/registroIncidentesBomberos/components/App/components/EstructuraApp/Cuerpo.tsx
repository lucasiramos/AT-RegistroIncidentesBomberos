// @ts-nocheck

import * as React from 'react'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ContextSharePoint } from '../../../RegistroIncidentesBomberos'

import { CambiarUrlAPI } from '../EstadosRedux/configuracionSlice'
import { CambiarMiUsuario } from '../EstadosRedux/miUsuarioSlice'
import { CambiarSiniestro } from '../EstadosRedux/datosCargaSlice'

import { ObtenerDatosSharePoint, ObtenerDatos } from './Servicio'

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
    background-color: #F6F6F6;
    flex: 1 1 0%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const Cuerpo: React.FunctionComponent<{}> = () => {
    const rdxMiUsuario = useSelector((state:any) => state.MiUsuario)
    const rdxDatosCarga = useSelector((state:any) => state.DatosCarga)
    const rdxConfiguracion = useSelector((state:any) => state.Configuracion)

    console.log(rdxConfiguracion)
    console.log(rdxMiUsuario)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    const dispatch = useDispatch()

    // -------------------------------------------------------------------------------------------
    // Inicializar aplicación

    useEffect(() =>{
        InicializarAplicacion(dispatch)
    }, [])

    const InicializarAplicacion:() => Promise<void> = async(dispatch) =>{
        // ----------------------------------------------------------------
        // Buscar Url API
        
        let dataConfiguracion = await ObtenerDatosSharePoint("Configuracion", `$select=Id, UrlAPI`, Context)

        dispatch(CambiarUrlAPI(dataConfiguracion[0].UrlAPI))

        // ----------------------------------------------------------------
        // Buscar mi usuario
        // console.log("Mail mi usuario: " + Context.pageContext.user.email.toLowerCase())

        // console.log(`${dataConfiguracion[0].UrlAPI}usuarios/${btoa(Context.pageContext.user.email.toLowerCase())}`)

        const dataMiUsuario = await ObtenerDatos(`${dataConfiguracion[0].UrlAPI}usuarios/${btoa(Context.pageContext.user.email.toLowerCase())}`)

        dispatch(CambiarMiUsuario(dataMiUsuario))

        // ----------------------------------------------------------------
        // Intento verificar permisos del micrófono

        var vPuedeGrabar = false

        try{
            var PermisosMicrofono = await navigator.permissions.query({name: 'microphone'})

            // console.log("OK")
            // console.log(PermisosMicrofono)

            if(PermisosMicrofono?.state == "granted" || PermisosMicrofono?.state == "prompt"){
                vPuedeGrabar = true
            }
        }catch(err){
            console.log("ERROR")
            console.log(err)
        }

        dispatch(CambiarSiniestro({
            ...rdxDatosCarga.Siniestro,
            Grabacion: {
                ...rdxDatosCarga.Siniestro.Grabacion,
                PuedeGrabar: vPuedeGrabar,
                MicrofonoPrendido: null,
                Relato: null
            }
        }))
    }

    // -------------------------------------------------------------------------------------------
    // Render

    return (
        <StyledContenedorCuerpo>
            <StyledMarcoGrisContenedor>
                <StyledCuerpo>
                    <MenuLateral/>
                    <StyledContenidoDinamico>
                        <TituloPrincipal/>
                        {
                            <Paginas/>
                        }
                    </StyledContenidoDinamico>
                </StyledCuerpo>
            </StyledMarcoGrisContenedor>
        </StyledContenedorCuerpo>
    )
}

