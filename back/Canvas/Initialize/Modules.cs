using Microsoft.AspNetCore.Builder;

using Canvas.Modules.Store;
using Canvas.Modules.Routing;
using Canvas.Modules.Users;

using MongoDB.Driver;

using LocalModulesStorage;

namespace Canvas.Initialize
{
    public static class Modules
    {
        static public InitStore initStore;
        static public IMongoDatabase store;

        static public StoreRepository storeRepository;
        static public UserRepository userRepository;

        static public UserService userService;

        static public Routing routing;

        public static void InitModules(IApplicationBuilder app)
        {
            initStore = new InitStore("Canvas");
            store = initStore.GetStore();
            storeRepository = new StoreRepository(store);
            userRepository = new UserRepository(store);

            userService = new UserService(userRepository);

            routing = new Routing(app);
        }
    }
}
