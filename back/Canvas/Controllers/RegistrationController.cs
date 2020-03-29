using Microsoft.AspNetCore.Mvc;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]

    /// <summary>
    ///     The controller to regist a new user to database in user collection.
    /// </summary>
    public class RegistrationController : Controller
    {
        [HttpPost]
        public string Post(RegistrationData data)
        {
            string answer = modules.authService.Registration(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for data about a new user.
    /// </summary>
    public class RegistrationData
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string email { get; set; }
        public string login { get; set; }
        public string password { get; set; }
    }
}
