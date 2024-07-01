using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using static APISiniestrosBomberos.Controllers.EstadosController;

namespace APISiniestrosBomberos
{
    public class Servicio
    {
        //public SqlDataReader ObtenerDatos(string pProcedimientoAlmacenado)
        //{
        //    string cnAmbiente = DevolverConnectionString();

        //    string CnBomberos = ConfigurationManager.ConnectionStrings[cnAmbiente].ConnectionString;

        //    SqlConnection sqlCon = null;
        //    SqlDataReader rdr = null;

        //    using (sqlCon = new SqlConnection(CnBomberos))
        //    {
        //        sqlCon.Open();
        //        SqlCommand sql_cmnd = new SqlCommand($"Bomberos_{DevolverPrefijoProcedimientoAlmacenado()}{pProcedimientoAlmacenado}", sqlCon);
        //        sql_cmnd.CommandType = CommandType.StoredProcedure;

        //        rdr = sql_cmnd.ExecuteReader();

        //        sqlCon.Close();
        //    }

        //    return rdr;
        //}

        public string DevolverConnectionString()
        {
            string Devuelvo = "";

            string ValorAmbiente = ConfigurationManager.AppSettings["Ambiente"];

            switch (ValorAmbiente)
            {
                case "Desa":
                    Devuelvo = "CnBomberosDesa";

                    break;
                case "Demo":
                case "Prod":
                    Devuelvo = "CnBomberosAzure";

                    break;
            }

            return Devuelvo;
        }

        public string DevolverPrefijoSP()
        {
            string Devuelvo = "";

            string ValorAmbiente = ConfigurationManager.AppSettings["Ambiente"];

            switch (ValorAmbiente)
            {
                case "Desa":
                    Devuelvo = "Desa_";

                    break;
                case "Demo":
                    Devuelvo = "Demo_";

                    break;
                case "Prod":
                    Devuelvo = "";

                    break;
            }

            return Devuelvo;
        }
    }
}