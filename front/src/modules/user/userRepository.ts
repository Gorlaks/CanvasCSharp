import { container } from "tsyringe";

import { IUserRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";


class UserRepositroy implements IUserRepository {
	async getCanvasList(ownerId: string) {
		const apiClient: IApiClient = container.resolve("apiClient");
		const answer = await apiClient.sendRequest({
			ownerId
		}, "/userCanvasList");
		
		return answer;
	}
}

export default UserRepositroy;