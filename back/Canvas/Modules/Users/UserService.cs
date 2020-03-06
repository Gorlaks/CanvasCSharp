using Canvas.Models;


namespace Canvas.Modules.Users
{
    public class UserService : IUserService
    {
        private IUserRepository UserRepository;
        public UserService(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }

        public User Login(string login, string password)
        {
            User user = UserRepository.GetUser(login);
            if (user.password == password)
                return user;
            else throw new System.Exception();
        }

        public void Registration(string email, string login, string password)
        {

        }
    }
}
