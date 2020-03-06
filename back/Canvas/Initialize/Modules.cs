using Microsoft.AspNetCore.Builder;

using Canvas.Modules.Store;
using Canvas.Modules.Routing;
using Canvas.Modules.Users;
using Canvas.Modules.Canvas;

using MongoDB.Driver;

using LocalModulesStorage;

namespace Canvas.Initialize
{
    public static class Modules
    {
        public static InitStore initStore;
        public static IMongoDatabase store;

        public static IStoreRepository storeRepository;
        public static IUserRepository userRepository;
        public static ICanvasRepository canvasRepository;

        public static IUserService userService;
        public static ICanvasService canvasService;

        public static IRouting routing;

        public static void InitModules(IApplicationBuilder app)
        {
            initStore = new InitStore("Canvas");
            store = initStore.GetStore();

            storeRepository = new StoreRepository(store);
            userRepository = new UserRepository(store);
            canvasRepository = new CanvasRepository(store);

            userService = new UserService(userRepository);
            canvasService = new CanvasService(canvasRepository);

            routing = new Routing(app);
        }
    }
}
