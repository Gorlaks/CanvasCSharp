using System.Collections.Generic;
using MongoDB.Bson;

namespace Canvas.Modules.Canvas
{
    public interface ICanvasRepository
    {
        List<Models.Canvas> GetUserCanvases(string userId);
        List<Models.Canvas> GetAllCanvases();
    }
    public interface ICanvasService
    {
        List<Models.Canvas> UserCanvases(string userId);
    }
}
