using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Canvas.Modules.Pdf;

using modules = Canvas.Initialize.Modules;

namespace Canvas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    /// <summary>
    ///     The controller to create pdf document of canvas data.
    /// </summary>
    public class CreatePdfController : Controller
    {
        [HttpPost]
        public string Post(CreatePdfData data)
        {
            IPdfCreater pdfCreater = modules.pdfCreater;

            // Generate html string.
            string htmlString = pdfCreater.GenerateHtmlString(data);
            // Save pdf document of html string.
            string linkToPdfDocument = pdfCreater.SavePdf(htmlString, data.title);
            // Send to the client of link to download html document.
            return linkToPdfDocument;
        }
    }

    /// <summary>
    ///     The model for data about canvas.
    /// </summary>
    public class CreatePdfData
    {
        public string title { get; set; }
        public List<Models.CanvasItemInData> data { get; set; }
    }
}
