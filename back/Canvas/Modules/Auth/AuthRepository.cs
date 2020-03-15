using System;
using Canvas.Modules.User;
using Canvas.Controllers;
using MongoDB.Driver;

namespace Canvas.Modules.Auth
{
    public class AuthRepository : IAuthRepository
    {
        private IMongoCollection<Models.User> Collection;
        public AuthRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.User>("User");
        }
        public string Login(LoginData data)
        {
            string login = data.login;
            string password = data.password;
            try
            {
                Models.User user = Collection.Find(item => item.login == login).First();
                if (user.password == password)
                {
                    return $"{{" +
                         $"\"id\": \"{user._id}\"," +
                         $"\"login\": \"{user.login}\"," +
                         $"\"email\": \"{user.email}\"" +
                     $"}}";
                }
                else
                {
                    return "{\"error\": \"Incorrect password\"}";
                }
            }
            catch
            {
                return "{\"error\": \"Login is failed\"}";
            }
        }
    }
}
