﻿using Microsoft.AspNetCore.Mvc;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers.Admin
{
    [ApiController]
    [Route("admin/[controller]")]

    /// <summary>
    ///     The controller to get all users from database.
    /// </summary>
    public class GetUsersController : Controller
    {
        [HttpPost]
        public string Post(GetUsersModel data)
        {
            string answer = modules.userRepository.GetUsers(data);
            return answer;
        }
    }

    /// <summary>
    ///     The model for needed data to get users.
    /// </summary>
    public class GetUsersModel
    {
        public string id { get; set; }
    }
}
