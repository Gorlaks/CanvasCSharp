using System.Collections.Generic;

using MongoDB.Driver;
using Canvas.Controllers;

namespace Canvas.Modules.Canvas
{
    /// <summary>
    ///     The main class for getting some data about canvas from database in canvas collection.
    /// </summary>
    public class CanvasRepository : ICanvasRepository
    {
        /// <value> Gets the collection with canvas data from database. </value>
        private IMongoCollection<Models.Canvas> Collection;

        public CanvasRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.Canvas>("Canvas");
        }
        /// <summary>
        ///     Method for getting canvas list of requested user from database.
        /// </summary>
        /// <param name="data"> Data about user like id. </param>
        /// <returns> String with canvas list data. </returns>
        public string GetUserCanvasList(UserData data)
        {
            string ownerId = data.ownerId;
            /// <value> For create answer with data about canvas </value>
            string answer = "[";

            /// <summary>
            ///     Try to get canvas list of requested user and
            ///     save it to canvasList variable with canvas model like type.
            /// </summary>
            try
            {
                List<Models.Canvas> canvasList = Collection.Find(item => item.ownerId == ownerId).ToListAsync().Result;
                // Counter to determine the element during an array traversal.
                int index = 0;
                // Index last element in array.
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
                return $"{{\"error\": \"User don't have any canvases\"}}";
            }
        }

        /// <summary>
        ///     The method for getting canvas by id from database.
        /// </summary>
        /// <param name="data"> Data about canvas, data like id of owner and canvas. </param>
        /// <returns> String with data about received canvas. </returns>
        public string GetCanvasById(CanvasByIdData data)
        {
            string ownerId = data.ownerId,
                   canvasId = data.canvasId;
            /// <summary>
            ///     Try to find canvas by canvas and user id.
            /// </summary>
            try
            {
                Models.Canvas canvas = Collection.Find(item =>
                item._id == canvasId && item.ownerId == ownerId).First();

                if(canvas == null) return $"{{\"error\": \"There is no canvas with same id\"}}"; ;

                string blocksInfo = "[";
                // Counter to determine the element during an array traversal.
                int index = 0;
                // Index last element in array.
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
            catch
            {
                return $"{{\"error\": \"Something_went_wrong\"}}";
            }

        }
    }
}
