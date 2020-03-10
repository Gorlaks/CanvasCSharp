using System.Collections.Generic;

using Canvas.Models;

namespace Canvas.Modules.Canvas
{
    public static class CanvasCreater
    {
        public static List<CanvasItemInData> GenerateLeanCanvas()
        {
            List<CanvasItemInData> canvasData = new List<CanvasItemInData>
            {
                new CanvasItemInData()
                {
                    position = new int[]{ 1, 5, 3, 5 },
                    title = "Consumer segments",
                    content = "",
                    description = "Who are we working for? Who is the most important customer for us?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 1, 3, 3, 3 },
                    title = "Key values",
                    content = "",
                    description = "What customer problems do we solve? What is valuable in our offer?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 2, 4, 2, 4 },
                    title = "Channels",
                    content = "",
                    description = "What channels do our customers want to receive our values through?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 1, 4, 1, 4 },
                    title = "customer relationship",
                    content = "",
                    description = "What is our relationship with each of the segments? How are they integrated?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 3, 4, 3, 6 },
                    title = "Profit streams",
                    content = "",
                    description = "What are our customers willing to pay for? What are they paying for now? How do they pay? What is the share of each of the flows in the total income?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 2, 2, 3, 3 },
                    title = "Key resources",
                    content = "",
                    description = "What key resources do we need to create core values?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 1, 2, 1, 2 },
                    title = "Key acts",
                    content = "",
                    description = "What key actions do we need to work? For distribution channels?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 1, 1, 3, 1 },
                    title = "Key partners",
                    content = "",
                    description = "Who are our key partners? Who are our key suppliers?"
                },
                new CanvasItemInData()
                {
                    position = new int[]{ 3, 1, 3, 4 },
                    title = "Cost structure",
                    content = "",
                    description = "What are the most important costs associated with a business model? Which key resources are the most expensive?"
                }
            };

            return canvasData;
        }
    }
}
