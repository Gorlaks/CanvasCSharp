import { ILoginRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class LoginRepository implements ILoginRepository {
	private apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}

	async authentication(login: string, password: string) {
		const result = await this.apiClient.sendRequest({
			login,
			password
		})

		return result;
	}
}

export default LoginRepository;