using System.Collections.Generic;

using Canvas.Models;

using MongoDB.Driver;

namespace Canvas.Modules.Store
{
    public interface IStoreRepository
    {
    }

    public interface IStoreService
    {
    }

    public interface IInitStore
    {
        IMongoDatabase GetStore();
    }
}
