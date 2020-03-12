using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserCanvasListController : Controller
    {
        [HttpPost]
        public string Post(UserData data)
        {
            string answer = Initialize.Modules.canvasRepository.GetUserCanvasList(data);
            return answer;
        }
    }

    public class UserData
    {
        public string ownerId { get; set; }
    }
}
