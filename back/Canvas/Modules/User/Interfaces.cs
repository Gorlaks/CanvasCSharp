using System.Collections.Generic;

using Canvas.Models;

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
