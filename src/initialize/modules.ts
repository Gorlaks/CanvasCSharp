import { container } from "tsyringe";

import LocalStorageApi from "../modules/common/storage/localStorageApi";
import ApiClient from "../modules/common/apiClient/apiClient";

import LoginRepository from "../modules/login/loginRepository";

import LoginService from "../modules/login/loginService";

const initModules = (): void => {
	const localStorageApi = new LocalStorageApi();
	const apiClient = new ApiClient();

	const loginRepository = new LoginRepository(apiClient);

	const loginService = new LoginService(loginRepository, localStorageApi);

	container.register("localStorageApi", { useValue: localStorageApi });
	container.register("loginRepository", { useValue: loginRepository });
	container.register("loginService", { useValue: loginService });
	container.register("apiClient", { useValue: apiClient });
}

export default initModules;