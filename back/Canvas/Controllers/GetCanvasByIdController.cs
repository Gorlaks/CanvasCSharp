using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetCanvasByIdController : Controller
    {
        [HttpPost]
        public string Post(CanvasByIdData data)
        {
            string answer = Initialize.Modules.canvasRepository.GetCanvasById(data);
            return answer;
        }
    }

    public class CanvasByIdData
    {
        public string ownerId { get; set; }
        public string canvasId { get; set; }
    }
}
