import { container } from "tsyringe";

import { IUserRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import { UrlPath } from "../../utils/constants";


class UserRepositroy implements IUserRepository {
	async getCanvasList(userId: string) {
		const apiClient: IApiClient = container.resolve("apiClient");
		const answer = await apiClient.sendRequest({
			userId
		}, "/userCanvasList");
		
		return answer;
	}
}

export default UserRepositroy;