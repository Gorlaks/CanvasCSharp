﻿using Microsoft.AspNetCore.Mvc;

using Canvas.Models;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        public string Post(LoginData data)
        {
            string login = data.login;
            string password = data.password;
            try
            {
                User user = Initialize.Modules.userRepository.GetUser(login);
                if(user.password == password)
                {
                    return $"{{" +
                         $"\"id\": \"{user._id}\"," +
                         $"\"login\": \"{user.login}\"," +
                         $"\"email\": \"{user.email}\"" +
                     $"}}";
                } else
                {
                    return "{\"error\": \"Incorrect password\"}";
                }
            }
            catch
            {
                return "{\"error\": \"Login is failed\"}";
            }
        }
    }

    public class LoginData
    {
        public string login { get; set; }
        public string password { get; set; }
    }
}
