
using System.Collections.Generic;
using Canvas.Models;
using MongoDB.Bson;

namespace Canvas.Modules.Canvas
{
    public class CanvasService : ICanvasService
    {
        private ICanvasRepository CanvasRepository;

        public CanvasService(ICanvasRepository canvasRepository)
        {
            CanvasRepository = canvasRepository;
        }

        public List<Models.Canvas> UserCanvases(string userId)
        {
            List<Models.Canvas> canvases = CanvasRepository.GetUserCanvases(userId);
            if (canvases.Count > 0) return canvases;
            else throw new System.Exception("User don't have any canvases");
        }
    }
}
