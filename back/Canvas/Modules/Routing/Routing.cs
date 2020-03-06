using Microsoft.AspNetCore.Builder;

namespace Canvas.Modules.Routing
{
    public class Routing : IRouting
    {
        private IApplicationBuilder App;

        public Routing(IApplicationBuilder app)
        {
            App = app;
        }

        public void CreateRoutes()
        {
            RoutingActs routingActs = new RoutingActs();
            App.Map("/home", routingActs.HomeRoute);
            App.Map("/login", routingActs.LoginRoute);
            App.Map("/registration", routingActs.RegistrationRoute);
        }
    }
}
