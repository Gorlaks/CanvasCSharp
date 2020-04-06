using System;
using System.Collections.Generic;

using MongoDB.Driver;

using Canvas.Controllers.Admin;

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
        public Models.Canvas GetCanvasTemplateByType(string type)
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

        public string GetCanvasTemplates(GetCanvasTemplatesModel data)
        {
            if (data.id == "") return "{\"error\": \"Id_not_found\"}";

            FilterDefinitionBuilder<Models.Canvas> builder = new FilterDefinitionBuilder<Models.Canvas>();
            FilterDefinition<Models.Canvas> filter = builder.Empty;
            List<Models.Canvas> canvasTemplates = Collection.Find(filter).ToListAsync().Result;

            if (canvasTemplates.Count < 1) return "\"templates\": \"There_is_no_templates\"";

            string answer = "[";
            string blocksInfo = "[";
            int index = 0;
            int lastIndex = canvasTemplates.Count - 1;

            foreach (Models.Canvas template in canvasTemplates)
            {
                foreach (Models.CanvasItemInData item in template.data)
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

                answer += "{" +
                    $"\"id\": \"{template._id}\", " +
                    $"\"type\": \"{template.type}\", " +
                    $"\"rows\": \"{template.rows}\", " +
                    $"\"columns\": \"{template.columns}\", " +
                    $"\"data\": \"{blocksInfo}\"" +
                $"}}{(lastIndex != index ? ',' : ' ')}";
                index++;
                blocksInfo = "[";
            }

            answer += "]";

            return answer;
        }
    }
}
