
using System;
using System.Collections.Generic;
using Canvas.Models;
using MongoDB.Bson;
using MongoDB.Driver;

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

        public List<Models.Canvas> UserCanvases(string userId)
        {
            List<Models.Canvas> canvases = CanvasRepository.GetUserCanvases(userId);
            if (canvases.Count > 0) return canvases;
            else throw new System.Exception("User don't have any canvases");
        }

        public string CreateCanvas(string userId, string canvasTitle, string type)
        {
            Models.Canvas canvas = new Models.Canvas
            {
                ownerId = userId,
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

        public string DleteCanvas(string userId, string canvasId)
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
    }
}
