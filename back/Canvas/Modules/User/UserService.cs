namespace Canvas.Modules.User
{
    /// <summary>
    ///     The main class to process the received information about user.
    /// </summary>
    public class UserService : IUserService
    {
        private IUserRepository UserRepository;
        public UserService(IUserRepository userRepository)
        {
            UserRepository = userRepository;
        }
    }
}
