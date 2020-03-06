using System.Collections.Generic;

using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using Canvas.Models;

namespace Canvas.Modules.Users
{
    public class UserRepository : IUserRepository
    {
        private IMongoDatabase Store;
        public UserRepository(IMongoDatabase store)
        {
            Store = store;
        }

        public List<User> GetUsers()
        {
            IMongoCollection<User> collection = Store.GetCollection<User>("User");
            FilterDefinitionBuilder<User> builder = new FilterDefinitionBuilder<User>();
            FilterDefinition<User> filter = builder.Empty;
            List<User> result = collection.Find(filter).ToListAsync().Result;

            return result;
        }

        public User GetUser(string login)
        {
            IMongoCollection<User> collection = Store.GetCollection<User>("User");
            FilterDefinitionBuilder<User> builder = new FilterDefinitionBuilder<User>();
            FilterDefinition<User> filter = builder.Empty;
            List<User> result = collection.Find(item => item.login == login).ToListAsync().Result;
            
            return result[0];
        }
    }
}
