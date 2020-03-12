
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

        public List<Models.Canvas> UserCanvases(string ownerId)
        {
            List<Models.Canvas> canvases = CanvasRepository.GetUserCanvases(ownerId);
            if (canvases.Count > 0) return canvases;
            else throw new System.Exception("");
        }

        public string CreateCanvas(string ownerId, string canvasTitle, string type)
        {
            Models.Canvas canvas = new Models.Canvas
            {
                ownerId = ownerId,
                title = canvasTitle,
                type = type,
                date = DateTime.Now,
            };

            if (type == "Lean")
            {
                List<CanvasItemInData> canvasData = canvasData = CanvasCreater.GenerateLeanCanvas();
                canvas.rows = 3;
                canvas.columns = 5;
                canvas.data = canvasData;
            }

            try
            {
                Collection.InsertOne(canvas);
                return $"{{\"id\": \"{canvas._id}\"}}";
            } catch (Exception e)
            {
                return $"{e}";
            }
        }

        public string DleteCanvas(string ownerId, string canvasId)
        {
            try
            {
                var id = new ObjectId(canvasId);
                var filter = Builders<Models.Canvas>.Filter.Eq("_id", id);
                Collection.DeleteOne(filter);
                return $"{{\"id\": \"{id}\"}}";
            } catch(Exception e)
            {
                return $"{e}";
            }
        }

        public string UpdateCanvas(SaveCanvasData data)
        {
            try
            {
                BsonArray blocksData = new BsonArray();

                foreach (var item in data.data)
                {
                    blocksData.Add(new BsonDocument {
                    { "position", new BsonArray(new[] { item.position[0], item.position[1], item.position[2], item.position[3] }) },
                    { "title", item.title },
                    { "content", item.content },
                    { "description", item.description },
                });
                };

                var builder = Builders<Models.Canvas>.Filter;
                var filter = builder.Eq("_id", new ObjectId(data.canvasId)) & builder.Eq("ownerId", data.ownerId);

                var result = Collection.UpdateOne(
                    filter,
                    new BsonDocument("$set", new BsonDocument {
                        { "title", data.title },
                        { "date", DateTime.Now },
                        { "data", blocksData }
                    })
                );
                return $"{{\"id\": \"{result.UpsertedId}\"}}";
            }
            catch (Exception e)
            {
                return $"{{\"error\": \"{e}\"}}";
            }
        }
    }
}
