using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to delete the canvas from database.
    /// </summary>
    public class DeleteCanvasController : Controller
    {
        [HttpPost]
        public string Post(DeleteCanvasData data)
        {
            string answer = modules.canvasService.DeleteCanvas(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about canvas.
    /// </summary>
    public class DeleteCanvasData
    {
        public string ownerId { get; set; }
        public string canvasId { get; set; }
    }
}
