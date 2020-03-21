using MongoDB.Driver;

namespace Canvas.Modules.Store
{
    public interface IInitStore
    {
        IMongoDatabase GetStore();
    }
}
