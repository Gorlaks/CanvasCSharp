using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers.Admin
{
    [ApiController]
    [Route("admin/[controller]")]

    /// <summary>
    ///     The controller to delete a canvas template from database.
    /// </summary>
    public class DeleteCanvasTemplateController : Controller
    {
        [HttpPost]
        public string Post(DeleteCanvasTemplateModel data)
        {
            string answer = modules.canvasTemplateService.DeleteCanvasTemplate(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about new canvas template.
    /// </summary>
    public class DeleteCanvasTemplateModel
    {
        public string ownerId { get; set; }
        public string canvasId { get; set; }
    }
}
