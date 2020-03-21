using Microsoft.AspNetCore.Builder;

using MongoDB.Driver;

using Canvas.Modules.Store;
using Canvas.Modules.User;
using Canvas.Modules.Canvas;
using Canvas.Modules.Auth;
using Canvas.Modules.CanvasTemplate;

namespace Canvas.Initialize
{
    /// <summary>
    ///     The main static class for initialization all needed modules in project, like service, repository, etc.
    /// </summary>
    public static class Modules
    {
        public static InitStore initStore;
        public static IMongoDatabase store;

        public static IUserRepository userRepository;
        public static ICanvasRepository canvasRepository;
        public static ICanvasTemplateRepository canvasTemplateRepository;
        public static IAuthRepository authRepository;

        public static IUserService userService;
        public static ICanvasService canvasService;
        public static IAuthService authService;

        /// <summary>
        ///     The method for initialize needed modules.
        /// </summary>
        /// <param name="app"> IApplicationBuilder </param>
        public static void InitModules(IApplicationBuilder app)
        {
            initStore = new InitStore("Canvas");
            store = initStore.GetStore();

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
