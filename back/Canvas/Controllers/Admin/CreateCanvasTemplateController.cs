using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

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
        public void Post(CreateCanvasTemplateModel data)
        {

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
