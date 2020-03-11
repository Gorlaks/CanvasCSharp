using Microsoft.AspNetCore.Mvc;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegistrationController : Controller
    {
        [HttpPost]
        public string Post(RegistrationData data)
        {
            string answer = Initialize.Modules.authService.Registration(data);
            return answer;
        }
    }

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
