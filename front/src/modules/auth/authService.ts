import { IAuthService, IAuthRepository } from "./interfaces";
import { ILocalStorageApi } from "../common/storage/interfaces";

class AuthService implements IAuthService {
	private authRepository: IAuthRepository;
	private localStorageApi: ILocalStorageApi

	constructor(authRepository: IAuthRepository, localStorageApi: ILocalStorageApi) {
		this.authRepository = authRepository;
		this.localStorageApi = localStorageApi;
	}

	async login(login: string, password: string) {
		const result = await this.authRepository.authentication(login, password);

		if(result.error) {
			throw result.error;
		} else {
			this.localStorageApi.setLocalData("userAuthData", result);
		}
		
	}
}

export default AuthService;