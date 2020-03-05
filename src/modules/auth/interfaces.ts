export interface IAuthRepository {
	authentication(login: string, password: string): Promise<any>;
}

export interface IAuthService {
	login(login: string, password: string): void;
}