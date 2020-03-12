import { IAuthService, IAuthRepository, IRegistrationData } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import { ILocalStorageApi } from "../common/storage/interfaces";
import { GetStore } from "../common/redux/store";
import * as types from "../../utils/reduxConstants";

class AuthService implements IAuthService {
	private authRepository: IAuthRepository;
	private localStorageApi: ILocalStorageApi;
	private apiClient: IApiClient;

	constructor(
		authRepository: IAuthRepository,
		localStorageApi: ILocalStorageApi,
		apiClient: IApiClient
	) {
		this.authRepository = authRepository;
		this.localStorageApi = localStorageApi;
		this.apiClient = apiClient;
	}

	async login(login: string, password: string) {
		const result = await this.authRepository.authentication(login, password);

		if(result.error) {
			throw result.error;
		} else {
			this.localStorageApi.setLocalData("userAuthData", result);
			GetStore().dispatch({
				type: types.SET_USER_AUTH_DATA,
				userAuthData: result
			});
		}
	}

	async registration(data: IRegistrationData) {
		const result = await this.apiClient.sendRequest(data, "/registration");
		if(!result.error) {
			this.localStorageApi.setLocalData("userAuthData", result);
			GetStore().dispatch({
				type: types.SET_USER_AUTH_DATA,
				userAuthData: result
			});
		};
		return result;
	}
}

export default AuthService;