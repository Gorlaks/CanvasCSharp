using Microsoft.AspNetCore.Mvc;

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
            string answer = Initialize.Modules.canvasRepository.GetUserCanvasList(data);
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
