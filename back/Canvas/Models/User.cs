using MongoDB.Bson;

namespace Canvas.Models
{
    public class User
    {
        public ObjectId id { get; set; }
        public string email { get; set; }
        public string login { get; set; }
        public string password { get; set; }
    }
}
