using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to get canvas list of the requested user.
    /// </summary>
    public class UserCanvasListController : Controller
    {
        [HttpPost]
        public string Post(UserData data)
        {
            string answer = modules.canvasRepository.GetUserCanvasList(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about user.
    /// </summary>
    public class UserData
    {
        public string ownerId { get; set; }
    }
}
