using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UpdateCanvasController : Controller
    {
        [HttpPost]
        public string Post(SaveCanvasData data)
        {
            string answer = Initialize.Modules.canvasService.UpdateCanvas(data);
            return answer;
        }
    }

    public class SaveCanvasData
    {
        public string canvasId { get; set; }
        public string ownerId { get; set; }
        public string title { get; set; }
        public List<Models.CanvasItemInData> data { get; set; }
        
    }
}