using System;
using MongoDB.Driver;

namespace Canvas.Modules.CanvasTemplate
{
    public class CanvasTemplateRepository : ICanvasTemplateRepository
    {
        private IMongoCollection<Models.Canvas> Collection { get; set; }

        public CanvasTemplateRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.Canvas>("CanvasTemplate");
        }
        public Models.Canvas getCanvasTemplateByType(string type)
        {
            try
            {
                Models.Canvas canvas = Collection.Find(item => item.type == type).First();
                return canvas;
            } catch
            {
                throw new Exception($"{{\"error\": \"Something_went_wrong\"}}");
            }
        }
    }
}
