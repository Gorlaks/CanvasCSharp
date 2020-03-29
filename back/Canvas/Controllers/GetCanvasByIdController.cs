using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to get a canvas by id.
    /// </summary>
    public class GetCanvasByIdController : Controller
    {
        [HttpPost]
        public string Post(CanvasByIdData data)
        {
            string answer = modules.canvasRepository.GetCanvasById(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about canvas.
    /// </summary>
    public class CanvasByIdData
    {
        public string ownerId { get; set; }
        public string canvasId { get; set; }
    }
}
