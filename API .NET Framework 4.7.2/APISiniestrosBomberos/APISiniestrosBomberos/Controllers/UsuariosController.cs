using APISiniestrosBomberos.Entidades;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace APISiniestrosBomberos.Controllers
{
    public class UsuariosController : ApiController
    {
        private Servicio servicio;

        public UsuariosController()
        {
            Servicio servicio = new Servicio();

            this.servicio = servicio;
        }

        // GET: Usuario por id
        public HttpResponseMessage GetTodosLosUsuarios()
        {

            Usuario MiUsuario = new Usuario();

            MiUsuario.Apellido = "Sin parametro";

            return Request.CreateResponse(HttpStatusCode.OK, MiUsuario);
        }

        // GET: Usuarios
        public HttpResponseMessage GetUsuarioPorId(int pIdUsuario)
        {
            Usuario MiUsuario = new Usuario();

            MiUsuario.Apellido = "Con parametro: " + pIdUsuario;

            return Request.CreateResponse(HttpStatusCode.OK, MiUsuario);
        }
    }
}