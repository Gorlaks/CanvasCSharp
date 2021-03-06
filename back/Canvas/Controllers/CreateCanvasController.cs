﻿using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to create a new canvas in database.
    /// </summary>
    public class CreateCanvasController : Controller
    {
        [HttpPost]
        public string Post(CreateCanvasData data)
        {
            string answer = modules.canvasService.CreateCanvas(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about new canvas.
    /// </summary>
    public class CreateCanvasData
    {
        public string ownerId { get; set; }
        public string title { get; set; }
        public string type { get; set; }
    }
}
