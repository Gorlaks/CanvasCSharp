using System.Collections.Generic;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Canvas.Models;

namespace Canvas.Modules.Routing
{
    public class RoutingActs : IRoutingActs
    {
        public void HomeRoute(IApplicationBuilder app)
        {
            app.Run(async context =>
            {
                await context.Response.WriteAsync("Home");
            });
        }
        public void LoginRoute(IApplicationBuilder app)
        {
            app.Run(async context =>
            {
                string login = context.Request.Query["login"];
                string password = context.Request.Query["password"];
                try
                {
                    User user = Initialize.Modules.userService.Login(login, password);
                    await context.Response.WriteAsync($"{{" +
                        $"\"id\": \"{user._id}\"," +
                        $"\"login\": \"{user.login}\"," +
                        $"\"password\": \"{user.password}\"," +
                        $"\"email\": \"{user.email}\"" +
                    $"}}");
                } catch
                {
                    await context.Response.WriteAsync("{\"error\": \"Login is failed\"}");
                }
            });
        }
        public void RegistrationRoute(IApplicationBuilder app)
        {
            app.Run(async context =>
            {
                await context.Response.WriteAsync("Registration");
            });
        }

        public void UserCanvasesRoute(IApplicationBuilder app)
        {
            app.Run(async context => 
            {
                string userId = context.Request.Query["userId"];
                try
                {
                    List<Models.Canvas> canvases = Initialize.Modules.canvasService.UserCanvases(userId);
                    await context.Response.WriteAsync($"[{{" +
                        $"\"id\": \"{canvases[0]._id}\"," +
                        $"\"ownerId\": \"{canvases[0].ownerId}\"," +
                        $"\"title\": \"{canvases[0].title}\"," +
                        $"\"type\": \"{canvases[0].type}\"," +
                        $"\"date\": \"{canvases[0].date}\"" +
                    $"}}]");
                }
                catch
                {
                    await context.Response.WriteAsync("{\"error\": \"There is no canvases\"}");
                }
            });
        }
    }
}
