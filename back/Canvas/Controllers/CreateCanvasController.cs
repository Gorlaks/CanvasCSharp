﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CreateCanvasController : Controller
    {
        [HttpPost]
        public string Post(CreateCanvasData data)
        {
            string answer = Initialize.Modules.canvasService.CreateCanvas(data);
            return answer;
        }
    }

    public class CreateCanvasData
    {
        public string ownerId { get; set; }
        public string title { get; set; }
        public string type { get; set; }
    }
}
