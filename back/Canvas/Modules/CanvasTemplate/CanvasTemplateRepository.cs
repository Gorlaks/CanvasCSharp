using System;
using MongoDB.Driver;

namespace Canvas.Modules.CanvasTemplate
{
    /// <summary>
    ///     The main class for getting canvas template from database in canvas template collection.
    /// </summary>
    public class CanvasTemplateRepository : ICanvasTemplateRepository
    {
        /// <value> For getting canvas collection from database </value>
        private IMongoCollection<Models.Canvas> Collection { get; set; }

        public CanvasTemplateRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.Canvas>("CanvasTemplate");
        }

        /// <summary>
        ///     The method to get the requested template from database.
        /// </summary>
        /// <param name="type"> Type of the needed template </param>
        /// <returns> variable of the canvas template model </returns>
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
