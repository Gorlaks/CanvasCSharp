using System.Collections.Generic;

using MongoDB.Driver;

using Canvas.Controllers.Admin;

namespace Canvas.Modules.User
{
    /// <summary>
    ///     The main class for getting information about user from database in user collection.
    /// </summary>
    public class UserRepository : IUserRepository
    {
        /// <value> For getting user collection. </value>
        private IMongoCollection<Models.User> Collection { get; set; }
        public UserRepository(IMongoDatabase store)
        {
            Collection = store.GetCollection<Models.User>("User");
        }

        /// <summary>
        ///     The method to get all users in database.
        /// </summary>
        /// <returns> Variable of the string type with data of the User model. </returns>
        public string GetUsers(GetUsersModel data)
        {
            if (data.id != "5e53b6871c9d440000527bc4") return "{\"error\": \"Have_to_be_admin\"}";
                
            FilterDefinitionBuilder<Models.User> builder = new FilterDefinitionBuilder<Models.User>();
            FilterDefinition<Models.User> filter = builder.Empty;
            List<Models.User> users = Collection.Find(filter).ToListAsync().Result;

            string answer = "[";
            int index = 0;
            int lastIndex = users.Count - 1;

            foreach(Models.User user in users)
            {
                answer += "{" +
                    $"\"id\": \"{user._id}\"" +
                    $"\"login\": \"{user.login}\"" +
                    $"\"email\": \"{user.email}\"" +
                    $"}}{(lastIndex != index ? ',' : ' ')}";
            }
            answer += "]";

            return $"{{\"users\": \"{answer}\"}}";
        }

        /// <summary>
        ///     The method to get user by id from database.
        /// </summary>
        /// <param name="login"> Login of requested user. </param>
        /// <returns> Variable of the User model type. </returns>
        public Models.User GetUser(string login)
        {
            Models.User result = Collection.Find(item => item.login == login).First();

            return result;
        }
    }
}
