using Canvas.Controllers.Admin;

namespace Canvas.Modules.CanvasTemplate
{
    public interface ICanvasTemplateRepository
    {
        Models.Canvas GetCanvasTemplateByType(string type);
        string GetCanvasTemplates(GetCanvasTemplatesModel data);
    }

    public interface ICanvasTemplateService
    {
        string CreateCanvasTemplate(CreateCanvasTemplateModel data);
        string DeleteCanvasTemplate(DeleteCanvasTemplateModel data);
    }
}