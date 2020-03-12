using Canvas.Controllers;

namespace Canvas.Modules.Auth
{
    public interface IAuthService
    {
        string Registration(RegistrationData data);
    }
}
