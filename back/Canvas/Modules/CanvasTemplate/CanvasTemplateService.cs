using System;
using System.Collections.Generic;

using MongoDB.Driver;

using Canvas.Controllers.Admin;

namespace Canvas.Modules.CanvasTemplate
{
    /// <summary>
    ///     The main class to process the received data about canvas template or work with CanvasTemplate collection.
    /// </summary>
    public class CanvasTemplateService : ICanvasTemplateService
    {
        /// <value> Gets the CanasTemplate collection from MongoDB database </value>
        private IMongoCollection<Models.Canvas> Collection { get; set; }

        public CanvasTemplateService(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.Canvas>("CanvasTemplate");
        }
        /// <summary>
        ///     The method to insert a new canvas template to database CanvasTemplate collection.
        /// </summary>
        /// <param name="data"> Infromation about a new canvas template like type, rows, etc. </param>
        /// <returns> Json with id of created canvas template. </returns>
        public string CreateCanvasTemplate(CreateCanvasTemplateModel data)
        {
            string type = data.type;
            // Rows count in a grid layout
            int rows = data.rows;
            // Columns count in a grid layout
            int columns = data.columns;
            List<Models.CanvasItemInData> canvasDataList = data.data;

            if (type == null) return "{\"error\": \"Type_not_found\"}";
            if (rows == null) return "{\"error\": \"Rows_not_found\"}";
            if (columns == null) return "{\"error\": \"Columns_not_found\"}";
            if (canvasDataList == null) return "{\"error\": \"Data_not_found\"}";

            Models.Canvas canvasTemplate = new Models.Canvas()
            {
                ownerId = null,
                title = null,
                type = data.type,
                date = DateTime.Now,
                rows = data.rows,
                columns = data.columns,
                data = canvasDataList
            };

            /// <summary>
            ///     Try to insert the created canvas model to MongoDB database in CanvasTemplate collection.
            /// </summary>
            try
            {
                Collection.InsertOne(canvasTemplate);
                return $"{{\"id\": \"{canvasTemplate._id}\"}}";
            }
            catch
            {
                return "{\"error\": \"Something_went_wrong\"}";
            }
        }
    }
}
