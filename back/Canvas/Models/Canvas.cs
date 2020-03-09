using System;
using System.Collections.Generic;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Canvas.Models
{
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

    public class CanvasItemInData
    {
        public int[] position { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string description { get; set; }
    }
}