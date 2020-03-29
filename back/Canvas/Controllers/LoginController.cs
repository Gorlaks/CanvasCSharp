using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to check user in database to login.
    /// </summary>
    public class LoginController : Controller
    {
        [HttpPost]
        public string Post(LoginData data)
        {
            string answer = modules.authRepository.Login(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about an user.
    /// </summary>
    public class LoginData
    {
        public string login { get; set; }
        public string password { get; set; }
    }
}
