using APIBomberos.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using static APIBomberos.Controllers.UsuariosController;
using System.Text;
using System.Web.Http.Cors;

namespace APIBomberos.Controllers
{
    public class UsuariosController : ApiController
    {
        private Servicio servicio;
        private string CnBomberos;

        public UsuariosController()
        {
            Servicio servicio = new Servicio();
            this.servicio = servicio;

            string CnBomberos = ConfigurationManager.ConnectionStrings[servicio.DevolverConnectionString()].ConnectionString;
            this.CnBomberos = CnBomberos;
        }

        // GET: Usuarios
        public HttpResponseMessage GetTodosLosUsuarios()
        {
            Usuario usuario = new Usuario();

            usuario.Apellido = "Sin parametro";

            return Request.CreateResponse(HttpStatusCode.OK, usuario);
        }

        // GET: Usuario por id
        [EnableCors(origins: "http://www.contoso.com,https://andestoolcorp2023.sharepoint.com", headers: "*", methods: "*")]
        public HttpResponseMessage GetUsuarioPorEmail(string id)
        {
            SqlConnection sqlCon = null;
            SqlDataReader rdr = null;

            string EmailParametro = servicio.FromBase64(id);

            Usuario UsuarioDevuelvo = new Usuario();

            using (sqlCon = new SqlConnection(CnBomberos))
            {
                sqlCon.Open();
                SqlCommand sql_cmnd = new SqlCommand($"{servicio.DevolverPrefijoSP()}UsuariosObtenerPorEmail", sqlCon);
                sql_cmnd.CommandType = CommandType.StoredProcedure;
                sql_cmnd.Parameters.Add("@Email", SqlDbType.NVarChar).Value = EmailParametro;

                rdr = sql_cmnd.ExecuteReader();

                while (rdr.Read())
                {
                    UsuarioDevuelvo.UsuariosId = Int32.Parse(rdr["UsuariosId"].ToString());
                    UsuarioDevuelvo.Nombre = rdr["Nombre"].ToString();
                    UsuarioDevuelvo.Apellido = rdr["Apellido"].ToString();
                    UsuarioDevuelvo.Email = rdr["Email"].ToString();
                    UsuarioDevuelvo.Telefono = rdr["Telefono"].ToString();
                    UsuarioDevuelvo.RolId = Int32.Parse(rdr["RolId"].ToString());
                    UsuarioDevuelvo.Habilitado = Boolean.Parse(rdr["Habilitado"].ToString());
                }

                sqlCon.Close();
            }

            return Request.CreateResponse(HttpStatusCode.OK, UsuarioDevuelvo);
        }
    }
}