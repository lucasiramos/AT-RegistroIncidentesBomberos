// @ts-nocheck

import * as React from 'react'
import { useState, useEffect } from 'react'

import { Provider } from 'react-redux'
import { store } from './components/EstadosRedux/store'

import { ContextSharePoint } from '../RegistroIncidentesBomberos'

import { Cuerpo } from './components/EstructuraApp/Cuerpo'
import { Footer } from './components/EstructuraApp/Footer'

import { spfi, SPFx } from "@pnp/sp"
import { Caching } from "@pnp/queryable"
import "@pnp/sp/batching"

import styled from 'styled-components'

const StyledContenedorApp = styled.div`
    height: 100vh
`

export const App: React.FunctionComponent<{}> = () => {
    const [stUrlConEmbedded, setUrlConEmbedded] = useState(false)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    console.log("-----------")
    console.log(stUrlConEmbedded)
    console.log("-----------")

    useEffect(() =>{
        InicializarFormulario(Context, setUrlConEmbedded, stUrlConEmbedded)
    }, [])

    return (
        <>
            {
                stUrlConEmbedded && 
                    <>
                        <Provider store={store}>
                            <StyledContenedorApp>
                                <Cuerpo/>
                                <Footer/>
                            </StyledContenedorApp>
                        </Provider>
                    </>
            }
        </>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////

const InicializarFormulario:() => Promise<void> = async(Context, setUrlConEmbedded, stUrlConEmbedded) =>{
    // setUrlConEmbedded(true)

    // ------------------------------------------------------------------------------------------------

    const sp = spfi().using(SPFx(Context));

    if(ValorParametro("env") == "Embedded"){
        setUrlConEmbedded(true)

        //--------------------------------------------------------------------
        // Quito la barra superior

        const [batchedSP, execute] = sp.batched();
        batchedSP.using(Caching());

        var suiteBar = document.getElementById("SuiteNavWrapper");
        suiteBar.setAttribute("style", "display: none !important");

        document.getElementById("SuiteNavWrapper").style.display = "none";
        document.getElementsByClassName("root-101")[0].style.display = "none"

        //--------------------------------------------------------------------
        // Limpio la url

        window.history.replaceState({}, document.title, Context.pageContext.web.absoluteUrl + "/SitePages/Siniestros-bomberos.aspx")
    }else{
        // No tiene el parámetro de Embedded, lo redirijo a ese parámetro para quitar los elementos sobrantes

        window.location.replace(Context.pageContext.web.absoluteUrl + "/SitePages/Siniestros-bomberos.aspx?env=Embedded");
    }

    console.log("v17/06/24 15:10")
}

function ValorParametro(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}