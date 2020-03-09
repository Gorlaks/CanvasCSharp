using System;
using System.Collections.Generic;

using MongoDB.Driver;

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
        public List<Models.Canvas> GetUserCanvases(string userId)
        {
            List<Models.Canvas> result = Collection.Find(item => item.ownerId == userId).ToListAsync().Result;
            return result;
        }

        public List<Models.Canvas> GetAllCanvases()
        {
            FilterDefinitionBuilder<Models.Canvas> builder = new FilterDefinitionBuilder<Models.Canvas>();
            FilterDefinition<Models.Canvas> filter = builder.Empty;
            List<Models.Canvas> result = Collection.Find(filter).ToListAsync().Result;
            return result;
        }

        public Models.Canvas GetCanvasById(string userId, string canvasId)
        {
            Models.Canvas canvas = Collection.Find(item => 
                item._id == canvasId && item.ownerId == userId)
                    .ToListAsync().Result[0];

            return canvas;
        }
    }
}
