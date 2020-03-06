using System.Collections.Generic;

using Canvas.Models;

namespace Canvas.Modules.Users
{
    public interface IUserRepository
    {
        List<User> GetUsers();
        User GetUser(string login);
    }

    public interface IUserService
    {
        User Login(string login, string password);
        void Registration(string email, string login, string password);
    }
}
