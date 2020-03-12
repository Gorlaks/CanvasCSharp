
using System;
using System.Collections.Generic;
using Canvas.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

using Canvas.Controllers;

namespace Canvas.Modules.Canvas
{
    public class CanvasService : ICanvasService
    {
        private ICanvasRepository CanvasRepository;
        private IMongoCollection<Models.Canvas> Collection;

        public CanvasService(ICanvasRepository canvasRepository, IMongoDatabase store)
        {
            CanvasRepository = canvasRepository;
            Collection = store.GetCollection<Models.Canvas>("Canvas");
        }

        public string CreateCanvas(CreateCanvasData data)
        {
            string ownerId = data.ownerId,
                   title = data.title,
                   type = data.type;

            Models.Canvas canvas = new Models.Canvas
            {
                ownerId = ownerId,
                title = title,
                type = type,
                date = DateTime.Now,
            };

            if (type == "Lean")
            {
                List<CanvasItemInData> canvasData = CanvasCreater.GenerateLeanCanvas();
                canvas.rows = 3;
                canvas.columns = 5;
                canvas.data = canvasData;
            }

            try
            {
                Collection.InsertOne(canvas);
                return $"{{\"id\": \"{canvas._id}\"}}";
            } catch
            {
                return $"{{\"id\": \"Something went wrong\"}}";
            }
        }

        public string DeleteCanvas(DeleteCanvasData data)
        {
            string ownerId = data.ownerId,
                   canvasId = data.canvasId;
            try
            {
                var builder = Builders<Models.Canvas>.Filter;
                var filter = builder.Eq("_id", new ObjectId(canvasId)) & builder.Eq("ownerId", ownerId);

                Collection.DeleteOne(filter);

                return $"{{\"id\": \"{canvasId}\"}}";
            } catch
            {
                return $"{{\"error\": \"Something went wrong\"}}";
            }
        }

        public string UpdateCanvas(SaveCanvasData data)
        {
            string ownerId = data.ownerId,
                   canvasId = data.canvasId;
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
