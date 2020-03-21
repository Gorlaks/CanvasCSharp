using IronPdf;

using Canvas.Controllers;

namespace Canvas.Modules.Pdf
{
    /// <summary>
    ///     The main class for generate and save new pdf documents.
    /// </summary>
    public class PdfCreater : IPdfCreater
    {
        /// <value> For getting iron pdf renderer. </value>
        private HtmlToPdf Renderer { get; set; }

        public PdfCreater()
        {
            Renderer = new IronPdf.HtmlToPdf();
        }
        /// <summary>
        ///     The method for generating of a new html string for pdf document.
        /// </summary>
        /// <param name="data"> Information about the requested canvas. </param>
        /// <returns> The generated string with html tags. </returns>
        public string GenerateHtmlString(CreatePdfData data)
        {
            // Block with main title.
            string mainTitle = "<div style='width: 100%; height: 70px; text-align: center;'>" +
                                   $"<p style='font-size: 25px; font-weight: 600;'>{data.title}</p>" +
                               "</div>";
            // Block with content.
            string content = "<div>";

            foreach(Models.CanvasItemInData item in data.data)
            {
                string position = $"{item.position[0]}/{item.position[1]}/{item.position[2]}/{item.position[3]}";
                content += "<div style='font-size: 20px;'>" +
                               $"<span style='font-weight: 600;'>{item.title}:</span>" +
                               $"<span style='margin-left: 8px;'>{item.content}.</span>" +
                           "</div>";
            };

            content += "</div>";

            string htmlString = "<div style = 'width: 100%; height: 100vh;'>" + mainTitle + content + "</div>";

            return htmlString;
        }

        /// <summary>
        ///     The method for saving the generated html string to pdf document.
        /// </summary>
        /// <param name="htmlString"> Generated html string in the GenerateHtmlString method. </param>
        /// <param name="outputFile"> Name of the output file. </param>
        /// <returns> Link for the download the html document. </returns>
        public string SavePdf(string htmlString, string outputFile)
        {
            string pathToFile = $"https://localhost:5001/{outputFile}.pdf";
            PdfDocument PDF = this.Renderer.RenderHtmlAsPdf(htmlString);
            string OutputPath = $"wwwroot/{outputFile}.pdf";
            PDF.TrySaveAs(OutputPath);

            return $"{{\"pathToDocument\": \"{pathToFile}\"}}";
        }
    }
}