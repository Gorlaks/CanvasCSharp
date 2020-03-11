using System.Collections.Generic;

using Canvas.Controllers;

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
        string CreateCanvas(string ownerId, string title, string type);
        string DleteCanvas(string ownerId, string canvasId);
        string UpdateCanvas(SaveCanvasData data);
    }
}
