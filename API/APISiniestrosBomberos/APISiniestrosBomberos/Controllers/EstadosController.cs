﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Http.Cors;
using System.Net;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace APISiniestrosBomberos.Controllers
{
    public class EstadosController : ApiController
    {
        // GET: Estados
        [EnableCors(origins: "http://www.contoso.com,https://andestoolcorp2023.sharepoint.com", headers: "*", methods: "*")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        public HttpResponseMessage Get()
        {
            Estados[] ArrEstados = new Estados[] { };
            Estados Devuelvo;

            string CnBomberos = ConfigurationManager.ConnectionStrings["CnBomberos"].ConnectionString;

            SqlConnection sqlCon = null;
            SqlDataReader rdr = null;

            using (sqlCon = new SqlConnection(CnBomberos))
            {
                sqlCon.Open();
                SqlCommand sql_cmnd = new SqlCommand("EstadosListar", sqlCon);
                sql_cmnd.CommandType = CommandType.StoredProcedure;

                rdr = sql_cmnd.ExecuteReader();

                while (rdr.Read())
                {
                    Devuelvo = new Estados();

                    Devuelvo.Id = Int32.Parse(rdr["EstadoId"].ToString());
                    Devuelvo.Nombre = rdr["Nombre"].ToString(); ;
                    Devuelvo.Orden = Int32.Parse(rdr["Orden"].ToString());

                    ArrEstados = ArrEstados.Concat(new Estados[] { Devuelvo }).ToArray();
                }

                sqlCon.Close();
            }


            return Request.CreateResponse(HttpStatusCode.OK, ArrEstados);
        }

        public class Estados
        {
            public int Id { get; set; }
            public string Nombre { get; set; }
            public int Orden { get; set; }
        }
    }


}