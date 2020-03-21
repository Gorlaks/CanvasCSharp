import { ICreateCanvasTemplateModalService } from "./interfaces";
import { ICreateCanvasTemplate } from "../common/redux/interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class CreateCanvasTemplateModalService implements ICreateCanvasTemplateModalService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  /** @description Send post request for creating canvas template. */
  async createCanvasTemplate(templateData: ICreateCanvasTemplate) {
    await this.apiClient.sendRequest(templateData, "/createCanvasTemplate")
  }
}

export default CreateCanvasTemplateModalService;