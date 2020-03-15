using System;
using Canvas.Controllers;
using MongoDB.Driver;

namespace Canvas.Modules.Auth
{
    public class AuthService : IAuthService
    {
        private IMongoCollection<RegistrationData> Collection;
        public AuthService(IMongoDatabase store)
        {
            Collection = store.GetCollection<RegistrationData>("User");
        }

        public string Registration(RegistrationData data)
        {
            string login = data.login;
            string email = data.email;
            long userCount = Collection.Find(item => item.login == login).CountDocuments();

            if (login.Length != 0 && email.Length != 0)
            {
                if(userCount == 0)
                {
                    try
                    {
                        Collection.InsertOne(data);

                        return "{" +
                            $"\"id\": \"{data._id}\", " +
                            $"\"login\": \"{login}\", " +
                            $"\"email\": \"{email}\"" +
                        "}";
                    }
                    catch (Exception e)
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
