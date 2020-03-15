using Microsoft.AspNetCore.Builder;

using Canvas.Modules.Store;
using Canvas.Modules.User;
using Canvas.Modules.Canvas;
using Canvas.Modules.Auth;
using Canvas.Modules.CanvasTemplate;

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
        public static ICanvasTemplateRepository canvasTemplateRepository;
        public static IAuthRepository authRepository;

        public static IUserService userService;
        public static ICanvasService canvasService;
        public static IAuthService authService;


        public static void InitModules(IApplicationBuilder app)
        {
            initStore = new InitStore("Canvas");
            store = initStore.GetStore();

            storeRepository = new StoreRepository(store);
            userRepository = new UserRepository(store);
            canvasRepository = new CanvasRepository(store);
            canvasTemplateRepository = new CanvasTemplateRepository(store);
            authRepository = new AuthRepository(store);

            userService = new UserService(userRepository);
            canvasService = new CanvasService(canvasTemplateRepository, store);
            authService = new AuthService(store);

        }
    }
}
