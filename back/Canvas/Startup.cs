using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Canvas
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyOrigin().WithMethods("POST", "GET").AllowAnyHeader());
            app.UseHttpsRedirection();
            app.UseMvc();

            /// <summary>
            ///     Initialize all needed modules like service, repository, etc.
            /// </summary>
            /// <param name='app'"> IApplicationBuilder. </param>
            Initialize.Modules.InitModules(app);

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync($"Hello");
            });
        }
    }
}