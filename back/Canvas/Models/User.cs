using MongoDB.Bson;

namespace Canvas.Models
{
    /// <summary>
    ///     Model for the user collection in database.
    /// </summary>
    public class User
    {
        public ObjectId _id { get; set; }
        public string email { get; set; }
        public string login { get; set; }
        public string password { get; set; }
        public string role { get; set; }
    }
}
