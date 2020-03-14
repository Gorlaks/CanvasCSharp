using System;
using System.Collections.Generic;

using MongoDB.Driver;
using Canvas.Controllers;

namespace Canvas.Modules.User
{
    public class UserRepository : IUserRepository
    {
        private IMongoDatabase Store { get; set; }
        private IMongoCollection<Models.User> Collection { get; set; }
        public UserRepository(IMongoDatabase store)
        {
            Store = store;
            Collection = Store.GetCollection<Models.User>("User");
        }

        public List<Models.User> GetUsers()
        {
            FilterDefinitionBuilder<Models.User> builder = new FilterDefinitionBuilder<Models.User>();
            FilterDefinition<Models.User> filter = builder.Empty;
            List<Models.User> result = Collection.Find(filter).ToListAsync().Result;

            return result;
        }

        public Models.User GetUser(string login)
        {
            Models.User result = Collection.Find(item => item.login == login).First();

            return result;
        }
    }
}
