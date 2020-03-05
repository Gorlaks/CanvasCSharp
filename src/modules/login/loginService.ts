import { ILoginService, ILoginRepository } from "./interfaces";
import { ILocalStorageApi } from "../common/storage/interfaces";

class LoginService implements ILoginService {
	private loginRepository: ILoginRepository;
	private localStorageApi: ILocalStorageApi

	constructor(loginRepository: ILoginRepository, localStorageApi: ILocalStorageApi) {
		this.loginRepository = loginRepository;
		this.localStorageApi = localStorageApi;
	}

	async login(login: string, password: string) {
		const result = await this.loginRepository.authentication(login, password);
		if(result) {
			this.localStorageApi.setLocalData("userAuthData", result);
		} else throw new Error("Incorrect data");
	}
}

export default LoginService;