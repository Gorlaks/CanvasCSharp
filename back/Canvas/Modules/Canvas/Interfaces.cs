using System.Collections.Generic;
using MongoDB.Bson;

namespace Canvas.Modules.Canvas
{
    public interface ICanvasRepository
    {
        List<Models.Canvas> GetUserCanvases(string userId);
        List<Models.Canvas> GetAllCanvases();
        Models.Canvas GetCanvasById(string userId, string canvasId);
    }
    public interface ICanvasService
    {
        List<Models.Canvas> UserCanvases(string userId);
    }
}
