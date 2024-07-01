using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APISiniestrosBomberos.Entidades
{
    public class Usuario
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public int RolId { get; set; }
        public bool Habilitado { get; set; }
    }
}