using System;
using System.Collections.Generic;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Canvas.Models
{
    /// <summary>
    ///     Model for the canvas collection in the database.
    /// </summary>
    public class Canvas
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string ownerId { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public DateTime date { get; set; }
        public int rows { get; set; }
        public int columns { get; set; }
        public List<CanvasItemInData> data { get; set; }
    }

    /// <summary>
    ///     Model for the list of the data field in the canvas collection.
    /// </summary>
    public class CanvasItemInData
    {
        public int[] position { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string description { get; set; }
    }
}