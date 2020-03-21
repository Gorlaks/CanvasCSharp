import { container } from "tsyringe";


import { ICanvasRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class CanvasRepository implements ICanvasRepository {

	/** @description Send post request receiving canvas from server by canvas id. */
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