using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;

namespace APIBomberos
{
    public class Servicio
    {
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

        public string FromBase64(string value)
        {
            byte[] bytes = Convert.FromBase64String(value);
            return Encoding.UTF8.GetString(bytes);
        }
    }
}