using Microsoft.AspNetCore.Mvc;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        public string Post(LoginData data)
        {
            string answer = Initialize.Modules.authRepository.Login(data);
            return answer;
        }
    }

    public class LoginData
    {
        public string login { get; set; }
        public string password { get; set; }
    }
}
