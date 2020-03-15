import { ICreateCanvasTemplate } from "../common/redux/interfaces";

export interface ICreateCanvasTemplateModalService {
  createCanvasTemplate(templateData: ICreateCanvasTemplate): Promise<any>;
}