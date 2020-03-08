import { IAuthRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

import { UrlPath } from "../../utils/constants";

class AuthRepository implements IAuthRepository {
	private apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}

	async authentication(login: string, password: string) {
		const path = `${UrlPath.LOGIN}`;
		const result = await this.apiClient.sendRequest({
			login,
			password
		}, path)

		return result;
	}
}

export default AuthRepository;