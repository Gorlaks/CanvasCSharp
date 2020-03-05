import { IApiClient, IParams } from "./interfaces";

class ApiClient implements IApiClient {
	async sendRequest(params: IParams) {
		const answer = await fetch("f", {
			method: "GET",
		})

		return answer.json();
	}
}

export default ApiClient;