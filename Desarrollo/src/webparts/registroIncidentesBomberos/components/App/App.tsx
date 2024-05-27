// @ts-nocheck

import * as React from 'react'
import { useState, useEffect } from 'react'

import { Provider } from 'react-redux'
import { store } from './components/EstadosRedux/store'

import { ContextSharePoint } from '../RegistroIncidentesBomberos'

import { Cuerpo } from './components/EstructuraApp/Cuerpo'

export const App: React.FunctionComponent<{}> = () => {
    const [stUrlConEmbedded, setUrlConEmbedded] = useState(false)

    const { Context }: any = React.useContext<any>(ContextSharePoint)

    useEffect(() =>{
        InicializarFormulario(Context, setUrlConEmbedded)
    }, [])

    return (
        <>
            {
                stUrlConEmbedded && 
                    <>
                        <Provider store={store}>
                            <Cuerpo/>
                        </Provider>
                    </>
            }
        </>
    )
}

/*
{
               stUrlConEmbedded && 
                    <>
                        <Provider store={store}>
                            <TimerCierreSesion/>
                            <Header/>
                            <Cuerpo/>
                        </Provider>
                        <Footer/>
                    </>
            }
*/

//////////////////////////////////////////////////////////////////////////////////////////

const InicializarFormulario:() => Promise<void> = async(Context, setUrlConEmbedded) =>{
    setUrlConEmbedded(true)

    // ------------------------------------------------------------------------------------------------

    // const sp = spfi().using(SPFx(Context));

    // if(ValorParametro("env") == "Embedded"){
    //     setUrlConEmbedded(true)

    //     //--------------------------------------------------------------------
    //     // Quito la barra superior

    //     const [batchedSP, execute] = sp.batched();
    //     batchedSP.using(Caching());

    //     var suiteBar = document.getElementById("SuiteNavWrapper");
    //     suiteBar.setAttribute("style", "display: none !important");

    //     document.getElementById("SuiteNavWrapper").style.display = "none";
    //     document.getElementsByClassName("root-101")[0].style.display = "none"

    //     //--------------------------------------------------------------------
    //     // Limpio la url

    //     window.history.replaceState({}, document.title, Context.pageContext.web.absoluteUrl + "/SitePages/Emision.aspx")
    // }else{
    //     // No tiene el parámetro de Embedded, lo redirijo a ese parámetro para quitar los elementos sobrantes

    //     window.location.replace(Context.pageContext.web.absoluteUrl + "/SitePages/Emision.aspx?env=Embedded");
    // }

    // console.log("v08/05/24 14:52")
}

function ValorParametro(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}