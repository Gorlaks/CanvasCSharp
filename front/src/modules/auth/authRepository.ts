import { IAuthRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AuthRepository implements IAuthRepository {
	private apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}

	/** @description Send post request for login. */
	async authentication(login: string, password: string) {
		const result = await this.apiClient.sendRequest({
			login,
			password
		}, "/login")

		return result;
	}
}

export default AuthRepository;