using Canvas.Controllers;
using MongoDB.Driver;

namespace Canvas.Modules.Auth
{
    /// <summary>
    ///     The main class for getting auth information from database in user collection.
    /// </summary>
    public class AuthRepository : IAuthRepository
    {
        private IMongoCollection<Models.User> Collection;
        public AuthRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.User>("User");
        }
        /// <summary>
        ///     The method to find requested user in database.
        /// </summary>
        /// <param name="data"> User data like login and password. </param>
        /// <returns> Information about requested user. </returns>
        public string Login(LoginData data)
        {
            string login = data.login;
            string password = data.password;

            /// <summary>
            ///     Try to find requested user in database.
            /// </summary>
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
