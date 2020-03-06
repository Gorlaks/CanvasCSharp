using MongoDB.Driver;

namespace Canvas.Modules.Store
{
    public class InitStore : IInitStore
    {
        private string ConnectionString = "mongodb+srv://admin:1234@cluster0-wqhlb.azure.mongodb.net/test?retryWrites=true&w=majority";
        private MongoClient Client;
        private IMongoDatabase Store;

        public InitStore(string storeName)
        {
            Client = new MongoClient(ConnectionString);
            Store = Client.GetDatabase(storeName);
        }

        public IMongoDatabase GetStore()
        {
            return Store;
        }
    }
}
