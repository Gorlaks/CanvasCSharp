using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Canvas.Modules.Routing
{
    public interface IRouting
    {
        void CreateRoutes();
    }

    interface IRoutingActs
    {
        void HomeRoute(IApplicationBuilder app);
        void LoginRoute(IApplicationBuilder app);
    }
}
