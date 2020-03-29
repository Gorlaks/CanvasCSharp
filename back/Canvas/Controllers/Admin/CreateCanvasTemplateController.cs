using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers.Admin
{
    [ApiController]
    [Route("admin/[controller]")]

    /// <summary>
    ///     The controller to create a new canvas template in database.
    /// </summary>
    public class CreateCanvasTemplateController : Controller
    {
        [HttpPost]
        public string Post(CreateCanvasTemplateModel data)
        {
            string answer = modules.canvasTemplateService.CreateCanvasTemplate(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about new canvas template.
    /// </summary>
    public class CreateCanvasTemplateModel
    {
        public string type { get; set; }
        public int rows { get; set; }
        public int columns { get; set; }
        public List<Models.CanvasItemInData> data { get; set; }
    }
}
