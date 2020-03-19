import { container } from "tsyringe";
import { url } from "../utils/constants";

import LocalStorageApi from "../modules/common/storage/localStorageApi";
import ApiClient from "../modules/common/apiClient/apiClient";

import AuthRepository from "../modules/auth/authRepository";
import LanguageRepository from "../modules/common/language/languageRepository";
import UserRepositroy from "../modules/user/userRepository";
import CanvasRepository from "../modules/canvas/canvasRepository";

import AuthService from "../modules/auth/authService";
import LanguageService from "../modules/common/language/languageService";
import UserService from "../modules/user/userService";
import CanvasService from "../modules/canvas/canvasService";
import HeaderService from "../modules/header/headerService";
import CreateCanvasTemplateModalService from "../modules/createCanvasTemplateModal/createCanvasTemplateModalService";

/**
 * @desc Create singleton objects of every service, repository, etc in project.
*/
const initModules = (): void => {
	const localStorageApi = new LocalStorageApi();
	const apiClient = new ApiClient(url);

	const authRepository = new AuthRepository(apiClient);
	const languageRepository = new LanguageRepository();
	const userRepositroy = new UserRepositroy();
	const canvasRepository = new CanvasRepository();

	const authService = new AuthService(authRepository, localStorageApi, apiClient);
	const languageService = new LanguageService(localStorageApi);
	const userService = new UserService(userRepositroy);
	const canvasService = new CanvasService(apiClient);
	const headerService = new HeaderService(localStorageApi);
	const createCanvasTemplateModalService = new CreateCanvasTemplateModalService(apiClient);
	
	container.register("createCanvasTemplateModalService", { useValue: createCanvasTemplateModalService });
	container.register("languageRepository", { useValue: languageRepository });
	container.register("canvasRepository", { useValue: canvasRepository });
	container.register("languageService", { useValue: languageService });
	container.register("localStorageApi", { useValue: localStorageApi });
	container.register("authRepository", { useValue: authRepository });
	container.register("userRepositroy", { useValue: userRepositroy });
	container.register("canvasService", { useValue: canvasService });
	container.register("headerService", { useValue: headerService });
	container.register("userService", { useValue: userService });
	container.register("authService", { useValue: authService });
	container.register("apiClient", { useValue: apiClient });
}

export default initModules;