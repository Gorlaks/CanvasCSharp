using Canvas.Controllers;

namespace Canvas.Modules.Auth
{
    public interface IAuthService
    {
        string Registration(RegistrationData data);
    }

    public interface IAuthRepository
    {
        string Login(LoginData data);
    }
}
