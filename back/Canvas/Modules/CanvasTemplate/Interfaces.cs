namespace Canvas.Modules.CanvasTemplate
{
    public interface ICanvasTemplateRepository
    {
        Models.Canvas getCanvasTemplateByType(string type);
    }
}