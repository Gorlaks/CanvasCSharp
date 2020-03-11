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
        string CreateCanvas(string userId, string title, string type);
        string DleteCanvas(string userId, string canvasId);
        string UpdateCanvas(SaveCanvasData data);
    }
}
