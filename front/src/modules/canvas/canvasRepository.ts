import { container } from "tsyringe";


import { ICanvasRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class CanvasRepository implements ICanvasRepository {
	async getCanvasById(ownerId: string, canvasId: string) {
		const apiClient: IApiClient = container.resolve("apiClient");
		const answer = await apiClient.sendRequest({
			ownerId,
			canvasId
		}, "/getCanvasById");
		
		return answer;
	}
}

export default CanvasRepository;