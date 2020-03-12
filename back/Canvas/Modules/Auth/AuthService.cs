using System;
using Canvas.Modules.User;
using Canvas.Controllers;
using MongoDB.Driver;

namespace Canvas.Modules.Auth
{
    public class AuthService : IAuthService
    {
        private IUserRepository UserRepository;
        private IMongoCollection<RegistrationData> Collection;
        public AuthService(IUserRepository userRepository, IMongoDatabase store)
        {
            UserRepository = userRepository;
            Collection = store.GetCollection<RegistrationData>("User");
        }

        public string Registration(RegistrationData data)
        {
            try
            {
                string login = data.login;
                string email = data.email;
                if(login != null && email != null)
                {
                    Collection.InsertOne(data);

                    return "{" +
                        $"\"id\": \"{data._id}\", " +
                        $"\"login\": \"{login}\", " +
                        $"\"email\": \"{email}\"" +
                    "}";
                } else
                {
                    return $"{{\"error\": \"Incorrect data\"}}";
                }
            }
            catch(Exception e)
            {
                return $"{{\"error\": \"{e}\"}}";
            }
        }
    }
}
