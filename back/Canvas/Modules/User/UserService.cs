using Canvas.Models;


namespace Canvas.Modules.User
{
    public class UserService : IUserService
    {
        private IUserRepository UserRepository;
        public UserService(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }
    }
}
