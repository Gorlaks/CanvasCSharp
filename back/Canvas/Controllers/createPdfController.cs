using Microsoft.AspNetCore.Mvc;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CreatePdfController : Controller
    {
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}
