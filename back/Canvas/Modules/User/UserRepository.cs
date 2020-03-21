using System;
using System.Collections.Generic;

using MongoDB.Driver;
using Canvas.Controllers;

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
        /// <returns> Variable of the List type of the User model. </returns>
        public List<Models.User> GetUsers()
        {
            FilterDefinitionBuilder<Models.User> builder = new FilterDefinitionBuilder<Models.User>();
            FilterDefinition<Models.User> filter = builder.Empty;
            List<Models.User> result = Collection.Find(filter).ToListAsync().Result;

            return result;
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
