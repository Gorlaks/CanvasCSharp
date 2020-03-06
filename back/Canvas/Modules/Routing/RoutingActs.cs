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
    }
}
