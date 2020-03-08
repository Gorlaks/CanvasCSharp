using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Canvas.Modules.User;

namespace Canvas.Modules.Auth
{
    public class AuthService : IAuthService
    {
        private IUserRepository UserRepository;
        public AuthService(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }

        public Models.User Login(string login, string password)
        {
            Models.User user = UserRepository.GetUser(login);
            if (user.password == password)
                return user;
            else throw new System.Exception();
        }
    }
}
