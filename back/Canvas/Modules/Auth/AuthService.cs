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

        public Models.User Login(string login, string password)
        {
            Models.User user = UserRepository.GetUser(login);
            if (user.password == password)
                return user;
            else throw new System.Exception();
        }

        public string Registration(RegistrationData data)
        {
            try
            {
                RegistrationData registrationData = new RegistrationData
                {
                    email = data.email,
                    login = data.login,
                    password = data.password
                };

                Collection.InsertOne(registrationData);

                return "{" +
                    $"\"id\": \"{registrationData._id}\", " +
                    $"\"login\": \"{registrationData.login}\", " +
                    $"\"email\": \"{registrationData.email}\"" +
                "}";
            }
            catch(Exception e)
            {
                return $"{{\"error\": \"{e}\"}}";
            }
        }
    }
}
