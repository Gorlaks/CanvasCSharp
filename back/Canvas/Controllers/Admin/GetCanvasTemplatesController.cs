using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers.Admin
{
    [ApiController]
    [Route("admin/[controller]")]

    /// <summary>
    ///     The controller to get all canvas templates from database.
    /// </summary>
    public class GetCanvasTemplatesController : Controller
    {
        [HttpPost]
        public string Post(GetCanvasTemplatesModel data)
        {
            string answer = modules.canvasTemplateRepository.GetCanvasTemplates(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for needed data to get canvas templates.
    /// </summary>
    public class GetCanvasTemplatesModel
    {
        public string id { get; set; }
    }
}
