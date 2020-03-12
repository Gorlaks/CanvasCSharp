using System.Collections.Generic;

using Canvas.Controllers;

namespace Canvas.Modules.User
{
    public interface IUserRepository
    {
        List<Models.User> GetUsers();
        Models.User GetUser(string login);
    }

    public interface IUserService
    {
    }
}
