using Canvas.Controllers;

namespace Canvas.Modules.Pdf
{
    public interface IPdfCreater
    {
        string GenerateHtmlString(CreatePdfData data);
        string SavePdf(string htmlString, string outputFile);
    }
}
