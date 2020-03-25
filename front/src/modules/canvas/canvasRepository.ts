import { ICanvasRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class CanvasRepository implements ICanvasRepository {
	private apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}

	/** @description Send post request receiving canvas from server by canvas id. */
	async getCanvasById(ownerId: string, canvasId: string) {
		const answer = await this.apiClient.sendRequest({
			ownerId,
			canvasId
		}, "/getCanvasById");
		
		return answer;
	}
	
}

export default CanvasRepository;