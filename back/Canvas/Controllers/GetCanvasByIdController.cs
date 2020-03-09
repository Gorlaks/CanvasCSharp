using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetCanvasByIdController : Controller
    {
        [HttpPost]
        public string Post(CanvasInfo data)
        {
            try
            {
                Models.Canvas canvas = Initialize.Modules.canvasRepository.GetCanvasById(data.userId, data.canvasId);
                string blocksInfo = "[";
                int index = 0;
                int countItems = canvas.data.Count - 1;

                foreach (Models.CanvasItemInData item in canvas.data)
                {
                    blocksInfo += "{" +
                        $"\"position\": [{item.position[0]}, {item.position[1]}, {item.position[2]}, {item.position[3]}], " +
                        $"\"title\": \"{item.title}\", " +
                        $"\"content\": \"{item.content}\", " +
                        $"\"description\": \"{item.description}\" " +
                    $"}}{(countItems != index ? ',' : ' ')}";
                    index++;
                }

                blocksInfo += "]";

                string canvasData = "{" +
                    $"\"id\": \"{canvas._id}\", " +
                    $"\"title\": \"{canvas.title}\", " +
                    $"\"type\": \"{canvas.type}\", " +
                    $"\"date\": \"{canvas.date}\", " +
                    $"\"rows\": \"{canvas.rows}\", " +
                    $"\"columns\": \"{canvas.columns}\", " +
                    $"\"data\": {blocksInfo}" +
                "}";

                
                return canvasData;

            }
            catch(Exception e)
            {
                return $"{e}";
            }
        }
    }

    public class CanvasInfo
    {
        public string userId { get; set; }
        public string canvasId { get; set; }
    }
}
