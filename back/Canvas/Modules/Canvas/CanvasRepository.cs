using System;

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
        public void GetCanvas()
        {
            throw new NotImplementedException();
        }

        public void GetCanvases()
        {
            throw new NotImplementedException();
        }
    }
}
