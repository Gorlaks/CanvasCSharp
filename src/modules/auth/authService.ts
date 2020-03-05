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
		if(result) {
			this.localStorageApi.setLocalData("userAuthData", result);
		} else throw new Error("Incorrect data");
	}
}

export default AuthService;