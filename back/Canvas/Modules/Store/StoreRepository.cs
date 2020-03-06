using System.Collections.Generic;

using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using Canvas.Models;

namespace Canvas.Modules.Store
{
    public class StoreRepository : IStoreRepository
    {
        private IMongoDatabase Store;
        public StoreRepository(IMongoDatabase store)
        {
            Store = store;
        }

    }
}
