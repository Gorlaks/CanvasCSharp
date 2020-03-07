using System;
using System.Collections;
using System.Collections.Generic;

using MongoDB.Bson;

namespace Canvas.Models
{
    public class Canvas
    {
        public ObjectId _id { get; set; }
        public string ownerId { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public DateTime date { get; set; }
        public CanvasData data { get; set; }
    }

    public class CanvasData
    {
        public CanvasItemInData one { get; set; }
    }

    public class CanvasItemInData
    {
        public CanvasItemPosition position { get; set; }
        public string title { get; set; }
        public string content { get; set; }
    }

    public class CanvasItemPosition
    {
        public string x { get; set; }
        public string y { get; set; }
    }
}