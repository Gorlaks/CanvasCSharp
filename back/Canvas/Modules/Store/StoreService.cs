using System.Collections.Generic;

using MongoDB.Driver;
using MongoDB.Bson;
using Canvas.Models;


namespace Canvas.Modules.Store
{
    public class StoreService : IStoreService
    {
        private IMongoDatabase Store;
        public StoreService(IMongoDatabase store)
        {
            Store = store;
        }
    }
}
