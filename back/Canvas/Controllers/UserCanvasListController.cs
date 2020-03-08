using System.Collections.Generic;
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
            string userId = data.userId;
            string answer = "[";
            try
            {
                List<Models.Canvas> canvasList = Initialize.Modules.canvasService.UserCanvases(userId);
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
            catch
            {
                return "{\"error\": \"There is no canvases\"}";
            }
        }
    }

    public class UserData
    {
        public string userId { get; set; }
    }
}
