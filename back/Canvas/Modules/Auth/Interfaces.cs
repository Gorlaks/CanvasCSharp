using Canvas.Controllers;

namespace Canvas.Modules.Auth
{
    public interface IAuthService
    {
        Models.User Login(string login, string password);
        string Registration(RegistrationData data);
    }
}
