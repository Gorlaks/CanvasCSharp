using MongoDB.Driver;

namespace Canvas.Modules.Store
{
    /// <summary>
    ///     The main class for initialization MongoDB database.
    /// </summary>
    public class InitStore : IInitStore
    {
        /// <value> String for connection to the MongoDB database. </value>
        private string ConnectionString = "mongodb+srv://admin:1234@cluster0-wqhlb.azure.mongodb.net/test?retryWrites=true&w=majority";
        private MongoClient Client { get; set; }
        private IMongoDatabase Store { get; set; }

        /// <summary>
        ///      Create Mongo Client and get database.
        /// </summary>
        /// <param name="storeName"> Name of database in the MongoDB. </param>
        public InitStore(string storeName)
        {
            Client = new MongoClient(ConnectionString);
            Store = Client.GetDatabase(storeName);
        }

        /// <summary>
        ///     Method for getting received database.
        /// </summary>
        /// <returns> Return received database (IMongoDatabase) </returns>
        public IMongoDatabase GetStore()
        {
            return Store;
        }
    }
}
