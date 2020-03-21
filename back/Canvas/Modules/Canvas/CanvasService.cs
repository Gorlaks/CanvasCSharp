using System;
using MongoDB.Bson;
using MongoDB.Driver;
using Canvas.Modules.CanvasTemplate;

using Canvas.Controllers;

namespace Canvas.Modules.Canvas
{
    /// <summary>
    ///     The main class to process the received data about canvas.
    /// </summary>
    public class CanvasService : ICanvasService
    {
        private ICanvasTemplateRepository CanvasTemplateRepository { get; set; }
        /// <value> For getting collection with canvases. </value>
        private IMongoCollection<Models.Canvas> Collection { get; set; }

        public CanvasService(ICanvasTemplateRepository canvasTemplateRepository, IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.Canvas>("Canvas");
            CanvasTemplateRepository = canvasTemplateRepository;
        }

        /// <summary>
        ///     The method for creating a new canvas.
        /// </summary>
        /// <param name="data"> Information about canvas like title, type, etc. </param>
        /// <returns> Id of the new created canvas. </returns>
        public string CreateCanvas(CreateCanvasData data)
        {
            string ownerId = data.ownerId,
                   title = data.title,
                   type = data.type;

            // Get a template of canvas of the requested type from database (canvas template collection).
            Models.Canvas canvas = CanvasTemplateRepository.getCanvasTemplateByType(type);
            canvas._id = "";
            canvas.ownerId = ownerId;
            canvas.title = title;

            /// <summary>
            ///     Try to insert a new canvas to database.
            /// </summary>
            try
            {
                Collection.InsertOne(canvas);
                return $"{{\"id\": \"{canvas._id}\"}}";
            } catch
            {
                return $"{{\"error\": \"Something went wrong\"}}";
            }
        }

        /// <summary>
        ///     The method for removing requested canvas from database.
        /// </summary>
        /// <param name="data"> Information about canvas like owner and canvas id. </param>
        /// <returns> Id of the removed canvas. </returns>
        public string DeleteCanvas(DeleteCanvasData data)
        {
            string ownerId = data.ownerId,
                   canvasId = data.canvasId;

            /// <summary>
            ///     Try to delete a canvas from database.
            /// </summary>
            try
            {
                var builder = Builders<Models.Canvas>.Filter;
                // Filter to check canvas and owner id before removing.
                var filter = builder.Eq("_id", new ObjectId(canvasId)) & builder.Eq("ownerId", ownerId);

                Collection.DeleteOne(filter);

                return $"{{\"id\": \"{canvasId}\"}}";
            } catch
            {
                return $"{{\"error\": \"Something went wrong\"}}";
            }
        }

        /// <summary>
        ///     The method for updating requested canvas.
        /// </summary>
        /// <param name="data"> Information about canvas like owner and canvas id. </param>
        /// <returns> Id of the updated canvas. </returns>
        public string UpdateCanvas(SaveCanvasData data)
        {
            string ownerId = data.ownerId,
                   canvasId = data.canvasId;

            /// <summary>
            ///     Try to update a canvas in database.
            /// </summary>
            try
            {
                BsonArray blocksData = new BsonArray();

                foreach (var item in data.data)
                {
                    int[] position = item.position;
                    blocksData.Add(new BsonDocument {
                    { "position", new BsonArray(new[] { position[0], position[1], position[2], position[3] }) },
                    { "title", item.title },
                    { "content", item.content },
                    { "description", item.description },
                });
                };

                var builder = Builders<Models.Canvas>.Filter;
                // Filter to check canvas and owner id before updating.
                var filter = builder.Eq("_id", new ObjectId(canvasId)) & builder.Eq("ownerId", ownerId);

                var result = Collection.UpdateOne(
                    filter,
                    new BsonDocument("$set", new BsonDocument {
                        { "title", data.title },
                        { "date", DateTime.Now },
                        { "data", blocksData }
                    })
                );
                return $"{{\"id\": \"{canvasId}\"}}";
            }
            catch
            {
                return $"{{\"error\": \"Something went wrong\"}}";
            }
        }
    }
}
