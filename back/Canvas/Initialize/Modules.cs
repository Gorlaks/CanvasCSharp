using Microsoft.AspNetCore.Builder;

using MongoDB.Driver;

using Canvas.Modules.Store;
using Canvas.Modules.User;
using Canvas.Modules.Canvas;
using Canvas.Modules.Auth;
using Canvas.Modules.CanvasTemplate;
using Canvas.Modules.Pdf;

namespace Canvas.Initialize
{
    /// <summary>
    ///     The main static class for initialization all needed modules in project, like service, repository, etc.
    /// </summary>
    public static class Modules
    {
        public static InitStore initStore { get; set; }
        public static IMongoDatabase store { get; set; }

        public static IUserRepository userRepository { get; set; }
        public static ICanvasRepository canvasRepository { get; set; }
        public static ICanvasTemplateRepository canvasTemplateRepository { get; set; }
        public static IAuthRepository authRepository { get; set; }

        public static IUserService userService { get; set; }
        public static ICanvasService canvasService { get; set; }
        public static IAuthService authService { get; set; }
        public static ICanvasTemplateService canvasTemplateService { get; set; }

        public static IPdfCreater pdfCreater { get; set; }

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
            canvasTemplateService = new CanvasTemplateService(store);

            pdfCreater = new PdfCreater();
        }
    }
}
