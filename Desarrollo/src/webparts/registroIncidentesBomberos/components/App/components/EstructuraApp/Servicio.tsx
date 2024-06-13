// @ts-nocheck

import { SPHttpClient } from '@microsoft/sp-http'

import "@pnp/sp/sites"

export function ObtenerDatos(pLista, pParametros, pContexto, pSitio = ""){
    var pObtenerDatos = new Promise(async (resolve, reject) => {
        let ResultadosFinales = []

        console.log(pContexto.pageContext.web)

        if(!pSitio){
            pSitio = pContexto.pageContext.web.title
        }

        const vSitio = `${window.location.protocol}//${window.location.host}/sites/${pSitio}`

        function RealizarQuery(pConsulta){
            pContexto.spHttpClient.get(pConsulta, SPHttpClient.configurations.v1)
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    let dataResultadoQuery = json.value

                    ResultadosFinales = [...ResultadosFinales, ...dataResultadoQuery]

                    if(json["@odata.nextLink"]){
                        RealizarQuery(json["@odata.nextLink"])
                    }else{
                        resolve(ResultadosFinales)
                    }                    
                })
        }

        if(pParametros.indexOf("$top") == -1){
            pParametros += "&$top=5000"
        }

        const urlPrimeraConsulta:string = `${vSitio}/_api/web/lists/getbytitle('${pLista}')/items/?${pParametros}`
        RealizarQuery(urlPrimeraConsulta)
    })

    return pObtenerDatos
}

export function AgregarDatos(pLista, pDatos, pContexto){
    var pAgregarDatos = new Promise(async (resolve, reject) => {
        pContexto.spHttpClient.post(`${pContexto.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${pLista}')/items`, SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': ''
            },
            body: JSON.stringify(pDatos)
        }).then((response: SPHttpClientResponse) => {
            if (response.ok) {
                response.json().then((responseJSON) => {
                    resolve({
                        Resultado: "OK",
                        Id: responseJSON.ID
                    })
                })
            }else{
                response.json().then((responseJSON) => {
                    resolve({
                        Resultado: "ERROR",
                        Error: responseJSON
                    })
                })
            }
        }).catch(error => {
            resolve({
                Resultado: "ERROR",
                Error: error
            })
        })
    })

    return pAgregarDatos
}

export function ModificarDatos(pLista, pId, pDatos, pContexto){
    var pModificarDatos = new Promise(async (resolve, reject) => {
        pContexto.spHttpClient.post(`${pContexto.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${pLista}')/items(${pId})`, SPHttpClient.configurations.v1, {
            headers: {
                'Accept': 'application/json;odata=nometadata',
                'Content-type': 'application/json;odata=nometadata',
                'odata-version': '',
                'IF-MATCH': '*',
                'X-HTTP-Method': 'MERGE'
              },
            body: JSON.stringify(pDatos)
        }).then((response: SPHttpClientResponse) => {
            if(response.ok) {
                resolve({
                    Resultado: "OK"
                })
            }else{
                response.json().then((responseJSON) => {
                    resolve({
                        Resultado: "ERROR",
                        Error: responseJSON
                    })
                });
            }
        }).catch(error => {
            resolve({
                Resultado: "ERROR",
                Error: error
            })
        })
    })

    return pModificarDatos
}

export function BorrarDatos(pLista, pId, pContexto){
    var pBorrarDatos = new Promise(async (resolve, reject) => {
        pContexto.spHttpClient.post(`${pContexto.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${pLista}')/items(${pId})`,
        SPHttpClient.configurations.v1,
            {
                headers: {
                    'Accept': 'application/json;odata=nometadata',
                    'Content-type': 'application/json;odata=verbose',
                    'odata-version': '',
                    'IF-MATCH': '*',
                    'X-HTTP-Method': 'DELETE'
                }
            })
            .then((response: SPHttpClientResponse) => {
                if (response.ok) {
                    resolve({
                        Resultado: "OK"
                    })
                }
                else {
                    resolve({
                        Resultado: "ERROR",
                        Error: responseJSON
                    })
                }
            });
    })
    
    return pBorrarDatos
}

export const CalcularDigitoVerificador = (pValor) => {
    let M=0,S=1,T=pValor
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
  
    return S?S-1:'K'
}