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
        public string Post(DeleteCanvasData data)
        {
            string answer = Initialize.Modules.canvasService.DeleteCanvas(data);
            return answer;
        }
    }

    public class DeleteCanvasData
    {
        public string ownerId { get; set; }
        public string canvasId { get; set; }
    }
}
