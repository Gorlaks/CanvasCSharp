import { GetStore } from "../common/redux/store";
import { ICanvasData } from "../common/redux/interfaces";
import { ICanvasService } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import * as types from "../../utils/reduxConstants";

class CanvasService implements ICanvasService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async deleteCanvas(userId: string, canvasId: string) {
    return await this.apiClient.sendRequest({
      userId,
      canvasId
    }, "/deleteCanvas");
  }

  async createCanvas(userId: string, title: string, type: string) {
    return await this.apiClient.sendRequest({
      userId,
      title,
      type
    }, "/createCanvas");
  }

  async setCanvasListAfterRemoving(canvasId: string) {
    const canvasList = GetStore().getState().userReducer.canvasList
    .filter((item: ICanvasData) => item.id !== canvasId);
    await GetStore().dispatch({
      type: types.SET_CANVAS_LIST,
			canvasList
    })
  }

  async updateCanvas(canvasData: Record<string, any>) {
    return await this.apiClient.sendRequest({
      canvasId: canvasData.id,
      ownerId: canvasData.ownerId,
      title: canvasData.title,
      data: canvasData.data
    }, "/updateCanvas");
  }
}

export default CanvasService;