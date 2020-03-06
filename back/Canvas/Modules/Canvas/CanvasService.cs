using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Canvas.Modules.Canvas
{
    public class CanvasService : ICanvasService
    {
        private ICanvasRepository CanvasRepository;

        public CanvasService(ICanvasRepository canvasRepository)
        {
            CanvasRepository = canvasRepository;
        }
    }
}
