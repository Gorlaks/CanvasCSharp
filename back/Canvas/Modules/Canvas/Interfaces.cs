using System.Collections.Generic;

using Canvas.Controllers;

namespace Canvas.Modules.Canvas
{
    public interface ICanvasRepository
    {
        string GetUserCanvasList(UserData data);
        string GetAllCanvases();
        string GetCanvasById(CanvasByIdData data);
    }
    public interface ICanvasService
    {
        string CreateCanvas(CreateCanvasData data);
        string DeleteCanvas(DeleteCanvasData data);
        string UpdateCanvas(SaveCanvasData data);
    }
}
