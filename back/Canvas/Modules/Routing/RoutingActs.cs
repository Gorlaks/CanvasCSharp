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
                string answer = "[";
                try
                {
                    List<Models.Canvas> canvasList = Initialize.Modules.canvasService.UserCanvases(userId);
                    int index = 0;
                    int lastIndex = canvasList.Count - 1;
                    foreach(var item in canvasList)
                    {
                        answer += "{" +
                            $"\"id\": \"{item._id}\", " +
                            $"\"ownerId\": \"{item.ownerId}\", " +
                            $"\"title\": \"{item.title}\", " +
                            $"\"type\": \"{item.type}\", " +
                            $"\"date\": \"{item.date}\"" +
                        $"}}{(lastIndex != index ? ',' : ' ')}";
                        index++;
                    }
                    answer += "]";
                    await context.Response.WriteAsync(answer);
                }
                catch
                {
                    await context.Response.WriteAsync("{\"error\": \"There is no canvases\"}");
                }
            });
        }
    }
}
