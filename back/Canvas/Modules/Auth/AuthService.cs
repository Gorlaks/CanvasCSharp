using System;
using Canvas.Controllers;
using MongoDB.Driver;

namespace Canvas.Modules.Auth
{
    /// <summary>
    ///     The main class to process the recieved data about user auth.
    /// </summary>
    public class AuthService : IAuthService
    {
        private IMongoCollection<RegistrationData> Collection;
        public AuthService(IMongoDatabase store)
        {
            Collection = store.GetCollection<RegistrationData>("User");
        }

        /// <summary>
        ///     The method for insert a new user to database.
        /// </summary>
        /// <param name="data"> User data like login, email and password. </param>
        /// <returns></returns>
        public string Registration(RegistrationData data)
        {
            string login = data.login;
            string email = data.email;
            long userCount = Collection.Find(item => item.login == login).CountDocuments();

            // Check for existed the needed information to register.
            if (login.Length != 0 && email.Length != 0)
            {
                // Check for already existed user in database.
                if (userCount == 0)
                {
                    /// <summary>
                    ///     Try to insert new user to database.
                    /// </summary>
                    try
                    {
                        Collection.InsertOne(data);

                        return "{" +
                            $"\"id\": \"{data._id}\", " +
                            $"\"login\": \"{login}\", " +
                            $"\"email\": \"{email}\", " +
                            $"\"role\": \"user\"" +
                        "}";
                    }
                    catch
                    {
                        return $"{{\"error\": \"Something_went_wrong\"}}";
                    }
                }
                else
                {
                    return $"{{\"error\": \"Login_is_busy\"}}";
                }
            }
            else
            {
                return $"{{\"error\": \"Incorrect_data\"}}";
            }
        }
    }
}
