using Microsoft.AspNetCore.Mvc;

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
            string answer = Initialize.Modules.canvasTemplateRepository.GetCanvasTemplates(data);
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
