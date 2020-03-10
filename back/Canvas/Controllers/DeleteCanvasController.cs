using System;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using MongoDB;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeleteCanvasController : Controller
    {
        [HttpPost]
        public string Post(DelteCanvasData data)
        {
            string answer = Initialize.Modules.canvasService.DleteCanvas(data.userId, data.canvasId);
            return answer;
        }
    }

    public class DelteCanvasData
    {
        public string userId { get; set; }
        public string canvasId { get; set; }
    }
}
