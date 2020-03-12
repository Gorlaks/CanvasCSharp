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
            try
            {
                string ownerId = data.ownerId;
                string answer = "[";
                List<Models.Canvas> canvasList = Initialize.Modules.canvasService.UserCanvases(ownerId);
                int index = 0;
                int lastIndex = canvasList.Count - 1;
                foreach (var item in canvasList)
                {
                    answer += "{" +
                        $"\"id\": \"{item._id}\", " +
                        $"\"ownerId\": \"{item.ownerId}\", " +
                        $"\"title\": \"{item.title}\", " +
                        $"\"type\": \"{item.type}\", " +
                        $"\"date\": \"{item.date}\"" +
                    $"}}{(lastIndex != index ? ',' : ' ')}";
                    index++;
                }
                answer += "]";
                return answer;
            }
            catch(Exception e)
            {
                return $"{{\"error\": \"User don't have any canvases\"}}";
            }
        }
    }

    public class UserData
    {
        public string ownerId { get; set; }
    }
}
