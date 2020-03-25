using Canvas.Controllers.Admin;

namespace Canvas.Modules.User
{
    public interface IUserRepository
    {
        string GetUsers(GetUsersModel data);
        Models.User GetUser(string login);
    }

    public interface IUserService
    {
    }
}
