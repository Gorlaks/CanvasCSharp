using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to update the requested canvas in database.
    /// </summary>
    public class UpdateCanvasController : Controller
    {
        [HttpPost]
        public string Post(SaveCanvasData data)
        {
            string answer = Initialize.Modules.canvasService.UpdateCanvas(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about canvas.
    /// </summary>
    public class SaveCanvasData
    {
        public string canvasId { get; set; }
        public string ownerId { get; set; }
        public string title { get; set; }
        public List<Models.CanvasItemInData> data { get; set; }
        
    }
}