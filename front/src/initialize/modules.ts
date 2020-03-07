import { container } from "tsyringe";
import { url } from "../utils/constants";

import LocalStorageApi from "../modules/common/storage/localStorageApi";
import ApiClient from "../modules/common/apiClient/apiClient";

import AuthRepository from "../modules/auth/authRepository";
import LanguageRepository from "../modules/common/language/languageRepository";
import UserRepositroy from "../modules/user/userRepository";

import AuthService from "../modules/auth/authService";
import LanguageService from "../modules/common/language/languageService";
import UserService from "../modules/user/userService";

const initModules = (): void => {
	const localStorageApi = new LocalStorageApi();
	const apiClient = new ApiClient(url);

	const authRepository = new AuthRepository(apiClient);
	const languageRepository = new LanguageRepository();
	const userRepositroy = new UserRepositroy();

	const authService = new AuthService(authRepository, localStorageApi);
	const languageService = new LanguageService();
	const userService = new UserService(userRepositroy);

	container.register("languageRepository", { useValue: languageRepository });
	container.register("languageService", { useValue: languageService });
	container.register("localStorageApi", { useValue: localStorageApi });
	container.register("authRepository", { useValue: authRepository });
	container.register("userRepositroy", { useValue: userRepositroy });
	container.register("userService", { useValue: userService });
	container.register("authService", { useValue: authService });
	container.register("apiClient", { useValue: apiClient });
}

export default initModules;