using System;
using System.Collections.Generic;

using MongoDB.Driver;
using Canvas.Controllers;

namespace Canvas.Modules.Canvas
{
    public class CanvasRepository : ICanvasRepository
    {
        private IMongoDatabase Store;
        private IMongoCollection<Models.Canvas> Collection;

        public CanvasRepository(IMongoDatabase store)
        {
            Store = store;
            Collection = store.GetCollection<Models.Canvas>("Canvas");
        }
        public string GetUserCanvasList(UserData data)
        {
            try
            {
                string ownerId = data.ownerId;
                string answer = "[";
                List<Models.Canvas> canvasList = Collection.Find(item => item.ownerId == ownerId).ToListAsync().Result;
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
            catch (Exception e)
            {
                return $"{{\"error\": \"User don't have any canvases\"}}";
            }
        }

        public string GetAllCanvases()
        {
            FilterDefinitionBuilder<Models.Canvas> builder = new FilterDefinitionBuilder<Models.Canvas>();
            FilterDefinition<Models.Canvas> filter = builder.Empty;
            List<Models.Canvas> result = Collection.Find(filter).ToListAsync().Result;
            return "";
        }

        public string GetCanvasById(CanvasByIdData data)
        {

            string ownerId = data.ownerId,
                   canvasId = data.canvasId;
            try
            {
                Models.Canvas canvas = Collection.Find(item =>
                item._id == canvasId && item.ownerId == ownerId)
                    .ToListAsync().Result[0];

                if(canvas != null)
                {
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
                        $"\"ownerId\": \"{canvas.ownerId}\", " +
                        $"\"title\": \"{canvas.title}\", " +
                        $"\"type\": \"{canvas.type}\", " +
                        $"\"date\": \"{canvas.date}\", " +
                        $"\"rows\": \"{canvas.rows}\", " +
                        $"\"columns\": \"{canvas.columns}\", " +
                        $"\"data\": {blocksInfo}" +
                    "}";
                    return canvasData;
                }
                else
                {
                    return $"{{\"error\": \"There is no canvas with same id\"}}";
                }



            }
            catch (Exception e)
            {
                return $"{{\"error\": \"{e}\"}}";
            }

        }
    }
}
